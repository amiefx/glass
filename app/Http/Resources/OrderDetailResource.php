<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderDetailResource extends JsonResource
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
            'order_id' => $this->order_id,
            'product_id' => $this->product_id,
            'product_name' => $this->product->sku,
            'quantity' => $this->quantity,
            'g_height' => $this->g_height,
            'g_width' => $this->g_width,
            'g_number' => $this->g_number,
            'price' => $this->price,
        ];
    }
}
