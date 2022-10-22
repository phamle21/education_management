<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseContent extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'title',
        'content',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function images(){
        
    }
}
