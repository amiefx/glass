<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class BankCollection extends ResourceCollection
{
    public $collects = 'App\Http\Resources\BankResource';
    
    public function toArray($request)
    {
        return [
            'data' => $this->collection,
            'total' => $this->total(),
            'count' => $this->count(),
            'per_page' => $this->perPage(),
            'current_page' => $this->currentPage(),
            'total_pages' => $this->lastPage(),
        ];
    }
}
