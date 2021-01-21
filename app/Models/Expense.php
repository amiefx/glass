<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    use HasFactory;

    protected $fillable = [
        'date',
        'total',
        'note',
        'status',
        'expense_item_id',
        'pmt_method',
        'user_id'
    ];


    protected $table = 'expenses';

    // relationships
    public function expense_item()
    {
        return $this->belongsTo(ExpenseItem::class, 'expense_item_id');
    }

}
