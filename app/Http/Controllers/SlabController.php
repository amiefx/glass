<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\SlabCollection;
use App\Http\Resources\SlabResource;

use App\Models\Slab;
use Illuminate\Http\Request;

class SlabController extends Controller
{
    public function allSlabs()
    {
        return SlabResource::collection(
            Slab::get()
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
        $sortBy = $request->sort_by ? $request->sort_by : 'min';
        $orderBy = $request->order_by ? $request->order_by : 'desc';
        return response()->json([
            'slabs' => new SlabCollection(Slab::orderBy($sortBy, $orderBy)->paginate($per_page)) ,
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
        $slab = new Slab([
            'min' => $request->min,
            'max' => $request->max,
            'actual' => $request->actual,
        ]);

        $slab->save();
        return response()->json(['slab'=> new SlabResource($slab)], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Slab  $slab
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'min';
        $orderBy = $request->order_by ? $request->order_by : 'asc';
        $slabs = Slab::where('actual', 'LIKE', "%$id%");
        return response()->json([
            'slabs' => new SlabCollection($slabs->orderBy($sortBy, $orderBy)->paginate($per_page)) ,
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Slab  $slab
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $slab = Slab::find($id);

        $slab->min = $request->min;
        $slab->max = $request->max;
        $slab->actual = $request->actual;

        $slab->save();
        return response()->json(['slab' => new SlabResource($slab)], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Slab  $slab
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $slab = slab::find($id)->delete();
        return response()->json(['slab' => $slab], 200);
    }
}
