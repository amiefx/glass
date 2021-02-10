<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderCollection;
use App\Http\Resources\OrderResource;
use App\Http\Resources\OrderDetailResource;
use App\Http\Resources\InvoiceDetailResource;
use App\Http\Resources\SalaryResource;
use App\Models\Cash;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Receivable;
use App\Models\Salary;
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
        $priceflag = "";


        try {
            DB::beginTransaction();

            $order = $postData['orderDetails'];

            if ($order['priceflag'] == true) {
                $priceflag = "Pendding";
            }

            $neworder = new Order([
                'customer_id' => $order['customer_id'],
                'sub_total' => $order['sub_total'],
                'discount' => $order['discount'],
                'total' => $order['total'],
                'amount_recieved' => $order['received_amt'],
                'status' => $priceflag,
                'walkin_name' => $order['walkin_name'],
                'walkin_phone' => $order['walkin_phone'],
                // 'note' => $order['note'] ? $order['note'] : null,
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
                    'g_height' => isset($item['g_height']) ? $item['g_height'] : null,
                    'g_width' => isset($item['g_width']) ? $item['g_width'] : null,
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

            if ($order['suzuki_rent'] > 0) {

                Salary::create([
                    'order_id' => $neworder->id,
                    'employee_id' => $order['driver'],
                    'amount_paid' => $order['suzuki_rent'],
                    'note' => '',
                    'status' => $order['doc_type'],
                    'user_id' => $user->id
                ]);
            }

            if ($order['fitting_charges'] > 0) {

                Salary::create([
                    'order_id' => $neworder->id,
                    'employee_id' => $order['fitter'],
                    'amount_paid' => $order['fitting_charges'],
                    'note' => '',
                    'status' => $order['doc_type'],
                    'user_id' => $user->id
                ]);
            }

            


            DB::commit();
        } catch (\Throwable $th) {
            DB::rollback();

            return response()->json(['error'=> $th->getMessage()], 500);
        }

    return response()->json(['order'=> $neworder, 'order_items' => $items, 'priceflag'  => $priceflag], 200);
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
        $order->walkin_name = $request->walkin_name;
        $order->walkin_phone = $request->walkin_phone;
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

    public function orderByWalkinPhone($id)
    {
        $orders= DB::table('orders')->where('walkin_phone', $id)->get();
        return response()->json(['orders'=>$orders]);
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

    public function glass_calculation(Request $request)
    {
        $number = $request->number;
        $width = $request->width;
        $height = $request->height;
        $width_s_size = 0;
        $height_s_size = 0;

        $back_end_sqft = ($width * $height * $number) / 144;
        
        $width_s_size = $this->standard_sizes($width);
        $height_s_size = $this->standard_sizes($height);

        
        $invoice_sqft = ($width_s_size * $height_s_size * $number) / 144;

        return response()->json(['invoice_sqft' => $invoice_sqft, 'back_end_sqft' => $back_end_sqft, 'number' => $number, 
        'width' => $width, 'height' => $height, 'width_s_size' => $width_s_size, 'height_s_size' => $height_s_size], 200);
    }

    public function standard_sizes($var)
    {
        if ($var>=1 && $var<=6) { 
            return 6;
        } else if ($var>=7 && $var<=12) { 
            return 12;
        }else if ($var>=13 && $var<=18) { 
            return 18;
        }else if ($var>=19 && $var<=24) { 
            return 24;
        }else if ($var>=25 && $var<=30) { 
            return 30;
        }else if ($var>=31 && $var<=36) { 
            return 36;
        }else if ($var>=37 && $var<=42) { 
            return 42;
        }else if ($var>=43 && $var<=48) { 
            return 48;
        }else if ($var>=49 && $var<=54) { 
            return 54;
        }else if ($var>=55 && $var<=60) { 
            return 60;
        }else if ($var>=11 && $var<=66) { 
            return 66;
        }else if ($var>=67 && $var<=72) { 
            return 72;
        }else if ($var>=73 && $var<=84) { 
            return 84;
        }else if ($var>=85 && $var<=96) { 
            return 96;
        }else if ($var>=97 && $var<=108) { 
            return 108;
        }else if ($var>=109 && $var<=120) { 
            return 120;
        }else if ($var>=121 && $var<=132) { 
            return 132;
        }else if ($var>=133 && $var<=144) { 
            return 144;
        }else{
            return 0;
        }
        
    }


    public function invoice_detail($id)
    {
        $order = Order::findOrFail($id);

        for ($i=0; $i < count($order->orderdetails); $i++) { 
            $order->orderdetails[$i] = new OrderDetailResource($order->orderdetails[$i]);
        }


        $slry = Salary::where('order_id', $order->id)->get();

        for ($i=0; $i < count($slry); $i++) { 
            $slry[$i] = new SalaryResource($slry[$i]);
        }

        return response()->json([
            'order' => new InvoiceDetailResource($order),
            'orderdetails' => $order->orderdetails,
            'salary' => $slry
        ], 200);
    }


}
