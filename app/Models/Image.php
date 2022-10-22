<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'type_name',
        'name',
        'path',
        'type_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
