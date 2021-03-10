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

     //relationships
     public function customer()
     {
         return $this->belongsTo(Customer::class);
     }

     public function supplier()
     {
         return $this->belongsTo(Supplier::class);
     }

     public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

     public function user()
     {
         return $this->belongsTo(User::class);
     }

}
