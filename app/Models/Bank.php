<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bank extends Model
{
    use HasFactory;

    protected $fillable = [
        'doc_type', 
        'doc_id',
        'supplier_id',
        'customer_id',
        'employee_id',
        'credit',
        'debit',
        'balance',
        'user_id'
    ];

    protected $table = 'banks';

}
