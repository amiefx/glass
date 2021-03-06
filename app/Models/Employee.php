<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'type',
        'work_number',
        'whatsapp_number',
        'email',
        'address',
        'salary',
    ];

    protected $table = 'employees';

    public function employees()
    {
        return $this->hasMany(Salary::class);
    }

    public function cash()
    {
        return $this->hasMany(Cash::class);
    }

    public function bank()
    {
        return $this->hasMany(Bank::class);
    }

}
