<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use App\Http\Controllers\Controller;
use App\Http\Controllers\PayablesController;
use App\Http\Resources\SupplierCollection;
use App\Http\Resources\SupplierResource;
use App\Http\Resources\PayableResource;
use Illuminate\Http\Request;
use App\Models\Supplier;
use App\Models\Payable;

class SuppliersController extends Controller
{

    protected $payablesController;
    public function __construct(PayablesController $payablesController)
    {
        $this->payablesController = $payablesController;
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
        $orderBy = $request->order_by ? $request->order_by : 'desc';
        return response()->json([
            'suppliers' => new SupplierCollection(Supplier::orderBy($sortBy, $orderBy)->paginate($per_page)) ,
        ], 200);
    }

    public function allSuppliers()
    {
        return SupplierResource::collection(
            Supplier::get()
         );
    }

    public function supplierPayable($id)
    {
        return response()->json([
            'payable'=> Payable::where('supplier_id', '=', $id)->orderBy('id','desc')->latest()->first()
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
        $supplier = new Supplier([
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
        $supplier->save();

        $this->payablesController->openningPayable("openning Balance", $supplier->id, $request->opening_balance);
        return response()->json(['supplier'=> new SupplierResource($supplier)], 200);
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
        $suppliers = Supplier::where('name', 'LIKE', "%$id%");
        return response()->json([
            'suppliers' => new SupplierCollection($suppliers->orderBy($sortBy, $orderBy)->paginate($per_page)) ,
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
        $supplier = Supplier::find($id);
        $supplier->name = $request->name;
        $supplier->company_name = $request->company_name;
        $supplier->type = $request->type;
        $supplier->work_number = $request->work_number;
        $supplier->whatsapp_number = $request->whatsapp_number;
        $supplier->email = $request->email;
        $supplier->address = $request->address;
        $supplier->credit_limit = $request->credit_limit;
        $supplier->is_active = $request->is_active;
        $supplier->save();
        return response()->json(['supplier' => new SupplierResource($supplier)], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $supplier = Supplier::find($id)->delete();
        return response()->json(['supplier' => $supplier], 200);
    }

    public function deleteAll(Request $request)
    {
        Supplier::whereIn('id', $request->suppliers)->delete();
        return response()->json(['message', 'Records Deleted Successfully'], 200);
    }

    public function changeStatus(Request $request)
    {
        $status = $request->status;
        $supplier = Supplier::find($request->supplier);
        $supplier->is_active = $status;
        $supplier->save();
        return response()->json(['supplier' => new SupplierResource($supplier)], 200);
    }
}
