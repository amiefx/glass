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

    //     $user = auth()->user();
    //     $postData = $request->all();
    //     $priceflag = "";


    //     try {
    //         DB::beginTransaction();

    //         $order = $postData['orderDetails'];

    //         if ($order['priceflag'] == true) {
    //             $priceflag = "Pendding";
    //         }

    //         $neworder = new Order([
    //             'customer_id' => $order['customer_id'],
    //             'sub_total' => $order['sub_total'],
    //             'discount' => $order['discount'],
    //             'total' => $order['total'],
    //             'amount_recieved' => $order['received_amt'],
    //             'status' => $priceflag,
    //             'walkin_name' => $order['walkin_name'],
    //             'walkin_phone' => $order['walkin_phone'],
    //             // 'note' => $order['note'] ? $order['note'] : null,
    //             'user_id' => $user->id,
    //         ]);
    //         $neworder->save();

    //         $items = $postData['orderedItems'];

    //         foreach($items as $item)
    //         {
    //             OrderDetail::create([
    //                 'order_id' => $neworder->id,
    //                 'product_id' => $item['product']['id'],
    //                 'quantity' => $item['quantity'],
    //                 'price' => $item['product']['selling_price'],
    //                 'g_height' => isset($item['g_height']) ? $item['g_height'] : null,
    //                 'g_width' => isset($item['g_width']) ? $item['g_width'] : null,
    //                 'is_active' => $item['product']['is_active'],
    //                 'user_id' => $user->id,
    //             ]);
    //         }

    //         if ($order['receivable_amt'] > 0) {

    //             Receivable::create([
    //                 'type' => 'invoice',
    //                 'doc_id' => $neworder->id,
    //                 'customer_id' => $order['customer_id'],
    //                 'debit' => $order['receivable_amt'],
    //                 'credit' => 0,
    //                 'balance' => $order['receivable_amt'],
    //                 'status' => $order['doc_type'] == 'Invoice' ? 1 : 0,
    //                 'user_id' => $user->id
    //             ]);

    //         }

    //         if ($order['received_amt'] > 0) {

    //             Cash::create([
    //                 'doc_type' => 'invoice',
    //                 'doc_id' => $neworder->id,
    //                 'customer_id' => $order['customer_id'],
    //                 'debit' => $order['received_amt'],
    //                 'credit' => 0,
    //                 'balance' => $order['received_amt'],
    //                 'status' => $order['doc_type'] == 'Invoice' ? 1 : 0,
    //                 'user_id' => $user->id
    //             ]);
    //         }

    //         if ($order['suzuki_rent'] > 0) {

    //             Salary::create([
    //                 'order_id' => $neworder->id,
    //                 'employee_id' => $order['driver'],
    //                 'amount_paid' => $order['suzuki_rent'],
    //                 'note' => '',
    //                 'status' => $order['doc_type'],
    //                 'user_id' => $user->id
    //             ]);
    //         }

    //         if ($order['fitting_charges'] > 0) {

    //             Salary::create([
    //                 'order_id' => $neworder->id,
    //                 'employee_id' => $order['fitter'],
    //                 'amount_paid' => $order['fitting_charges'],
    //                 'note' => '',
    //                 'status' => $order['doc_type'],
    //                 'user_id' => $user->id
    //             ]);
    //         }

            


    //         DB::commit();
    //     } catch (\Throwable $th) {
    //         DB::rollback();

    //         return response()->json(['error'=> $th->getMessage()], 500);
    //     }

    // return response()->json(['order'=> $neworder, 'order_items' => $items, 'priceflag'  => $priceflag], 200);

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
