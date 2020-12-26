<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payable extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'vendor_id',
        'description',
        'debit',
        'credit',
        'balance',
        'status',
    ];


    protected $table = 'payables';

}
