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
            'total' => $this->total,
            'amount_recieved' => $this->amount_recieved,
            'note' => $this->note,
            'status' => $this->status,
            'user_id' => $this->user_id,
        ];
    }
}