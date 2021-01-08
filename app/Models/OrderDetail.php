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
        'price'
    ];


    protected $table = 'order_details';


    //relationships
    // public function order()
    // {
    //     return $this->belongsTo(Order::class);
    // }

    public function products()
    {
        return $this->belongsTo(products::class);
    }

}
