<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payable extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'doc_id',
        'supplier_id',
        'description',
        'debit',
        'credit',
        'balance',
        'status',
        'user_id',
        'imageurl'
    ];


    protected $table = 'payables';

    //relationships
    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }

}
