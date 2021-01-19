<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\SalaryCollection;
use App\Http\Resources\SalaryResource;
use App\Models\Salary;
use Illuminate\Http\Request;

class SalaryController extends Controller
{
    public function index(Request $request)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'created_at';
        $orderBy = $request->order_by ? $request->order_by : 'desc';
        return response()->json([
            'salaries' => new SalaryCollection(Salary::orderBy($sortBy, $orderBy)->paginate($per_page)) ,
        ], 200);
    }


    public function store(Request $request)
    {
        $user = auth()->user();
        
        $salary = new Salary([ 
            'employee_id' => $request->employee_id,
            'amount_paid' => $request->amount_paid,
            'note' => $request->note,
            'status' => $request->status,
            'user_id' => $user->id,
        ]);
        $salary->save();

        return response()->json(['salary'=> $salary], 200);
    }

    public function show(Request $request, $id)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'created_At';
        $orderBy = $request->order_by ? $request->order_by : 'asc';
        $salary = Salary::where('id', '=', "$id");
        return response()->json([
            'salary' => new SalaryCollection($salary->orderBy($sortBy, $orderBy)->paginate($per_page)),
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $user = auth()->user();

        $salary = Salary::find($id);

        $salary->employee_id = $request->employee_id;
        $salary->amount_paid = $request->amount_paid;
        $salary->status = $request->status;
        $salary->note = $request->note;
        $salary->user_id = $user->id;
        
        $salary->save();
        return response()->json(['salary' => new SalaryResource($salary)], 200);
    }

    public function destroy($id)
    {
        $salary = Salary::find($id)->delete();
        return response()->json(['salary' => $salary], 200);
    }


}
