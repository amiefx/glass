<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderCollection;
use App\Http\Resources\OrderResource;

use App\Models\Order;
use App\Models\OrderDetail;
use Illuminate\Http\Request;

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
        $sortBy = $request->sort_by ? $request->sort_by : 'created_at';
        $orderBy = $request->order_by ? $request->order_by : 'desc';
        return response()->json([
            'orders' => new OrderCollection(Order::orderBy($sortBy, $orderBy)->paginate($per_page)) ,
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

            if ($order['doc_type'] == 'Cash') {
                // store in cash register
            }else
            {
                if ($order['payable_amt'] < 0) {
                    $this->payablescontroller->creditPayable($order['doc_type'], $order['customer_id'], '' , $order['payable_amt'], 1, $user->id);
                } else {
                    $this->payablescontroller->debitPayable($order['doc_type'], $order['customer_id'], '' , $order['payable_amt'], 1, $user->id);
                }
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
        $sortBy = $request->sort_by ? $request->sort_by : 'created';
        $orderBy = $request->order_by ? $request->order_by : 'asc';
        $orders = Order::where('status', 'LIKE', "%$id%");
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
}
