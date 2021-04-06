<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Unit;


class InvSalReportResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'p_id' => $this->id,
            'p_name' => $this->name,
            'p_sku' => $this->sku,
            'p_unit_id' => $this->unit_id,
            'p_unit_name' => Unit::find($this->unit_id)->short_name,
            'p_selling_price' => $this->selling_price,
            'p_alert_quantity' => $this->alert_quantity,
            'p_purchased_qty' => $this->purchased_qty,
            'p_sales_value' => $this->sales_value,
            'p_profit' => $this->profit,
            'p_sold_qty' => $this->sold_qty,
            'p_cogs' => $this->cogs,
        ];
    }
}


