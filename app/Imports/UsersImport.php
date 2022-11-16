<?php

namespace App\Imports;

use App\Models\Role;
use App\Models\User;
use App\Models\UserRole;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;

class UsersImport implements ToModel, WithStartRow
{
    public function sheets(): array
    {
        return ['0'];
    }
    
    public function startRow(): int
    {
        return 3;
    }

    public function model(array $row)
    {
        $new_user = new User([
            'name' => $row[0],
            'address' => $row[1],
            'avatar' => $row[2],
            'phone' => $row[3],
            'gender' => $row[4],
            'birthday' => date('Y-m-d', strtotime($row[5])),
            'email' => $row[6],
            'status' => $row[7],
            'password' => Hash::make($row[8]),
            'role' => $row[9],
        ]);

        return $new_user;
    }
}
