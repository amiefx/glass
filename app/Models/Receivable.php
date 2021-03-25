<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Receivable extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'doc_id',
        'customer_id',
        'description',
        'debit',
        'credit',
        'balance',
        'status',
        'user_id',
        'imageurl'
    ];

    protected $table = 'recievables';

    //relationships
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

}
