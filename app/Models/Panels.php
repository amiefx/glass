<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Panels extends Model
{
    use HasFactory;

    protected $fillable = [
        'size',
        'standard_size',
    ];

    protected $table = 'panels';
}
