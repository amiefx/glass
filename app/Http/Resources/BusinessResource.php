<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BusinessResource extends JsonResource
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
            'name' => $this->name,
            'email' => $this->email,
            'phone' => $this->phone,
            'whatsapp' => $this->whatsapp,
            'country' => $this->country,
            'city' => $this->city,
            'zipcode' => $this->zipcode,
            'address' => $this->address,
            'logo' => $this->logo,
            'created_at' => $this->created_at,
          ];
    }
}
