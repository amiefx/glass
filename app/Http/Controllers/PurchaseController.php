<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\PurchaseCollection;
use App\Http\Resources\PurchaseResource;

use App\Models\Purchase;
use Illuminate\Http\Request;

class PurchaseController extends Controller
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
            'purchases' => new PurchaseCollection(Purchase::orderBy($sortBy, $orderBy)->paginate($per_page)) ,
        ], 200);
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

        $purchase = new Purchase([ 
            'order_id' => $request->order_id,
            'product_id' => $request->product_id,
            'quantity' => $request->quantity,
            'price' => $request->price, 
            'user_id' => $user->id,
            'is_active' => $request->is_active
        ]);
        $purchase->save();
        return response()->json(['purchase'=> new PurchaseResource($purchase)], 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function show(Purchase $purchase)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function edit(Purchase $purchase)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = auth()->user();

        $purchase = Purchase::find($id);

        $purchase->order_id = $request->order_id;
        $purchase->product_id = $request->product_id; 
        $purchase->quantity = $request->quantity; 
        $purchase->price = $request->price;
        $purchase->user_id = $user->id;
        $purchase->is_active = $request->is_active;

        $purchase->save();
        return response()->json(['purchase' => new PurchaseResource($purchase)], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $purchase = Purchase::find($id)->delete();
        return response()->json(['purchase' => $purchase], 200);
    }

    //relationships methods
    public function purchaseProduct(Request $request, $id)
    {
        $product= Purchase::findOrFail($id)->products;
        return response()->json(['product'=>$product]);
    }

    public function purchaseOrder(Request $request, $id)
    {
        $order= Order::findOrFail($id)->order;
        return response()->json(['order'=>$order]);
    }

}
