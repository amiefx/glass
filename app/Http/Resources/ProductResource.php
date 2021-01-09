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
            'unit' => Unit::find($this->unit_id) ? Unit::find($this->unit_id)->short_name : '',
            'brand' => Brand::find($this->brand_id) ? Brand::find($this->brand_id)->name : '',
            'category' => Category::find($this->category_id) ? Category::find($this->category_id)->short_code : '',
            'enable_stock' => $this->enable_stock,
            'alert_quantity' => $this->alert_quantity,
            'sku' => $this->sku,
            'selling_price' => $this->selling_price,
            'is_active' => $this->is_active,
            'size' => $this->size,
            'user' => $this->user_id
        ];
    }
}
