<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ExpenseResource extends JsonResource
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
            'date' => $this->Date,
            'total' => $this->total,
            'note' => $this->note,
            'status' => $this->status,
            'pmt_method' => $this->pmt_method,
            'expense_item_id' => $this->expense_item->name,
            'user_id' => $this->user_id,
        ];
    }
}
