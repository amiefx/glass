<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\QtyAdjustmentCollection;
use App\Http\Resources\QtyAdjustmentResource;

use App\Models\QtyAdjustment;
use Illuminate\Http\Request;

class QtyAdjustmentController extends Controller
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
            'qty_adjustment' => new QtyAdjustmentCollection(QtyAdjustment::orderBy($sortBy, $orderBy)->paginate($per_page)) ,
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

        $qty_adjustment = new QtyAdjustment([
            'order_id' => 0,
            'product_id' => $request->product_id,
            'quantity' => $request->quantity,
            'price' => $request->price,
            'user_id' => $user->id
        ]);
        $qty_adjustment->save();
        return response()->json(['qty_adjustment'=> new QtyAdjustmentResource($qty_adjustment)], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\QtyAdjustment  $qtyAdjustment
     * @return \Illuminate\Http\Response
     */
    public function show(QtyAdjustment $qtyAdjustment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\QtyAdjustment  $qtyAdjustment
     * @return \Illuminate\Http\Response
     */
    public function edit(QtyAdjustment $qtyAdjustment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\QtyAdjustment  $qtyAdjustment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = auth()->user();

        $qty_adjustment = QtyAdjustment::find($id);

        $qty_adjustment->order_id = $request->order_id;
        $qty_adjustment->product_id = $request->product_id;
        $qty_adjustment->quantity = $request->quantity;
        $qty_adjustment->price = $request->price;
        $qty_adjustment->user_id = $user->id;
        $qty_adjustment->is_active = $request->is_active;

        $qty_adjustment->save();
        return response()->json(['qty_adjustment' => new QtyAdjustmentResource($qty_adjustment)], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\QtyAdjustment  $qtyAdjustment
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $qty_adjustment = QtyAdjustment::find($id)->delete();
        return response()->json(['qty_adjustment' => $qty_adjustment], 200);
    }



    //relationships methods
    public function qtyAdjustmentProduct(Request $request, $id)
    {
        $product= QtyAdjustment::findOrFail($id)->products;
        return response()->json(['product'=>$product]);
    }

    public function qtyAdjustmentOrder(Request $request, $id)
    {
        $order= QtyAdjustment::findOrFail($id)->order;
        return response()->json(['order'=>$order]);
    }

    public function qtyAdjustmentUser(Request $request, $id)
    {
        $user= QtyAdjustment::findOrFail($id)->user;
        return response()->json(['user'=>$user]);
    }
}
