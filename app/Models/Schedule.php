<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;

    protected $fillable = [
        'date_time',
        'course_id',
        'location',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
