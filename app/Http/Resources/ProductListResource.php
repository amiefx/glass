<?php

namespace App\Http\Resources;
use Illuminate\Support\Facades\DB;
use App\Models\products;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return [
        //     'id' => $this->id,
        //     'sku' => $this->sku,
        //     'name' => $this->name,
        //     'selling_price' => $this->selling_price,
        //     'is_active' => $this->is_active,
        //   //  'onhand' => DB::table('remaining_quantity')->where('product_id', '=', $this->id)->get(['remaining_quantity']),
        //     'enable_stock' => $this->enable_stock,
        //     'height' => $this->height,
        //     'width' => $this->width,
        //     'onhand' => DB::table('product_qty')->select('qty')->where('product_id', '=', $this->id)->first(),
        //     'onhand2' => $this->onhand[0]
        // ];

        $data = [
            'id' => $this->id,
            'sku' => $this->sku,
            'name' => $this->name,
            'selling_price' => $this->selling_price,
            'is_active' => $this->is_active,
            'enable_stock' => $this->enable_stock,
            'height' => $this->height,
            'width' => $this->width,
            'alert_qty' => $this->alert_quantity,
            'category' => $this->category->name,
            'onhand' => DB::table('product_qty')->select('qty')->where('product_id', '=', $this->id)->first(),
        ];

        $data['onhand'] = json_decode($data['onhand']->qty, true);

        if ($data['onhand'] > $data['alert_qty']) {
            $data['alert'] = false;
        } else {
            $data['alert'] = true;
        }

        return $data;
    }
}
