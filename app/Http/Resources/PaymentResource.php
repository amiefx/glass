<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PaymentResource extends JsonResource
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
            'pmt_method' => $this->pmt_method,
            'bank_id' => $this->bank_id,
            'imageurl' => $this->imageurl,
            'amount' => $this->amount,
            'payee_account' => $this->payee_account,
            'details' => $this->details,
            'notes' => $this->notes,
            'user' => $this->user_id,
            'created_at' => $this->created_at->format('d M, Y')
        ];
    }
}
