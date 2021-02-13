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
        $sortBy = $request->sort_by ? $request->sort_by : 'order_id';
        $orderBy = $request->order_by ? $request->order_by : 'desc';
        $employee_id = $request->employee_id;
        $salaires = Salary::where('employee_id', '=', $employee_id );
        return response()->json([
            'salaries' => new SalaryCollection($salaires->orderBy($sortBy, $orderBy)->paginate($per_page)) ,
        ], 200);
    }


    public function store(Request $request)
    {
        $user = auth()->user();

        $salary = new Salary([
            'order_id' => $request->order_id,
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
        $sortBy = $request->sort_by ? $request->sort_by : 'order_id';
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

        $salary->order_id = $request->order_id;
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


    public function paySalary(Request $request)
    {
        $user = auth()->user();
        $postData = $request->all();


        try {
            DB::beginTransaction();

            $order = $postData['orderDetails'];

            if ($order['amount'] > 0) {

                $slry = Salary::create([
                    'order_id' => 0,
                    'employee_id' => $order['employee_id'],
                    'amount_paid' => $order['amount'],
                    'note' => $order['note'],
                    'status' => 1,
                    'user_id' => $user->id
                ]);


                if ($order['type'] == 'Cash') {

                    Cash::create([
                        'doc_type' => 'salary',
                        'doc_id' => $slry->id,
                        'employee_id' => $order['employee_id'],
                        'debit' => 0,
                        'credit' => $order['amount'],
                        'balance' => $order['amount'] * (-1),
                        'status' => 1,
                        'user_id' => $user->id
                    ]);
                }
                if ($order['type'] == 'Bank') {
    
                    Bank::create([
                        'doc_type' => 'salary',
                        'doc_id' => $slry->id,
                        'employee_id' => $order['employee_id'],
                        'debit' => 0,
                        'credit' => $order['amount'],
                        'balance' => $order['amount'] * (-1),
                        'status' => 1,
                        'user_id' => $user->id
                    ]);
                }

            }


            DB::commit();
        } catch (\Throwable $th) {
            DB::rollback();

            return response()->json(['error'=> $th->getMessage()], 500);
        }

    return response()->json(['order'=> $neworder, 'order_items' => $items, 'priceflag'  => $priceflag], 200);
    }


}
