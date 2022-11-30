<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'date_time_start',
        'date_time_end',
        'location',
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function courses()
    {
        return Course::find($this->course_id);
    }
}
