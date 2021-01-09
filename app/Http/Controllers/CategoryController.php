<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CategoryListResource;

class CategoryController extends Controller
{
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
            'categories' => new CategoryCollection(Category::orderBy($sortBy, $orderBy)->paginate($per_page)) ,
        ], 200);
    }
    
    public function allCategories()
    {
        return response()->json(['Categories' =>  CategoryListResource::collection(Category::all())], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $category = new Category([
            'name' => $request->name,
            'short_code' => $request->short_code
        ]);
        $category->save();
        return response()->json(['category'=> new CategoryResource($category)], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'name';
        $orderBy = $request->order_by ? $request->order_by : 'asc';
        $categories = Category::where('name', 'LIKE', "%$id%");
        return response()->json([
            'categories' => new CategoryCollection($categories->orderBy($sortBy, $orderBy)->paginate($per_page)) ,
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $category = Category::find($id);
        $category->name = $request->name;
        $category->short_code = $request->short_code;
        $category->save();
        return response()->json(['category' => new CategoryResource($category)], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Category::find($id)->delete();
        return response()->json(['category' => $category], 200);
    }

    public function deleteAll(Request $request)
    {
        Category::whereIn('id', $request->categories)->delete();
        return response()->json(['message', 'Records Deleted Successfully'], 200);
    }
}
