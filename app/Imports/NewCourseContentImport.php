<?php

namespace App\Imports;

use App\Models\CourseContent;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;

class NewCourseContentImport implements ToModel, WithStartRow
{
    protected $course_id;
    public function  __construct($course_id)
    {
        $this->course_id = $course_id;
    }

    public function startRow(): int
    {
        return 3;
    }

    public function model(array $row)
    {
        return new CourseContent([
            'course_id' => $this->course_id,
            'title' => $row[0],
            'content' => $row[1],
        ]);
    }
}
