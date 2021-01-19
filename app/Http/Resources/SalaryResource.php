<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SalaryResource extends JsonResource
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
            'employee_id' => $this->employee_id, 
            'amount_paid' => $this->amount_paid,
            'status' => $this->status,
            'note' => $this->note,
            'user_id' => $this->user_id,
        ];
    }
}
