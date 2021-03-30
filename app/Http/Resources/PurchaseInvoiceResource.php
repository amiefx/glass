<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseInvoiceResource extends JsonResource
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
            'supplier_name' => $this->supplier->name,
            'supplier_id' => $this->supplier_id,
            'POnumber' => $this->POnumber,
            'sub_total' => $this->sub_total,
            'discount' => $this->discount,
            'total' => $this->total,
            'amount_paid' => $this->amount_paid,
            'note' => $this->note,
            'status' => $this->status,
            'user_id' => $this->user_id,
            'user_name' => $this->user->name,
            'created_at' => $this->created_at->format('d M, Y'),
        ];
    }
}
