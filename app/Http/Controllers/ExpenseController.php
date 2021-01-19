<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\ExpenseCollection;
use App\Http\Resources\ExpenseResource;
use App\Models\Expense;
use Illuminate\Http\Request;

class ExpenseController extends Controller
{
    public function index(Request $request)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'created_at';
        $orderBy = $request->order_by ? $request->order_by : 'desc';
        return response()->json([
            'expenses' => new ExpenseCollection(Expense::orderBy($sortBy, $orderBy)->paginate($per_page)) ,
        ], 200);
    }


    public function store(Request $request)
    {
        $user = auth()->user();
        
        $expense = new Expense([ 
            'total' => $request->total,
            'status' => $request->status,
            'note' => $request->note,
            'user_id' => $user->id,
        ]);
        $expense->save();

        return response()->json(['expense'=> $expense], 200);
    }

    public function show(Request $request, $id)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'created_At';
        $orderBy = $request->order_by ? $request->order_by : 'asc';
        $expense = Expense::where('id', '=', "$id");
        return response()->json([
            'expense' => new ExpenseCollection($expense->orderBy($sortBy, $orderBy)->paginate($per_page)),
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $user = auth()->user();

        $employee = Expense::find($id);

        $employee->total = $request->total;
        $employee->status = $request->status;
        $employee->note = $request->note;
        $employee->user_id = $user->id;
        
        $employee->save();
        return response()->json(['employee' => new EmployeeResource($employee)], 200);
    }

    public function destroy($id)
    {
        $expense = Expense::find($id)->delete();
        return response()->json(['expense' => $expense], 200);
    }


}
