<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'content',
        'start',
        'end',
        'quantity',
        'tuition',
        'user_id',
        'image',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function contents()
    {
        return $this->hasMany(CourseContent::class);
    }

    public function topics()
    {
        return $this->hasMany(CourseTopic::class);
    }

    public function studyInfo()
    {
        return $this->hasMany(Study::class);
    }
}
