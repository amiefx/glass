<?php

namespace App\Http\Controllers;

use App\Models\Receivable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ReceivablesController extends Controller
{
    // all recieve ables over all
    public function receivables()
    {
        $receivables = Receivable::all();
        return response()->json(['receivables'=>$receivables]);
    }

    // receivables by customer id
    public function receivableByCustomerId(Request $request)
    {
        $receivables = DB::table("receivables")->where("customer_id", $request->customer_id)
        ->orderBy("created_at", "desc")->get();
        return response()->json(['receivables'=>$receivables]);
    }

    // receivables by date
    public function receivableByDate(Request $request)
    {
        $receivables = DB::table("receivables")->where("created_at", $request->created_at)->get();
        return response()->json(['receivables'=>$receivables]);
    }

    // create new receivable
    public function createReceivable(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'type' => 'required|string|between:2,100',
            'customer_id' => 'required|integer',
        ]);
        if ($validator->fails()) {
            return response()->json([$validator->errors()], 422);
        }


        $receivable = Receivable::create(array_merge($validator->validated(), [
            "description"=>$request->description,
            "debit"=>($request->debit) ? $request->debit : 0,
            "credit"=>($request->credit) ? $request->credit : 0,
            "balance"=>($request->balance) ? $request->balance : 0,
            "status"=>($request->status) ? $request->status : 1,
        ]));
        return response()->json(['message' => 'receivable created successfully', 'receivable'=>$receivable]);
    }

    // update receivable
    public function updateReceivable(Request $request)
    {

        $receivable = Receivable::findOrFail($request->id);

        $validator = Validator::make($request->all(),[
            'type' => 'required|string|between:2,100',
            'customer_id' => 'required|integer'
        ]);
        if ($validator->fails()) {
            return response()->json([$validator->errors()], 422);
        }

        $receivable->type = $request->type;
        $receivable->customer_id = $request->customer_id;
        $receivable->description = $request->description;
        $receivable->debit = ($request->debit) ? $request->debit : 0;
        $receivable->credit = ($request->credit) ? $request->credit : 0;
        $receivable->balance = ($request->balance) ? $request->balance : 0;
        $receivable->status = ($request->status) ? $request->status : 1;

        if($receivable->save())
        {
            return response()->json(['message' => 'receivable updated successfully', 'receivable'=>$receivable]);
        }else{
            return response()->json(['error'=>"something went wrong!"]);
        }
    }

    // debit receivable
    public function debitReceivable(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'type' => 'required|string|between:2,100',
            'customer_id' => 'required|integer'
        ]);
        if ($validator->fails()) {
            return response()->json([$validator->errors()], 422);
        }

        if(Receivable::where("customer_id", $request->customer_id)->first() != null){
           $rec = DB::table("receivables")->where("customer_id", $request->customer_id)->latest()->first();

            $newrec = new Receivable;

            $newrec->type = $request->type;
            $newrec->customer_id = $request->customer_id;
            $newrec->description = $request->description;
            $newrec->debit = $request->debit;
            $newrec->balance = $rec->balance + $request->debit;
            $newrec->status = $request->status;

            if($newrec->save())
            {
                return response()->json(['message' => 'receivable debited successfully', 'receivable'=>$newrec]);
            }else{
                return response()->json(['error'=>"something went wrong!"]);
            }

        }else{
            return $this->createReceivable($request);
        }
    }

    // credit receivable
    public function creditReceivable(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'type' => 'required|string|between:2,100',
            'customer_id' => 'required|integer'
        ]);
        if ($validator->fails()) {
            return response()->json([$validator->errors()], 422);
        }

        if(Receivable::where("customer_id", $request->customer_id)->first() != null){
           $rec = DB::table("receivables")->where("customer_id", $request->customer_id)->latest()->first();

            $newrec = new receivable;

            $newrec->type = $request->type;
            $newrec->customer_id = $request->customer_id;
            $newrec->description = $request->description;
            $newrec->credit = $request->credit;
            $newrec->balance = $rec->balance - $request->credit;
            $newrec->status = $request->status;

            if($newrec->save())
            {
                return response()->json(['message' => 'receivable credited successfully', 'receivable'=>$newrec]);
            }else{
                return response()->json(['error'=>"something went wrong!"]);
            }

        }else{
            return $this->createReceivable($request);
        }
    }

    // delete receivable
    public function deleteReceivable(Request $request)
    {
        $receivable = Receivable::findOrFail($request->id);

        if($receivable->delete())
        {
            return response()->json(['message' => 'receivable deleted successfully']);
        }else{
            return response()->json(['error'=>"something went wrong!"]);
        }
    }



    // openning receivable
    public function openningReceivable($type, $id, $balance)
    {
            $user = auth()->user();
            $newrec = new Receivable;

            $newrec->type = $type;
            $newrec->customer_id = $id;
            $newrec->debit = $balance;
            $newrec->balance = $balance;
            $newrec->status = 1;
            $newrec->user_id = $user->id;

            if($newrec->save())
            {
                return true;
            }else{
                return false;
            }
    }

}
