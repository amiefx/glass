<?php

namespace App\Http\Controllers;

use App\Models\cr;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;
use App\Models\products;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'name';
        $orderBy = $request->order_by ? $request->order_by : 'desc';
        return response()->json([
            'products' => new ProductCollection(products::orderBy($sortBy, $orderBy)->paginate($per_page)) ,
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
        $product = new products([
            'name' => $request->name,
            'unit_id' => $request->unit_id,
            'brand_id' => $request->brand_id,
            'category_id' => $request->category_id,
            'enable_stock' => $request->enable_stock,
            'alert_quantity' => $request->alert_quantity,
            'sku' => $request->sku,
            'selling_price' => $request->selling_price,
            'length' => $request->length,
            'width' => $request->width,
            'height' => $request->height,
            'thickness' => $request->thickness,
            'weight' => $request->weight,
            'size' => $request->size,
            'color' => $request->color,
            'user_id' => $request->user_id,
            'is_active' => $request->is_active
        ]);
        $product->save();
        return response()->json(['product'=> new ProductResource($product)], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\cr  $cr
     * @return \Illuminate\Http\Response
     */
    public function show(cr $cr, Request $request, $id)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'name';
        $orderBy = $request->order_by ? $request->order_by : 'asc';
        $products = products::where('name', 'LIKE', "%$id%");
        return response()->json([
            'products' => new ProductCollection($products->orderBy($sortBy, $orderBy)->paginate($per_page)) ,
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\cr  $cr
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $product = products::find($id);
        $product->name = $request->name;
        $product->unit_id = $request->unit_id;
        $product->brand_id = $request->brand_id;
        $product->category_id = $request->category_id;
        $product->enable_stock = $request->enable_stock;
        $product->alert_quantity = $request->alert_quantity;
        $product->sku = $request->sku;
        $product->selling_price = $request->selling_price;
        $product->length = $request->length;
        $product->width = $request->width;
        $product->height = $request->height;
        $product->thickness = $request->thickness;
        $product->weight = $request->weight;
        $product->size = $request->size;
        $product->color = $request->color;
        $product->user_id = $request->user_id;
        $product->is_active = $request->is_active;
        $product->save();
        return response()->json(['product' => new ProductResource($product)], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\cr  $cr
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = products::find($id)->delete();
        return response()->json(['product' => $product], 200);
    }

    public function deleteAll(Request $request)
    {
        products::whereIn('id', $request->products)->delete();
        return response()->json(['message', 'Records Deleted Successfully'], 200);
    }

    public function changeStatus(Request $request)
    {
        $status = $request->status;
        $product = products::find($request->product);
        $product->is_active = $status;
        $product->save();
        return response()->json(['product' => new ProductResource($product)], 200);
    }


    public function allProductsWithUserInfo()
    {
        $products = products::all();
        foreach ($products as $product) {
            $product = array_merge(['user' => $product->user]);
        }
        return response()->json(['products'=>$products]);
    }

    public function allProductsWithFilter(Request $request)
    {
        $products = products::where([$request->column_name => $request->column_value])->get();
        
        return response()->json(['products'=>$products]);
    }
}
