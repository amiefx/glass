<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id', 
        'product_id',
        'quantity',
        'g_height',
        'g_width',
        'price'
    ];


    protected $table = 'order_details';


    //relationships
    // public function order()
    // {
    //     return $this->belongsTo(Order::class);
    // }

    public function product()
    {
        return $this->belongsTo(products::class);
    }

    public function orderdetails()
    {
        return $this->belongsTo(Order::class);
    }

}
