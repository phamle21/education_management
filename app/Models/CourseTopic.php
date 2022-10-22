<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseTopic extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'topic_id'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
