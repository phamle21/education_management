<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserInformation extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'key',
        'information',
    ];

    protected $hidden = [
        'user_id',
        'created_at',
        'updated_at'
    ];
}
