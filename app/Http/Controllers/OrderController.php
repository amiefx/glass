<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderCollection;
use App\Http\Resources\OrderResource;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
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

        $order = new Order([ 
            'customer_id' => $request->customer_id,
            'total' => $request->total,
            'amount_recieved' => $request->amount_recieved,
            'status' => $request->status, 
            'note' => $request->note,
            'user_id' => $user->id,
        ]);
        $order->save();
        return response()->json(['order'=> new OrderResource($order)], 200);
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
