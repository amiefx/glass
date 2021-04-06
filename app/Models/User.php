<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'email_verified_at',
        'password',
        'type',
        'contact_no',
        'address',
        'type'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier()
    {
        return $this->getkey();
    }
    public function getJWTCustomClaims()
    {
        return [];
    }


    //relationships
    public function products()
    {
        return $this->hasMany(products::class);
    }

    public function puchases()
    {
        return $this->hasMany(PurchaseOrder::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function receipt()
    {
        return $this->hasMany(Receipt::class);
    }

    public function payment()
    {
        return $this->hasMany(Payment::class);
    }
    
}
