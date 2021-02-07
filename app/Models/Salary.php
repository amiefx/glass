<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Salary extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'employee_id',
        'amount_paid',
        'status',
        'note',
        'user_id'
    ];


    protected $table = 'salaries';

}
