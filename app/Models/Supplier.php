<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'company_name',
        'type',
        'work_number',
        'whatsapp_number',
        'email',
        'address',
        'credit_limit',
    ];
}
