<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderCollection;
use App\Http\Resources\OrderResource;
use App\Http\Resources\OrderDetailResource;
use App\Http\Resources\InvoiceDetailResource;
use App\Models\Cash;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Receivable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'id';
        $orderBy = $request->order_by ? $request->order_by : 'desc';
        $customer_id = $request->customer_id;
        $orders = Order::where('customer_id', '=', $customer_id );
        return response()->json([
            'orders' => new OrderCollection($orders->orderBy($sortBy, $orderBy)->paginate($per_page)) ,
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $user = auth()->user();
        $postData = $request->all();

        try {
            DB::beginTransaction();

            $order = $postData['orderDetails'];

            $neworder = new Order([
                'customer_id' => $order['customer_id'],
                'sub_total' => $order['sub_total'],
                'discount' => $order['discount'],
                'total' => $order['total'],
                'amount_recieved' => $order['received_amt'],
                "discount" => $order['discount'],
                'status' => $order['doc_type'],
                // 'note' => $request->note,
                'user_id' => $user->id,
            ]);
            $neworder->save();

            $items = $postData['orderedItems'];

            foreach($items as $item)
            {
                OrderDetail::create([
                    'order_id' => $neworder->id,
                    'product_id' => $item['product']['id'],
                    'quantity' => $item['quantity'],
                    'price' => $item['product']['selling_price'],
                    'is_active' => $item['product']['is_active'],
                    'user_id' => $user->id,
                ]);
            }

            if ($order['receivable_amt'] > 0) {

                Receivable::create([
                    'type' => 'invoice',
                    'doc_id' => $neworder->id,
                    'customer_id' => $order['customer_id'],
                    'debit' => $order['receivable_amt'],
                    'credit' => 0,
                    'balance' => $order['receivable_amt'],
                    'status' => $order['doc_type'] == 'Invoice' ? 1 : 0,
                    'user_id' => $user->id
                ]);

            }

            if ($order['received_amt'] > 0) {

                Cash::create([
                    'doc_type' => 'invoice',
                    'doc_id' => $neworder->id,
                    'customer_id' => $order['customer_id'],
                    'debit' => $order['received_amt'],
                    'credit' => 0,
                    'balance' => $order['received_amt'],
                    'status' => $order['doc_type'] == 'Invoice' ? 1 : 0,
                    'user_id' => $user->id
                ]);

            }


            DB::commit();
        } catch (\Throwable $th) {
            DB::rollback();

            return response()->json(['error'=> $th->getMessage()], 500);
        }

    return response()->json(['order'=> $neworder, 'order_items' => $items], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'id';
        $orderBy = $request->order_by ? $request->order_by : 'asc';
        $orders = Order::where([
            ['id', $id],
        ]);
        return response()->json([
            'orders' => new OrderCollection($orders->orderBy($sortBy, $orderBy)->paginate($per_page)),
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = auth()->user();

        $order = Order::find($id);

        $order->customer_id = $request->customer_id;
        $order->total = $request->total;
        $order->amount_recieved = $request->amount_recieved;
        $order->discount = $request->discount;
        $order->status = $request->status;
        $order->note = $request->note;
        $order->user_id = $user->id;

        $order->save();
        return response()->json(['order' => new OrderResource($order)], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $order = Order::find($id)->delete();
        return response()->json(['order' => $order], 200);
    }


    //relationships methods
    public function orderCustomer($id)
    {
        $customer= Order::findOrFail($id)->customer;
        return response()->json(['customer'=>$customer]);
    }


    public function ceilling_calculation(Request $request)
    {
        $width = $request->width;
        $length = $request->length;
        $angle_max_length = 10;
        $main_t_max_length = 12;

        //number of angles
        $total_length = ($width * 2) + ($length * 2);
        $num_of_angles = ceil($total_length / $angle_max_length);


        //main-t
        $maint_lines = ceil($width / 2 ) - 1;
        $maint_length = $length * $maint_lines;
        $num_of_main_t = ceil($maint_length / $main_t_max_length);

        //cross-t
        $num_of_cross_t = ceil(ceil($width / 2 ) * (($length / 2 ) - 1));

        //sheets
        $num_of_sheets = ceil(($width * $length) / 4);


         return response()->json(['num_of_angles' => $num_of_angles, 'num_of_main_t' => $num_of_main_t
         , 'num_of_cross_t' => $num_of_cross_t, 'num_of_sheets' => $num_of_sheets], 200);
        // return response()->json(['ddd' => $width]);
    }


    public function panel_calculation(Request $request)
    {
        $number = $request->number;
        $length = $request->length;
        $height = $request->height;
        $removals = $request->removals;
        $gola_max_height = 9.5;

        if ($height == "full") {
            $sheet_height = 9.5;
        }elseif ($height == "half") {
            $sheet_height = 4.75;
        }else {
            $sheet_height = 3.16;
        }

        if ($request->sheet_width == 8) {
            $sheet_width = 6.35;
        }elseif ($request->sheet_width == 10) {
            $sheet_width = 7.92;
        }elseif ($request->sheet_width == 16) {
            $sheet_width = 12.66;
        }else {
            $sheet_width = 19.0;
        }

        //number of sheets
        $num_of_sheets = ceil((($length * $number * $sheet_height) - ($removals)) / $sheet_width);


        //gola
        $num_of_gola = ceil(((($length * $number * 2) + ($sheet_height * $number * 2)) + $removals) / $gola_max_height);


        return response()->json(['num_of_sheets' => $num_of_sheets, 'num_of_gola' => $num_of_gola], 200);
    }


    public function invoice_detail($id)
    {
        $order = Order::find($id);

        for ($i=0; $i < count($order->orderdetails); $i++) { 
            $order->orderdetails[$i] = new OrderDetailResource($order->orderdetails[$i]);
        }

        return response()->json([
            'order' => new InvoiceDetailResource($order),
            'orderdetails' => $order->orderdetails
        ], 200);
    }


}
