<?php

namespace App\Http\Controllers;

use App\Models\Payable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class PayablesController extends Controller
{
    // all payables over all
    public function payables()
    {
        $payables = Payable::all();
        return response()->json(['payables'=>$payables]);
    }

    // payables by supplier id
    public function payableBySupplierId(Request $request)
    {
        $payables = DB::table("payables")->where("supplier_id", $request->supplier_id)
        ->orderBy("created_at", "desc")->get();
        return response()->json(['payables'=>$payables]);
    }

    // payables by date
    public function payableByDate(Request $request)
    {
        $payables = DB::table("payables")->where("created_at", $request->created_at)->get();
        return response()->json(['payables'=>$payables]);
    }

    // create new payable
    public function createPayable(Request $request)
    {

        $validator = Validator::make($request->all(),[
            'type' => 'required|string|between:2,100',
            'supplier_id' => 'required|integer',
        ]);
        if ($validator->fails()) {
            return response()->json([$validator->errors()], 422);
        }


        $payablee = Payable::create(array_merge($validator->validated(), [
            "description"=>$request->description,
            "debit"=>($request->debit) ? $request->debit : 0,
            "credit"=>($request->credit) ? $request->credit : 0,
            "balance"=>($request->balance) ? $request->balance : 0,
            "status"=>($request->status) ? $request->status : 1,
        ]));
        return response()->json(['message' => 'payable created successfully', 'payable'=>$payablee]);
    }

    // update payable
    public function updatePayable(Request $request)
    {

        $payable = Payable::findOrFail($request->id);

        $validator = Validator::make($request->all(),[
            'type' => 'required|string|between:2,100',
            'supplier_id' => 'required|integer'
        ]);
        if ($validator->fails()) {
            return response()->json([$validator->errors()], 422);
        }

        $payable->type = $request->type;
        $payable->supplier_id = $request->supplier_id;
        $payable->description = $request->description;
        $payable->debit = ($request->debit) ? $request->debit : 0;
        $payable->credit = ($request->credit) ? $request->credit : 0;
        $payable->balance = ($request->balance) ? $request->balance : 0;
        $payable->status = ($request->status) ? $request->status : 1;

        if($payable->save())
        {
            return response()->json(['message' => 'payable updated successfully', 'payable'=>$payable]);
        }else{
            return response()->json(['error'=>"something went wrong!"]);
        }
    }

    // debit payable
    public function debitPayable(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'type' => 'required|string|between:2,100',
            'supplier_id' => 'required|integer'
        ]);
        if ($validator->fails()) {
            return response()->json([$validator->errors()], 422);
        }

        if(Payable::where("supplier_id", $request->supplier_id)->first() != null){
            $pay = DB::table("payables")->where("supplier_id", $request->supplier_id)->latest()->first();

            $newpay = new payable;

            $newpay->type = $request->type;
            $newpay->supplier_id = $request->supplier_id;
            $newpay->description = $request->description;
            $newpay->debit = $request->debit;
            $newpay->balance = $pay->balance - $request->debit;
            $newpay->status = $request->status;

            if($newpay->save())
            {
                return response()->json(['message' => 'payable debited successfully', 'payable'=>$newpay]);
            }else{
                return response()->json(['error'=>"something went wrong!"]);
            }

        }else{
            return $this->createPayable($request);
        }
    }

    // credit payable
    public function creditPayable(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'type' => 'required|string|between:2,100',
            'supplier_id' => 'required|integer'
        ]);
        if ($validator->fails()) {
            return response()->json([$validator->errors()], 422);
        }

        if(Payable::where("supplier_id", $request->supplier_id)->first() != null){
           $pay = DB::table("payables")->where("supplier_id", $request->supplier_id)->latest()->first();

            $newpay = new payable;

            $newpay->type = $request->type;
            $newpay->supplier_id = $request->supplier_id;
            $newpay->description = $request->description;
            $newpay->credit = $request->credit;
            $newpay->balance = $pay->balance + $request->credit;
            $newpay->status = $request->status;

            if($newpay->save())
            {
                return response()->json(['message' => 'payable credited successfully', 'payable'=>$newpay]);
            }else{
                return response()->json(['error'=>"something went wrong!"]);
            }

        }else{
            return $this->createPayable($request);
        }
    }

    // delete payable
    public function deletePayable(Request $request)
    {
        $payable = Payable::findOrFail($request->id);

        if($payable->delete())
        {
            return response()->json(['message' => 'payable deleted successfully']);
        }else{
            return response()->json(['error'=>"something went wrong!"]);
        }
    }


    // opening payable
    public function openningPayable($type, $id, $balance)
    {
        $user = auth()->user();
        $newpay = new Payable;

        $newpay->type = $type;
        $newpay->supplier_id = $id;
        $newpay->credit = $balance;
        $newpay->balance = $balance;
        $newpay->doc_id = $id;
        $newpay->status = 1;
        $newpay->user_id = $user->id;


        if($newpay->save())
        {
            return true;
        }else{
            return false;
        }
    }
}
