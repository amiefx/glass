<?php

namespace App\Http\Controllers;

use App\Models\Cash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\CashCollection;
use App\Http\Resources\CashResource;

class CashController extends Controller
{
    public function balance()
    {
        return response()->json([
            'balance' => Cash::get()->sum('balance')
        ], 200);
    }

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
            'cashes' => new CashCollection(Cash::orderBy($sortBy, $orderBy)->paginate($per_page)) ,
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

        $cash = new Cash([
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
        $cash->save();
        return response()->json(['cash'=> new CashResource($cash)], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cash  $cash
     * @return \Illuminate\Http\Response
     */
    public function show(Cash $cash)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cash  $cash
     * @return \Illuminate\Http\Response
     */
    public function edit(Cash $cash)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Cash  $cash
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = auth()->user();

        $cash = Cash::find($id);

        $cash->doc_type = $request->doc_type;
        $cash->doc_id = $request->doc_id;
        $cash->supplier_id = $request->supplier_id;
        $cash->customer_id = $request->customer_id;
        $cash->employee_id = $request->employee_id;
        $cash->credit = $request->credit;
        $cash->debit = $request->debit;
        $cash->balance = $request->balance;
        $cash->user_id = $user->id;
        $cash->save();
        return response()->json(['cash' => new CashResource($cash)], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cash  $cash
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cash = Cash::find($id)->delete();
        return response()->json(['cash' => $cash], 200);
    }
}
