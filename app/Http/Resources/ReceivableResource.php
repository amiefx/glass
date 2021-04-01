<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReceivableResource extends JsonResource
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
            'type' => $this->type,
            'description' => $this->description,
            'debit' => $this->debit,
            'credit' => $this->credit,
            'balance' => $this->balance,
            'imageurl' => $this->imageurl,
            'status' => $this->status,
        ];
    }
}
