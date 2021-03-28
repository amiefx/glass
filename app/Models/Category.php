<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'name',
        'short_code'
    ];


    protected $table = 'categories';

    //relationships
    public function product()
    {
        return $this->hasMany(products::class);
    }
}
