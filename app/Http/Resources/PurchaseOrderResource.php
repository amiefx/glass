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
            'supplier_name' => $this->supplier->name,
            'total' => $this->total,
            'sub_total' => $this->sub_total,
            'amount_paid' => $this->amount_paid,
            'discount' => $this->discount,
            'POnumber' => $this->POnumber,
            'bank_id' => $this->bank_id,
            'imageurl' => $this->imageurl,
            'note' => $this->note,
            'status' => $this->status,
            'user_id' => $this->user_id,
            'user_name' => $this->user->name,
        ];
    }
}
