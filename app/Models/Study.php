<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Study extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'user_id',
        'mark',
        'finished',
        'tuition_paid',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
