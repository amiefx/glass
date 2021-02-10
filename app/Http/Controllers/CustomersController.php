<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ReceivablesController;
use App\Http\Resources\CustomerCollection;
use App\Http\Resources\CustomerResource;
use App\Http\Resources\ReceivableResource;
use Illuminate\Http\Request;
use App\Models\Customer;
use App\Models\Receivable;

class CustomersController extends Controller
{

    protected $receivablesController;
    public function __construct(ReceivablesController $receivablesController)
    {
        $this->receivablesController = $receivablesController;
    }

    public function allCustomers()
    {
        return CustomerResource::collection(
            Customer::where('is_active', '=', 1)->get()
         );
    }

    public function allActiveCustomers()
    {
        return CustomerResource::collection(
            Customer::where('is_active', '=', 1)->get()
         );
    }

    public function customerRecievable($id)
    {
        return response()->json([
            'recievable'=> Receivable::where('customer_id', '=', $id)->orderBy('id','desc')->latest()->first()
        ], 200);
        // return response()->json([
        //     'recievable'=> new RecievableResource(DB::table('recievables')->where('customer_id', '=', $id)->orderBy('id','desc')->first())
        // ], 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'name';
        $orderBy = $request->order_by ? $request->order_by : 'asc';
        return response()->json([
            'customers' => new CustomerCollection(Customer::orderBy($sortBy, $orderBy)->paginate($per_page)) ,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $customer = new Customer([
            'name' => $request->name,
            'company_name' => $request->company_name,
            'type' => $request->type,
            'work_number' => $request->work_number,
            'whatsapp_number' => $request->whatsapp_number,
            'email' => $request->email,
            'address' => $request->address,
            'credit_limit' => $request->credit_limit,
            'is_active' => $request->is_active
        ]);
        $customer->save();

        $this->receivablesController->openningReceivable("openning Balance", $customer->id, $request->opening_balance);
        return response()->json(['customer'=> new CustomerResource($customer)], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {

        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'name';
        $orderBy = $request->order_by ? $request->order_by : 'asc';
        $customers = Customer::where('name', 'LIKE', "%$id%");
        return response()->json([
            'customers' => new CustomerCollection($customers->orderBy($sortBy, $orderBy)->paginate($per_page)) ,
        ], 200);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $customer = Customer::find($id);
        $customer->name = $request->name;
        $customer->company_name = $request->company_name;
        $customer->type = $request->type;
        $customer->work_number = $request->work_number;
        $customer->whatsapp_number = $request->whatsapp_number;
        $customer->email = $request->email;
        $customer->address = $request->address;
        $customer->credit_limit = $request->credit_limit;
        $customer->is_active = $request->is_active;
        $customer->save();
        return response()->json(['customer' => new CustomerResource($customer)], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $customer = Customer::find($id)->delete();
        return response()->json(['customer' => $customer], 200);
    }

    public function deleteAll(Request $request)
    {
        Customer::whereIn('id', $request->customers)->delete();
        return response()->json(['message', 'Records Deleted Successfully'], 200);
    }

    public function changeStatus(Request $request)
    {
        $status = $request->status;
        $customer = Customer::find($request->customer);
        $customer->is_active = $status;
        $customer->save();
        return response()->json(['customer' => new CustomerResource($customer)], 200);
    }
}
