<?php

namespace App\Http\Controllers;

use App\Http\Resources\PanelCollection;
use App\Http\Resources\PanelResource;
use App\Models\Panels;
use Illuminate\Http\Request;

class PanelController extends Controller
{
    public function allPanels()
    {
        return PanelResource::collection(
            Panels::get()
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
        $sortBy = $request->sort_by ? $request->sort_by : 'id';
        $orderBy = $request->order_by ? $request->order_by : 'desc';
        return response()->json([
            'panels' => new PanelCollection(Panels::orderBy($sortBy, $orderBy)->paginate($per_page)) ,
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
        $panel = new Panels([
            'size' => $request->size,
            'standard_size' => $request->standard_size,
        ]);

        $panel->save();
        return response()->json(['panel'=> new PanelResource($panel)], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Slab  $panel
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'id';
        $orderBy = $request->order_by ? $request->order_by : 'asc';
        $panels = Panels::where('actual', 'LIKE', "%$id%");
        return response()->json([
            'panels' => new PanelCollection($panels->orderBy($sortBy, $orderBy)->paginate($per_page)) ,
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Panels  $panel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $panel = Panels::find($id);

        $panel->size = $request->size;
        $panel->standard_size = $request->standard_size;

        $panel->save();
        return response()->json(['panel' => new PanelResource($panel)], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Panels  $panel
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $panel = Panels::find($id)->delete();
        return response()->json(['panel' => $panel], 200);
    }
}
