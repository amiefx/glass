<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderDetailCollection;
use App\Http\Resources\OrderDetailResource;

use App\Models\OrderDetail;
use Illuminate\Http\Request;

class OrderDetailController extends Controller
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
            'order_details' => new OrderDetailCollection(OrderDetail::orderBy($sortBy, $orderBy)->paginate($per_page)) ,
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
        $order_detail = new OrderDetail([ 
            'order_id' => $request->order_id,
            'product_id' => $request->product_id,
            'quantity' => $request->quantity,
            'price' => $request->price,
            'g_height' => $request->g_height,
            'g_width' => $request->g_width,  
        ]);
        $order_detail->save();
        return response()->json(['order_detail'=> new OrderDetailResource($order_detail)], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OrderDetail  $orderDetail
     * @return \Illuminate\Http\Response
     */
    public function show(OrderDetail $orderDetail)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OrderDetail  $orderDetail
     * @return \Illuminate\Http\Response
     */
    public function edit(OrderDetail $orderDetail)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OrderDetail  $orderDetail
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $order_detail = OrderDetail::find($id);

        $order_detail->order_id = $request->order_id;
        $order_detail->product_id = $request->product_id; 
        $order_detail->quantity = $request->quantity; 
        $order_detail->price = $request->price;
        $order_detail->g_height = $request->g_height; 
        $order_detail->g_width = $request->g_width;

        $order_detail->save();
        return response()->json(['order_detail' => new OrderDetailResource($order_detail)], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OrderDetail  $orderDetail
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $order_detail = OrderDetail::find($id)->delete();
        return response()->json(['order_detail' => $order_detail], 200);
    }


    //relationships methods
    public function orderDetailProduct(Request $request, $id)
    {
        $product= OrderDetail::findOrFail($id)->products;
        return response()->json(['product'=>$product]);
    }
}
