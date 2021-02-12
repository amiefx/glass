<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Unit;
use App\Models\Brand;
use App\Models\Category;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'unit' => $this->unit_id,
            'unit_id' => $this->unit_id,
            'brand' => $this->brand,
            'brand_name' => $this->brand['name'],
            'brand_id' => $this->brand_id,
            'category' => $this->category_id,
            'category_id' => $this->category_id,
            'enable_stock' => $this->enable_stock,
            'stock' => $this->enable_stock == 1 ? 'yes' : 'no',
            'alert_quantity' => $this->alert_quantity,
            'sku' => $this->sku,
            'urdu_sku' => $this->urdu_sku,
            'selling_price' => $this->selling_price,
            'active' => $this->is_active == 1 ? 'yes' : 'no',
            'is_active' => $this->is_active,
            'color' => $this->color,
            'selling_price' => $this->selling_price,
            'user_id' => $this->user_id
        ];
    }
}
