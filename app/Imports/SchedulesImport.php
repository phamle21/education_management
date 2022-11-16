<?php

namespace App\Imports;

use App\Models\Schedule;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;

class SchedulesImport implements ToModel, WithStartRow
{
    public function startRow(): int
    {
        return 3;
    }

    public function model(array $row)
    {
        return new Schedule([
            'course_id' => $row[0],
            'date_time_start' => date('Y-m-d', strtotime($row[1])),
            'date_time_end' => date('Y-m-d', strtotime($row[2])),
            'location' => $row[3],
        ]);
    }
}
