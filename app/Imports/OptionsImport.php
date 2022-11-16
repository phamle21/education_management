<?php

namespace App\Imports;

use App\Models\Option;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;

class OptionsImport implements ToModel, WithStartRow
{
    public function startRow(): int
    {
        return 3;
    }

    public function model(array $row)
    {
        return new Option([
            'name' => $row[0] ? $row[0] : 'undefine',
            'value' => $row[1] ? $row[1] : 'undefine',
        ]);
    }
}
