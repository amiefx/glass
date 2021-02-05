<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id',
        'sub_total',
        'discount',
        'total',
        'amount_recieved',
        'discount',
        'note',
        'status',
        'user_id'
    ];


    protected $table = 'orders';


    //relationships

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function orderdetails()
    {
        return $this->hasMany(OrderDetail::class);
    }
}
