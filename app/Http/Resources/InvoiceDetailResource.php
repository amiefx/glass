<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\OrderDetailCollection;

class InvoiceDetailResource extends JsonResource
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
            'customer_name' => $this->customer->name,
            'customer_id' => $this->customer->id,
            'sub_total' => $this->sub_total,
            'discount' => $this->discount,
            'total' => $this->total,
            'amount_recieved' => $this->amount_recieved,
            'discount' => $this->discount,
            'note' => $this->note,
            'status' => $this->status,
            'user_id' => $this->user->id,
            'user_name' => $this->user->name,
            'created_at' => $this->created_at->format('d M, Y'),
        ];
    }
}
