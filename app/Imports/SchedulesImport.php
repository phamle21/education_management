<?php

namespace App\Imports;

use App\Models\Schedule;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;
use PhpOffice\PhpSpreadsheet\Shared\Date;

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
            'date_time_start' => Carbon::createFromFormat('d/m/Y H:i:s', $row[1])->format('Y-m-d H:i:s'),
            'date_time_end' => Carbon::createFromFormat('d/m/Y H:i:s', $row[2])->format('Y-m-d H:i:s'),
            'location' => $row[3],
        ]);
    }
}
