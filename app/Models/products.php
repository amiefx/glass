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
        'category_id',
        'enable_stock',
        'alert_quantity',
        'sku',
        'selling_price',
        'length',
        'width',
        'height',
        'thickness',
        'weight',
        'size',
        'color',
        'is_active',
        'user_id'
    ];


    protected $table = 'products';


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
}
