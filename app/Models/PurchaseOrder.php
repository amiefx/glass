<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseOrder extends Model
{
    use HasFactory;

    protected $fillable = [
        'supplier_id',
        'sub_total',
        'total',
        'amount_paid',
        'POnumber',
        'bank_id',
        'imageurl',
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

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function purchaseorderdetails()
    {
        return $this->hasMany(Purchase::class, 'order_id');
    }


}
