<?php

namespace App\Imports;

use App\Models\Course;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;

class CoursesImport implements ToModel, WithStartRow
{
    public function startRow(): int
    {
        return 3;
    }

    public function model(array $row)
    {
        return new Course([
            'name' => $row[0],
            'description' => $row[1],
            'start' => date('Y-m-d', strtotime($row[2])),
            'end' => date('Y-m-d', strtotime($row[3])),
            'quantity' => $row[4],
            'tuition' => $row[5],
            'user_id' => $row[6],
            'image' => $row[7],
        ]);
    }
}
