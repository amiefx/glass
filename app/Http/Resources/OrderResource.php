<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
            'customer_id' => $this->customer_id,
            'customer_name' => $this->customer->name,
            'sub_total' => $this->sub_total,
            'discount' => $this->discount,
            'total' => $this->total,
            'amount_recieved' => $this->amount_recieved,
            'polish' => $this->polish,
            'discount' => $this->discount,
            'note' => $this->note,
            'status' => $this->status,
            'walkin_name' => $this->walkin_name,
            'walkin_phone' => $this->walkin_phone,
            'user_id' => $this->user_id,
            'user_name' => $this->user->name,
        ];
    }
}
