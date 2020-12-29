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
}
