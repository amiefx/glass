<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseOrderResource extends JsonResource
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
            'supplier_id' => $this->supplier_id,
            'total' => $this->total,
            'amount_recieved' => $this->amount_recieved,
            'discount' => $this->discount,
            'note' => $this->note,
            'status' => $this->status,
            'user_id' => $this->user_id,
        ];
    }
}
