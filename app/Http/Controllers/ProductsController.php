<?php

namespace App\Http\Controllers;

// use App\Models\cr;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductListResource;
use Illuminate\Http\Request;
use App\Models\products;


class ProductsController extends Controller
{
    public function index(Request $request)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'name';
        $orderBy = $request->order_by ? $request->order_by : 'desc';
        return response()->json([
            'products' => new ProductCollection(products::orderBy($sortBy, $orderBy)->paginate($per_page)) ,
        ], 200);
    }

    public function allProducts()
    {
        return response()->json(['products' =>  ProductListResource::collection(products::all())], 200);
    }

    public function store(Request $request)
    {
        $user = auth()->user();

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
            'user_id' => $user->id,
            'is_active' => $request->is_active
        ]);
        $product->save();
        return response()->json(['product'=> new ProductResource($product)], 200);
    }

    public function show(Request $request, $id)
    {
        $per_page = $request->per_page ? $request->per_page : 5;
        $sortBy = $request->sort_by ? $request->sort_by : 'name';
        $orderBy = $request->order_by ? $request->order_by : 'asc';
        $products = products::where('name', 'LIKE', "%$id%");
        return response()->json([
            'products' => new ProductCollection($products->orderBy($sortBy, $orderBy)->paginate($per_page)) ,
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $user = auth()->user();

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
        $product->user_id = $user->id;
        $product->is_active = $request->is_active;
        $product->save();
        return response()->json(['product' => new ProductResource($product)], 200);
    }

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

    public function allProductsWithFilter($column, $value)
    {
        $products = products::where([$column => $value])->get();
        return response()->json(['products'=>$products]);
    }


    //relationships methods
    public function productBrand(Request $request, $id)
    {
        $brand= products::findOrFail($id)->brand;
        return response()->json(['brand'=>$brand]);
    }
    public function productCategory(Request $request, $id)
    {
        $category= products::findOrFail($id)->category;
        return response()->json(['category'=>$category]);
    }
    public function productUnit(Request $request, $id)
    {
        $unit= products::findOrFail($id)->unit;
        return response()->json(['unit'=>$unit]);
    }
    public function productUser(Request $request, $id)
    {
        $user= products::findOrFail($id)->user;
        return response()->json(['user'=>$user]);
    }


    public function report()
    {
        $report = DB::table('remaining_quantity')->groupBy('product_id')->get();
        return response()->json(['report'=>$report]);
    }
}
