<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Enums\UserRole;
use App\Imports\AttendancesImport;
use App\Imports\CourseContentsImport;
use App\Imports\CoursesImport;
use App\Imports\OptionsImport;
use App\Imports\SchedulesImport;
use App\Imports\TopicsImport;
use App\Imports\UserInformationsImport;
use App\Imports\UsersImport;
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
use Maatwebsite\Excel\Facades\Excel;

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
                'avatar' => 'users/avatar-default.gif',
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
                'avatar' => 'users/avatar-default.gif',
                'role' => UserRole::Admin,
            ]
        ]);

        Excel::import(new OptionsImport, public_path('data-import/options.xlsx'));
        Excel::import(new UsersImport, public_path('data-import/users.xlsx'));
        Excel::import(new UserInformationsImport, public_path('data-import/user-informations.xlsx'));
        Excel::import(new CoursesImport, public_path('data-import/courses.xlsx'));
        Excel::import(new CourseContentsImport, public_path('data-import/course-contents.xlsx'));
        Excel::import(new TopicsImport, public_path('data-import/topics.xlsx'));
        Excel::import(new SchedulesImport, public_path('data-import/schedules.xlsx'));

        // Course - Topics
        foreach (Course::all() as $v) {
            CourseTopic::insert([
                'course_id' => $v->id,
                'topic_id' => Topic::all()->random()->id,
            ]);
            CourseTopic::insert([
                'course_id' => $v->id,
                'topic_id' => Topic::all()->random()->id,
            ]);
            CourseTopic::insert([
                'course_id' => $v->id,
                'topic_id' => Topic::all()->random()->id,
            ]);
        }

        Study::factory(20)->create();
    }
}
