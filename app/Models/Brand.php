<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description'
    ];


    protected $table = 'brands';

    public function products()
    {
        return $this->hasMany(products::class);
    }
}
