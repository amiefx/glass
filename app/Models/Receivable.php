<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Receivable extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'customer_id',
        'description',
        'debit',
        'credit',
        'balance',
        'status'
    ];

    protected $table = 'receivables';
}