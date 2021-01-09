<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UnitListResource extends JsonResource
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
            'actual_name' => $this->actual_name,
            'short_name' => $this->short_name
        ];
    }
}
