<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BankDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'bank_name',
        'bank_short_name',
        'Branch',
        'Branch_code',
        'bank_address',
        'account_number',
        'account_title',
        'account_type',
        'kin',
        'cnic',
        'status',
        'user_id',
    ];

    protected $table = 'bank_details';
}
