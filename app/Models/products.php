<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class products extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'unit_id',
        'brand_id',
        'brand',
        'category_id',
        'type',
        'enable_stock',
        'alert_quantity',
        'sku',
        'urdu_sku',
        'selling_price',
        'color',
        'is_active',
        'user_id'
    ];


    // protected $table = 'products';

    protected $casts = [
        'brand' => 'array'
    ];


    //relationships
    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function purchase()
    {
        return $this->belongsTo(Purchase::class);
    }

    public function orderDetail()
    {
        return $this->hasMany(OrderDetail::class);
    }

}
