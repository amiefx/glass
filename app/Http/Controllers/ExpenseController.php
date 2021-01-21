<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\ExpenseCollection;
use App\Http\Resources\ExpenseResource;
use App\Models\Bank;
use App\Models\Cash;
use App\Models\Expense;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ExpenseController extends Controller
{
    public function index(Request $request)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'created_at';
        $orderBy = $request->order_by ? $request->order_by : 'desc';
        return response()->json([
            'expenses' => new ExpenseCollection(Expense::orderBy($sortBy, $orderBy)->paginate($per_page)),
        ], 200);
    }


    public function store(Request $request)
    {
        $user = auth()->user();

        try {
            DB::beginTransaction();

            $expense = new Expense([
                'expense_item_id' => $request->expense_item_id,
                'date' => $request->date,
                'pmt_method' => $request->pmt_method,
                'total' => $request->total,
                'status' => $request->status,
                'note' => $request->note,
                'user_id' => $user->id,
            ]);
            $expense->save();

            if ( $request->pmt_method == "Bank") {

                $bank = new Bank([
                    'doc_type' => $request->doc_type,
                    'doc_id' => 0,
                    'details' => $request->details,
                    'notes' => $request->notes,
                    'credit' => $request->total,
                    'debit' => 0,
                    'balance' => $request->total * (-1),
                    'user_id' => $user->id,
                    'status' => 1
                ]);
                $bank->save();

            } else {
                $cash = new Cash([
                    'doc_type' => $request->doc_type,
                    'doc_id' => 0,
                    'credit' => $request->total,
                    'debit' => 0,
                    'balance' => $request->total  * (-1),
                    'user_id' => $user->id,
                    'status' => 1
                ]);
                $cash->save();
            }

            DB::commit();
        } catch (\Throwable $th) {
            DB::rollback();

            return response()->json(['error' => $th->getMessage()], 500);
        }

        return response()->json(['expense' => $expense], 200);
    }

    public function show(Request $request, $id)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'created_at';
        $orderBy = $request->order_by ? $request->order_by : 'asc';
        $expense = Expense::where('id', '=', "$id");
        return response()->json([
            'expense' => new ExpenseCollection($expense->orderBy($sortBy, $orderBy)->paginate($per_page)),
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $user = auth()->user();

        $expense = Expense::find($id);

        $expense->expense_item_id = $request->expense_item_id;
        $expense->date = $request->date;
        $expense->pmt_method = $request->pmt_method;
        $expense->total = $request->total;
        $expense->status = $request->status;
        $expense->note = $request->note;
        $expense->user_id = $user->id;

        $expense->save();
        return response()->json(['expense' => new ExpenseResource($expense)], 200);
    }

    public function destroy($id)
    {
        $expense = Expense::find($id)->delete();
        return response()->json(['expense' => $expense], 200);
    }
}
