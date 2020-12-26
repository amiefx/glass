<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class products extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'type',
        'unit_id',
        'brand_id',
        'category_id',
        'tax',
        'tax_type',
        'enable_stock',
        'alert_quantity',
        'sku',
        'barcode_type',
        'enable_serial_no',
        'weight',
        'created_by'
    ];


    protected $table = 'products';
}
