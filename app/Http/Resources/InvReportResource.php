<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Unit;

class InvReportResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'p_id' => $this->id,
            'p_name' => $this->name,
            'p_sku' => $this->sku,
            'p_unit_id' => $this->unit_id,
            'p_unit_name' => Unit::find($this->unit_id)->short_name,
            'p_remaining_qty' => $this->remaining_qty,
            'p_alert_quantity' => $this->alert_quantity,
            'p_stock_value' => $this->stock_value
        ];
    }
}
