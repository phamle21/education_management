<?php

namespace App\Imports;

use App\Models\Schedule;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;

class NewCourseScheduleImport implements ToModel, WithStartRow
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
        return new Schedule([
            'course_id' => $this->course_id,
            'date_time_start' => Carbon::createFromFormat('d/m/Y H:i:s', $row[0])->format('Y-m-d H:i:s'),
            'date_time_end' => Carbon::createFromFormat('d/m/Y H:i:s', $row[1])->format('Y-m-d H:i:s'),
            'location' => $row[2],
        ]);
    }
}
