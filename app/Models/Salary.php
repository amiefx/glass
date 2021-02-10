<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model; 

class Salary extends Model
{
    use HasFactory;

    protected $fillable = [
        'employee_id',
        'order_id',
        'amount_paid',
        'status',
        'note',
        'user_id'
    ];


    protected $table = 'salaries';

    //relationships
    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employee_id');
    }

}
