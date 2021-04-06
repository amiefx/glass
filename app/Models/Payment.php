<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'amount',
        'pmt_method',
        'bank_id',
        'imageurl',
        'payee_account',
        'details',
        'notes',
        'supplier_id',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
}
