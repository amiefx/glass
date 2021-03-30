<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Receipt extends Model
{
    use HasFactory;

    protected $fillable = [
        'amount',
        'pmt_method',
        'bank_id',
        'imageurl',
        'payer_account',
        'details',
        'notes',
        'customer_id',
        'user_id'
    ];
}
