<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'laravel_through_key',
    ];

    public function courses(){
        return $this->hasManyThrough(
            Course::class,
            CourseTopic::class,
            'topic_id',
            'id',
            'id',
            'course_id',
        );
    }
}
