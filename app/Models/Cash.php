<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cash extends Model
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
        'status',
        'user_id'
    ];

    protected $table = 'cashes';

    //relationships
    public function customers()
    {
        return $this->belongsToMany(Customer::class);
    }

    public function suppliers()
    {
        return $this->belongsToMany(Supplier::class);
    }


}
