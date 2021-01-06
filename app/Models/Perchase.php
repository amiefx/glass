<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Perchase extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id', 
        'product_id',
        'quantity',
        'price',
        'is_active',
        'user_id'
    ];


    protected $table = 'purchases';


    //relationships
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function products()
    {
        return $this->belongsTo(products::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
}
