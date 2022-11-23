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
        'start',
        'end',
        'quantity',
        'tuition',
        'user_id',
        'image',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'laravel_through_key',
    ];


    public function contents()
    {
        return $this->hasMany(CourseContent::class);
    }

    public function courses_toppic()
    {
        return $this->hasMany(CourseTopic::class);
    }

    public function studyInfo()
    {
        return $this->hasMany(Study::class);
    }

    public function topics()
    {
        return $this->hasManyThrough(
            Topic::class,
            CourseTopic::class,
            'topic_id',
            'id',
            'id',
            'course_id'
        );
    }

    public function studentOfCourse()
    {
        return $this->hasManyThrough(
            User::class,
            Study::class,
            'course_id',
            'id',
            'id',
            'user_id'
        );
    }

    public function schedules()
    {
        return $this->hasMany(Schedule::class);
    }
}
