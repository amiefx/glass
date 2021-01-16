<?php

namespace App\Http\Controllers;

use App\Models\Bank;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use App\Http\Resources\BankCollection;
use App\Http\Resources\BankResource;

class BankController extends Controller
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
            'banks' => new BankCollection(Bank::orderBy($sortBy, $orderBy)->paginate($per_page)) ,
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

        $bank = new Bank([
            'doc_type' => $request->doc_type,
            'doc_id' => $request->doc_id,
            'customer_id' => $request->customer_id,
            'supplier_id' => $request->supplier_id,
            'employee_id' => $request->employee_id,
            'credit' => $request->credit,
            'debit' => $request->debit,
            'balance' => $request->balance,
            'user_id' => $user->id
        ]);
        $bank->save();
        return response()->json(['bank'=> new BankResource($bank)], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Bank  $bank
     * @return \Illuminate\Http\Response
     */
    public function show(Bank $bank)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Bank  $bank
     * @return \Illuminate\Http\Response
     */
    public function edit(Bank $bank)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Bank  $bank
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bank $bank)
    {
        $user = auth()->user();

        $bank = Bank::find($id);

        $bank->doc_type = $request->doc_type;
        $bank->doc_id = $request->doc_id;
        $bank->supplier_id = $request->supplier_id;
        $bank->customer_id = $request->customer_id;
        $bank->employee_id = $request->employee_id;
        $bank->credit = $request->credit;
        $bank->debit = $request->debit;
        $bank->balance = $request->balance;
        $bank->user_id = $user->id;
        $bank->save();
        return response()->json(['bank' => new BankResource($bank)], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Bank  $bank
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $bank = Bank::find($id)->delete();
        return response()->json(['bank' => $bank], 200);
    }
}
