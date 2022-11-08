<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Enums\UserRole;
use App\Models\Attendance;
use App\Models\Course;
use App\Models\CourseContent;
use App\Models\CourseTopic;
use App\Models\Image;
use App\Models\Option;
use App\Models\Schedule;
use App\Models\Study;
use App\Models\Topic;
use App\Models\User;
use App\Models\UserInformation;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::insert([
            [
                'name' => 'Administrator',
                'email' => 'phamle21@gmail.com',
                'email_verified_at' => now(),
                'password' => Hash::make('admin'), // password
                'remember_token' => Str::random(10),
                'phone' => '0941649826',
                'status' => 'Active',
                'gender' => 'Male',
                'role' => UserRole::Admin,
            ],
            [
                'name' => 'Hồng An',
                'email' => 'dth.an292@gmail.com',
                'email_verified_at' => now(),
                'password' => Hash::make('admin'), // password
                'remember_token' => Str::random(10),
                'phone' => '0387473591',
                'status' => 'Active',
                'gender' => 'Female',
                'role' => UserRole::Admin,
            ]
        ]);

        foreach (User::all() as $v) {
            Image::create([
                'type' => 'User',
                'type_name' => 'avatar',
                'name' => 'Avatar of ' . $v->name,
                'path' => 'avatar-default.png',
                'type_id' => $v->id
            ]);
        }

        Option::insert([
            [
                'name' => 'logo_name',
                'value' => 'Logo',
            ],
            [
                'name' => 'logo_path',
                'path' => '/images/system/logo.png'
            ],
            [
                'name' => 'name_site',
                'value' => 'Sport Management'
            ]
        ]);

        User::factory(10)->create();

        foreach (User::all() as $v) {
            UserInformation::insert([
                'user_id' => $v->id,
                'key' => 'degree',
                'information' => 'Sư phạm CNTT',
            ]);
        }

        UserInformation::factory(10)->create();
        Course::factory(10)->create();
        CourseContent::factory(10)->create();
        Topic::factory(10)->create();

        foreach (Course::all() as $v) {
            CourseTopic::insert([
                'course_id' => $v->id,
                'topic_id' => Topic::all()->random()->id,
            ]);
        }

        Schedule::factory(10)->create();
        Study::factory(10)->create();
        Attendance::factory(10)->create();
    }
}
