<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'cutomer_id', 
        'total',
        'amount_recieved',
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
}
