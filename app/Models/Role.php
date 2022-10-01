<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description'
    ];

    public function users()
    {
        return $this->hasManyThrough(
            User::class,
            UserRole::class,
            'role_id',
            'id',
            'id',
            'user_id',
        );
    }

}
