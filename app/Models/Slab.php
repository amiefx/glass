<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Slab extends Model
{
    use HasFactory;

    protected $fillable = [
        'min', 
        'max',
        'actual'
    ];

    protected $table = 'slibs';
}
