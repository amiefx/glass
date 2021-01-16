<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseOrder extends Model
{
    use HasFactory;

    protected $fillable = [
        'supplier_id', 
        'total',
        'sub_total',
        'amount_paid',
        'discount',
        'note',
        'status',
        'user_id'
    ];


    protected $table = 'purchase_orders';


    //relationships

    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }

}
