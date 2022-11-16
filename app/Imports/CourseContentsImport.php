<?php

namespace App\Imports;

use App\Models\CourseContent;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;

class CourseContentsImport implements ToModel, WithStartRow
{
    public function startRow(): int
    {
        return 3;
    }

    public function model(array $row)
    {
        return new CourseContent([
            'course_id' => $row[0],
            'title' => $row[1],
            'content' => $row[2],
        ]);
    }
}
