<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BankResource extends JsonResource
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
            'doc_type' => $this->doc_type,
            'doc_id' => $this->doc_id,
            'bank_id' => $this->bank_id,
            'supplier_id' => $this->supplier_id ? $this->supplier->name : '' ,
            'customer_id' => $this->customer_id ? $this->customer->name : '' ,
            'employee_id' => $this->employee_id ? $this->employee->name : '' ,
            'credit' => $this->credit,
            'debit' => $this->debit,
            'balance' => $this->balance,
            'attachment' => $this->attachment,
            'user_id' => $this->user_id ? $this->user->name : '' ,
            'created_at' => $this->created_at->format('d M, Y')
          ];
    }
}
