<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    use HasFactory;

    protected $fillable = [
        'actual_name',
        'short_name'
    ];


    protected $table = 'units';

    //relationships
    public function products()
    {
        return $this->hasMany(products::class);
    }
}
