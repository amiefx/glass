<?php

namespace App\Http\Controllers;

use App\Models\PurchaseOrder;
use App\Models\Purchase;
use App\Models\Cash;
use App\Models\Bank;
use Illuminate\Http\Request;

use App\Http\Resources\PurchaseOrderCollection;
use App\Http\Resources\PurchaseOrderResource;
use App\Http\Resources\PurchaseInvoiceDetailResource;
use App\Http\Resources\PurchaseInvoiceResource;
use App\Http\Controllers\PayablesController;
use App\Models\Payable;
use Illuminate\Support\Facades\DB;

class PurchaseOrderController extends Controller
{

    protected $payablescontroller;
    public function __construct(PayablesController $payablescontroller)
    {
        $this->payablescontroller = $payablescontroller;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $id = 1;
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'created_at';
        $orderBy = $request->order_by ? $request->order_by : 'desc';
        $supplier_id = $request->supplier_id;
        $purchaseorders = PurchaseOrder::where('supplier_id', '=', $supplier_id );
        return response()->json([
            'purchase_orders' => new PurchaseOrderCollection($purchaseorders->orderBy($sortBy, $orderBy)->paginate($per_page)) ,
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
                "discount" => $order['discount'],
                "sub_total" => $order['subtotal'],
                "amount_paid" => $order['paid_amt'],
                "note" => $order['note'],
                "status" => $order['pmt_method'],
                "user_id" => $user->id,
            ]);
            $purchaseorder->save();

          //  dd($purchaseorder->id);

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

            if ( $order['paid_amt'] > 0 ) {
                if ($order['pmt_method'] == 'Cash') {
                    // store in cash register
                    Cash::create([
                        'doc_type' => 'purchase order',
                        'doc_id' => $purchaseorder->id,
                        'supplier_id' => $order['supplier_id'],
                        'debit' => 0,
                        'credit' => $order['paid_amt'],
                        'balance' => $order['paid_amt'] * (-1),
                        'user_id' => $user->id,
                        'status' => 1,
                    ]);
                } else {
                    // store in back account
                    Bank::create([
                        'doc_type' => 'purchase order',
                        'doc_id' => $purchaseorder->id,
                        'supplier_id' => $order['supplier_id'],
                        'debit' => 0,
                        'credit' => $order['paid_amt'],
                        'balance' => $order['paid_amt'] * (-1),
                        'user_id' => $user->id
                    ]);
                }
            }

            if ($order['payable_amt'] > 0) {

                Payable::create([
                    'type' => 'purchase order',
                    'doc_id' => $purchaseorder->id,
                    'supplier_id' => $order['supplier_id'],
                    'debit' => 0,
                    'credit' => $order['payable_amt'],
                    'balance' => $order['payable_amt'],
                    'status' => 1,
                    'user_id' => $user->id
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
    public function show(Request $request, $id)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'created_at';
        $orderBy = $request->order_by ? $request->order_by : 'desc';
        $supplier_id = $request->supplier_id;
        $purchaseorders = PurchaseOrder::where([
            ['id', $id],

        ]);
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
        $purchaseorder->sub_total = $request->sub_total;
        $purchaseorder->amount_paid = $request->amount_paid;
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


    public function pendingsPurchasesCount()
    {
        $purchase_order= PurchaseOrder::where('status', '=', 'Pendding')->count();
        return response()->json(['purchase_order'=>$purchase_order]);
    }

    public function pendingsPurchaseOrders()
    {
        $purchase_order= PurchaseOrder::where('status', '=', 'Pendding')->get();

        for ($i=0; $i < count($purchase_order); $i++) { 
            $purchase_order[$i] = new PurchaseOrderResource($purchase_order[$i]);
        }

        return response()->json(['purchase_order'=>$purchase_order]);
    }


    public function purchase_invoice_detail($id)
    {
        $order = PurchaseOrder::findOrFail($id);

        for ($i=0; $i < count($order->purchaseorderdetails); $i++) {
            $order->purchaseorderdetails[$i] = new PurchaseInvoiceDetailResource($order->purchaseorderdetails[$i]);
        }

        return response()->json([
            'order' => new PurchaseInvoiceResource($order),
            'purchaseorderdetails' => $order->purchaseorderdetails,
        ], 200);
    }


}
