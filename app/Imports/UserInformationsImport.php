<?php

namespace App\Imports;

use App\Models\UserInformation;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;

class UserInformationsImport implements ToModel, WithStartRow
{
    public function startRow(): int
    {
        return 3;
    }

    public function model(array $row)
    {
        return new UserInformation([
            'user_id' => $row[0],
            'key' => $row[1],
            'information' => $row[2],
        ]);
    }
}
