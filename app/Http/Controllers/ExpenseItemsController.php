<?php

namespace App\Http\Controllers;

use App\Http\Resources\ExpenseItemCollection;
use App\Http\Resources\ExpenseItemItemCollection;
use App\Http\Resources\ExpenseItemResource;
use App\Models\ExpenseItem;
use App\Models\ExpenseItemItem;
use Illuminate\Http\Request;

class ExpenseItemsController extends Controller
{
    public function allitems()
    {
        return ExpenseItemResource::collection(
            ExpenseItem::where('is_active', '=', 1)->get()
         );
    }

    public function index(Request $request)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'name';
        $orderBy = $request->order_by ? $request->order_by : 'desc';
        return response()->json([
            'expenseitems' => new ExpenseItemCollection(ExpenseItem::orderBy($sortBy, $orderBy)->paginate($per_page)) ,
        ], 200);
    }


    public function store(Request $request)
    {
        $user = auth()->user();

        $expenseitem = new ExpenseItem([
            'name' => $request->name,
            'description' => $request->description,
            'is_active' => $request->is_active,
        ]);
        $expenseitem->save();

        return response()->json(['expenseitem'=> $expenseitem], 200);
    }

    public function show(Request $request, $id)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'name';
        $orderBy = $request->order_by ? $request->order_by : 'asc';
        $expenseitem = ExpenseItem::where('name', 'LIKE', "%$id%");
        return response()->json([
            'expenseitems' => new ExpenseItemCollection($expenseitem->orderBy($sortBy, $orderBy)->paginate($per_page)),
        ], 200);
    }

    public function update(Request $request, $id)
    {

        $expenseitem = ExpenseItem::find($id);

        $expenseitem->name = $request->name;
        $expenseitem->description = $request->description;
        $expenseitem->is_active = $request->is_active;

        $expenseitem->save();
        return response()->json(['expenseitem' => new ExpenseItemResource($expenseitem)], 200);
    }

    public function destroy($id)
    {
        $expenseitem = ExpenseItem::find($id)->delete();
        return response()->json(['expenseitem' => $expenseitem], 200);
    }
}
