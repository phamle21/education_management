<?php

namespace App\Http\Controllers;

use App\Enums\UserRole;
use App\Models\Course;
use App\Models\Study;
use App\Models\User;
use App\Models\UserInformation;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/dashbboard",
     *      operationId="getDashboard",
     *      tags={"Dashboard"},
     *      summary="Get Dashboard list",
     *      description="Returns Dashboard list",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *       @OA\Response(response=400, description="Bad request"),
     *       security={
     *           {"api_key_security_example": {}}
     *       }
     *     )
     */
    public function index()
    {
        $course_list = Course::all();
        foreach ($course_list as $v_course) {

            $v_course->totalSchedules = $v_course->schedules->count();
            $v_course->totalStudySessionLearned = 0;

            foreach ($v_course->schedules as $v_schedule) {
                if (strtotime($v_schedule->date_time_end) < strtotime(now())) {
                    $v_course->totalStudySessionLearned++;
                }
            }

            $v_course->totalTuition = Study::where('course_id', $v_course->id)->sum('tuition_paid');

            unset($v_course->schedules);
            unset($v_course->description);
        }

        $teacher_list = User::where('role', UserRole::Teacher)->get();
        foreach ($teacher_list as $v_teacher) {
            $v_teacher->degree = UserInformation::where([
                ['user_id', $v_teacher->id],
                ['key', 'degree'],
            ])->first() ? UserInformation::where([
                ['user_id', $v_teacher->id],
                ['key', 'degree'],
            ])->first()->information : null;
        }

        return response()->json([
            'status' => 'success',
            'courseList' => $course_list,
            'teacherList' => $teacher_list
        ]);
    }
}
