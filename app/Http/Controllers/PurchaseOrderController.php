<?php

namespace App\Http\Controllers;

use App\Models\PurchaseOrder;
use App\Models\Purchase;
use Illuminate\Http\Request;

use App\Http\Resources\PurchaseOrderCollection;
use App\Http\Resources\PurchaseOrderResource; 
use Illuminate\Support\Facades\DB;

class PurchaseOrderController extends Controller
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
            'purchase_orders' => new PurchaseOrderCollection(PurchaseOrder::orderBy($sortBy, $orderBy)->paginate($per_page)) ,
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

            $purchaseorder = new PurchaseOrder([
                "supplier_id" => $order['supplier_id'],
                "total" => $order['total'],
                "amount_recieved" => $order['paid_amt'],
                "discount" => $order['discount'],
                "note" => $order['note'],
                "status" => $order['pmt_method'],
                "user_id" => $user->id,
            ]);
            $purchaseorder->save();

            $items = $postData['orderedItems'];

            foreach($items as $item)
            {
                Purchase::create([
                    'order_id' => $purchaseorder->id,
                    'product_id' => $item['product']['id'],
                    'quantity' => $item['quantity'],
                    'price' => $item['product']['purchase_price'],
                    'is_active' => $item['product']['is_active'],
                    'user_id' => $user->id,
                ]);
            }



            DB::commit();
        } catch (\Throwable $th) {
            DB::rollback();

            return response()->json(['error'=> $th->getMessage()], 500);
        }

    return response()->json(['purchase_order'=> $purchaseorder, 'purchase_order_items' => $items], 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PurchaseOrder  $purchaseOrder
     * @return \Illuminate\Http\Response
     */
    public function show(PurchaseOrder $purchaseOrder, $id)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'created_at';
        $orderBy = $request->order_by ? $request->order_by : 'desc';
        $purchaseorders = PurchaseOrder::where('supplier_id', '=', "$id");
        return response()->json([
            'purchase_orders' => new PurchaseOrderCollection($purchaseorders->orderBy($sortBy, $orderBy)->paginate($per_page)),
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PurchaseOrder  $purchaseOrder
     * @return \Illuminate\Http\Response
     */
    public function edit(PurchaseOrder $purchaseOrder)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PurchaseOrder  $purchaseOrder
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = auth()->user();

        $purchaseorder = PurchaseOrder::find($id);

        $purchaseorder->supplier_id = $request->supplier_id;
        $purchaseorder->total = $request->total; 
        $purchaseorder->amount_recieved = $request->amount_recieved;
        $purchaseorder->discount = $request->discount; 
        $purchaseorder->status = $request->status;
        $purchaseorder->note = $request->note;
        $purchaseorder->user_id = $user->id;
        
        $purchaseorder->save();
        return response()->json(['purchase_order' => new PurchaseOrderResource($purchaseorder)], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PurchaseOrder  $purchaseOrder
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $purchaseorder = PurchaseOrder::find($id)->delete();
        return response()->json(['purchaseorder' => $purchaseorder], 200);
    }

    //relationships methods
    public function purchaseOrderSupplier($id)
    {
        $supplier= PurchaseOrder::findOrFail($id)->supplier;
        return response()->json(['supplier'=>$supplier]);
    }


}
