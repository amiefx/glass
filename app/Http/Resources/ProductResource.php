<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

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
            'unit_id' => $this->unit_id,
            'brand_id' => $this->brand_id,
            'category_id' => $this->category_id,
            'enable_stock' => $this->enable_stock,
            'alert_quantity' => $this->alert_quantity,
            'sku' => $this->sku,
            'selling_price' => $this->selling_price,
            'is_active' => $this->is_active,
            'size' => $this->size,
            'user_id' => $this->user_id
        ];
    }
}
