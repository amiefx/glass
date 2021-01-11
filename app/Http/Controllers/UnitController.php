<?php

namespace App\Http\Controllers;

use App\Models\Unit;
use Illuminate\Http\Request;
use App\Http\Resources\UnitCollection;
use App\Http\Resources\UnitResource;

class UnitController extends Controller
{
    public function allUnits()
    {
        return UnitResource::collection(
            Unit::get()
         );
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'actual_name';
        $orderBy = $request->order_by ? $request->order_by : 'desc';
        return response()->json([
            'units' => new UnitCollection(Unit::orderBy($sortBy, $orderBy)->paginate($per_page)) ,
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
        $unit = new Unit([
            'actual_name' => $request->actual_name,
            'short_name' => $request->short_name
        ]);
        $unit->save();
        return response()->json(['unit'=> new UnitResource($unit)], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\unit  $unit
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'actual_name';
        $orderBy = $request->order_by ? $request->order_by : 'asc';
        $units = Unit::where('actual_name', 'LIKE', "%$id%");
        return response()->json([
            'units' => new UnitCollection($units->orderBy($sortBy, $orderBy)->paginate($per_page)) ,
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\unit  $unit
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $unit = Unit::find($id);
        $unit->actual_name = $request->actual_name;
        $unit->short_name = $request->short_name;
        $unit->save();
        return response()->json(['unit' => new UnitResource($unit)], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\unit  $unit
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $unit = Unit::find($id)->delete();
        return response()->json(['unit' => $unit], 200);
    }

    public function deleteAll(Request $request)
    {
        Unit::whereIn('id', $request->units)->delete();
        return response()->json(['message', 'Records Deleted Successfully'], 200);
    }
}
