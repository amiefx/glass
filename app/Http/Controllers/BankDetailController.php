<?php

namespace App\Http\Controllers;

use App\Models\BankDetail;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use App\Http\Resources\BankDetailCollection;
use App\Http\Resources\BankDetailResource;

class BankDetailController extends Controller
{
    public function allBanks()
    {
        return BankDetailResource::collection(
            BankDetail::get()
         );
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
            'bank_detail' => new BankDetailCollection(BankDetail::orderBy($sortBy, $orderBy)->paginate($per_page)) ,
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

        $bank_detail = new BankDetail([
            'bank_name' => $request->bank_name,
            'bank_short_name' => $request->bank_short_name,
            'Branch' => $request->Branch,
            'Branch_code' => $request->Branch_code,
            'bank_address' => $request->bank_address,
            'account_number' => $request->account_number,
            'account_title' => $request->account_title,
            'account_type' => $request->account_type,
            'kin' => $request->kin,
            'cnic' => $request->cnic,
            'status' => $request->status
        ]);
        $bank_detail->save();
        return response()->json(['bank_detail'=> new BankDetailResource($bank_detail)], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BankDetail  $bankDetail
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'id';
        $orderBy = $request->order_by ? $request->order_by : 'asc';
        $bank_detail = BankDetail::where('id', 'LIKE', "%$id%");
        return response()->json([
            'bank_detail' => new BankDetailCollection($bank_detail->orderBy($sortBy, $orderBy)->paginate($per_page)) ,
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BankDetail  $bankDetail
     * @return \Illuminate\Http\Response
     */
    public function edit(BankDetail $bankDetail)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\BankDetail  $bankDetail
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = auth()->user();

        $bank_detail = BankDetail::find($id);

     $bank_detail->bank_name = $request->bank_name;
     $bank_detail->bank_short_name = $request->bank_short_name;
     $bank_detail->Branch = $request->Branch;
     $bank_detail->Branch_code = $request->Branch_code;
     $bank_detail->bank_address = $request->bank_address;
     $bank_detail->account_number = $request->account_number;
     $bank_detail->account_title = $request->account_title;
     $bank_detail->account_type = $request->account_type;
     $bank_detail->kin = $request->kin;
     $bank_detail->cnic = $request->cnic;
     $bank_detail->status = $request->status;
    // $bank_detail->user_id = $user->id;

        $bank_detail->save();
        return response()->json(['bank' => new BankDetailResource($bank_detail)], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BankDetail  $bankDetail
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $bank_detail = BankDetail::find($id)->delete();
        return response()->json(['bank_detail' => $bank_detail], 200);
    }
}
