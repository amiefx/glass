<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'email' => $this->email,
            'type' => $this->type,
            'contact_no' => $this->contact_no,
            'is_active' => $this->is_active,
            'created_at' => $this->created_at->format('Y-M-D H:i:s')
        ];
    }
}
