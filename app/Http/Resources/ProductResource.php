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
            'unit' => $this->unit->short_name,
            'unit_id' => $this->unit_id,
            'brand' => $this->brand->name,
            'brand_id' => $this->brand_id,
            'category' => $this->category->name,
            'category_id' => $this->category_id,
            'enable_stock' => $this->enable_stock,
            'stock' => $this->enable_stock == 1 ? 'yes' : 'no',
            'alert_quantity' => $this->alert_quantity,
            'sku' => $this->sku,
            'selling_price' => $this->selling_price,
            'active' => $this->is_active == 1 ? 'yes' : 'no',
            'is_active' => $this->is_active,
            'size' => $this->size,
            'height' => $this->height,
            'width' => $this->width,
            'length' => $this->length,
            'color' => $this->color,
            'thickness' => $this->thickness,
            'weight' => $this->weight,
            'selling_price' => $this->selling_price,
            'user_id' => $this->user_id
        ];
    }
}
