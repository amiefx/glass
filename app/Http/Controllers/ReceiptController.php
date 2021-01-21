<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReceiptCollection;
use App\Models\Bank;
use App\Models\Cash;
use App\Models\Receipt;
use App\Models\Receivable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReceiptController extends Controller
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
        $customer_id = $request->customer_id;
        $receipts = Receipt::where('customer_id', '=', $customer_id );
        return response()->json([
            'receipts' => new ReceiptCollection($receipts->orderBy($sortBy, $orderBy)->paginate($per_page)) ,
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'created_at';
        $orderBy = $request->order_by ? $request->order_by : 'desc';
        $customer_id = $request->customer_id;
        $receipts = Receipt::where([
            ['id', $id],

        ]);
        return response()->json([
            'receipts' => new ReceiptCollection($receipts->orderBy($sortBy, $orderBy)->paginate($per_page)),
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
        $postData = $request->all();
        // dd($postData);
        try {
            DB::beginTransaction();

            $order = $postData;

            $receipts = new Receipt([
                "customer_id" => $order['customer_id'],
                "amount" => $order['amount'],
                "pmt_method" => $order['pmt_method'],
                "payer_account" => $order['payer_account'],
                "details" => $order['details'],
                "notes" => $order['notes'],
                "user_id" => $user->id,
            ]);
            $receipts->save();

            if ( $order['amount'] > 0 ) {
                if ($order['pmt_method'] == 'Cash') {
                    // store in cash register
                    Cash::create([
                        'doc_type' => 'receipt',
                        'doc_id' => $receipts->id,
                        'customer_id' => $order['customer_id'],
                        'debit' => $order['amount'],
                        'credit' => 0,
                        'balance' => $order['amount'],
                        'status' => 1,
                        'user_id' => $user->id
                    ]);
                } else {
                    // store in back account
                    Bank::create([
                        'doc_type' => 'receipt',
                        'doc_id' => $receipts->id,
                        'customer_id' => $order['customer_id'],
                        'debit' => $order['amount'],
                        'credit' => 0,
                        'balance' => $order['amount'],
                        'status' => 1,
                        'user_id' => $user->id
                    ]);
                }
            }

            if ($order['amount'] > 0) {

                Receivable::create([
                    'type' => 'receipt',
                    'doc_id' => $receipts->id,
                    'customer_id' => $order['customer_id'],
                    'debit' => 0,
                    'credit' => $order['amount'],
                    'balance' => $order['amount'] * (-1),
                    'status' => 1,
                    'user_id' => $user->id
                ]);

            }



            DB::commit();
        } catch (\Throwable $th) {
            DB::rollback();

            return response()->json(['error'=> $th->getMessage()], 500);
        }

    return response()->json(['receipts'=> $receipts], 200);

    }
}
