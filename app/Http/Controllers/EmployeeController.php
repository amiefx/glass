<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller; 
use App\Http\Resources\EmployeeCollection;
use App\Http\Resources\EmployeeResource; 
use Illuminate\Http\Request;
use App\Models\Employee; 


class EmployeeController extends Controller
{
    public function allEmployees()
    {
        return EmployeeResource::collection(
            Employee::where('is_active', '=', 1)->get()
         );
    }

    public function allActiveEmployees()
    {
        return EmployeeResource::collection(
            Employee::where('is_active', '=', 1)->get()
         );
    }

    
    public function index(Request $request)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'name';
        $orderBy = $request->order_by ? $request->order_by : 'asc';
        return response()->json([
            'employees' => new EmployeeCollection(Employee::orderBy($sortBy, $orderBy)->paginate($per_page)) ,
        ], 200);
    }

    public function store(Request $request)
    {
        $employee = new Employee([
            'name' => $request->name,
            'type' => $request->type,
            'work_number' => $request->work_number,
            'whatsapp_number' => $request->whatsapp_number,
            'email' => $request->email,
            'address' => $request->address,
            'salary' => $request->salary,
            'is_active' => $request->is_active
        ]);
        $employee->save();

        return response()->json(['employee'=> new EmployeeResource($employee)], 200);
    }


    public function show(Request $request, $id)
    {

        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'name';
        $orderBy = $request->order_by ? $request->order_by : 'asc';
        $employees = Employeer::where('name', 'LIKE', "%$id%");
        return response()->json([
            'employees' => new EmployeeCollection($employees->orderBy($sortBy, $orderBy)->paginate($per_page)) ,
        ], 200);

    }


    public function update(Request $request, $id)
    {
        $employee = Employee::find($id);
        $employee->name = $request->name;
        $employee->type = $request->type;
        $employee->work_number = $request->work_number;
        $employee->whatsapp_number = $request->whatsapp_number;
        $employee->email = $request->email;
        $employee->address = $request->address;
        $employee->salary = $request->salary;
        $employee->is_active = $request->is_active;
        $employee->save();
        return response()->json(['employee' => new EmployeeResource($employee)], 200);
    }


    public function destroy($id)
    {
        $employee = Employee::find($id)->delete();
        return response()->json(['employee' => $employee], 200);
    }

    public function changeStatus($id)
    {
        $status = $request->status;
        $employee = Employee::find($id);
        $employee->is_active = $status;
        $employee->save();
        return response()->json(['employee' => new EmployeeResource($employee)], 200);
    }



}
