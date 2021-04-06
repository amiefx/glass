<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Unit;

class InvPurReportResource extends JsonResource
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
            'p_purchase_value' => $this->purchase_value,
        ];
    }
}
