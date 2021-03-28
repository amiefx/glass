<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BankDetailResource extends JsonResource
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
            'bank_name' => $this->bank_name,
            'bank_short_name' => $this->bank_short_name,
            'Branch' => $this->Branch,
            'Branch_code' => $this->Branch_code,
            'bank_address' => $this->bank_address,
            'account_number' => $this->account_number,
            'account_title' => $this->account_title,
            'account_type' => $this->account_type,
            'kin' => $this->kin,
            'cnic' => $this->cnic,
            'status' => $this->status
          ];
    }
}
