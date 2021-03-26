<?php

namespace App\Http\Controllers;

use App\Models\Business;
use Illuminate\Http\Request;
use App\Http\Resources\BusinessCollection;
use App\Http\Resources\BusinessResource;

class BusinessController extends Controller
{
    public function allBusiness()
    {
         return response()->json(['business'=> new BusinessResource( Business::first() )], 200);
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
            'business' => new BusinessCollection(Business::orderBy($sortBy, $orderBy)->paginate($per_page)) ,
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
        $imageurl = null;

        if($request->logo)
        {
            $imageName = time().'.'.$request->logo->extension();
            $request->logo->move(public_path('images/siteimages'), $imageName);

            $imageurl = '/images/payments/'.$imageName;
        }

        $business = new Business([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'whatsapp' => $request->whatsapp,
            'country' => $request->country,
            'city' => $request->city,
            'zipcode' => $request->zipcode,
            'address' => $request->address,
            'logo' => $imageurl
        ]);
        $business->save();
        return response()->json(['business'=> new BusinessResource($business)], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\business  $business
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'name';
        $orderBy = $request->order_by ? $request->order_by : 'asc';
        $business = Business::where('name', 'LIKE', "%$id%");
        return response()->json([
            'business' => new BusinessCollection($business->orderBy($sortBy, $orderBy)->paginate($per_page)) ,
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\business  $business
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $imageurl = null;

        if($request->logo)
        {
            $imageName = time().'.'.$request->logo->extension();
            $request->logo->move(public_path('images/siteimages'), $imageName);

            $imageurl = '/images/payments/'.$imageName;
        }

        $business = Business::find($id);
        $business->name = $request->name;
        $business->email = $request->email;
        $business->phone = $request->phone;
        $business->whatsapp = $request->whatsapp;
        $business->country = $request->country;
        $business->city = $request->city;
        $business->zipcode = $request->zipcode;
        $business->address = $request->address;
        $business->logo = $imageurl;
        $business->save();
        return response()->json(['business' => new BusinessResource($business)], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\business  $business
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $business = Business::find($id)->delete();
        return response()->json(['business' => $business], 200);
    }

    public function deleteAll(Request $request)
    {
        Business::whereIn('id', $request->business)->delete();
        return response()->json(['message', 'Records Deleted Successfully'], 200);
    }
}
