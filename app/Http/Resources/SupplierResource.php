<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;
use App\Models\Payable;

class SupplierResource extends JsonResource
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
            'name' => $this->name,
            'company_name' => $this->company_name,
            'type' => $this->type,
            'work_number' => $this->work_number,
            'whatsapp_number' => $this->whatsapp_number,
            'email' => $this->email,
            'address' => $this->address,
            'credit_limit' => $this->credit_limit,
            'payables' => $this->payables->sum('balance'),
            'is_active' => $this->is_active ? 'active' : 'not active',
            'created_at' => $this->created_at->format('Y-M-D H:i:s')
        ];
    }
}
