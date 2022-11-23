<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\Course;
use App\Models\Schedule;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{
    /**
     * @OA\GET(
     *      path="/api/attendances/schedule",
     *      operationId="getListStudentSchedule",
     *      tags={"Attendance"},
     *      summary="get student list of schedule",
     *      description="Returns student list",
     *      @OA\RequestBody(
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 @OA\Property(
     *                     property="schedule_id",
     *                     type="integer"
     *                 ),
     *                 example={"course_id": "1"}
     *             )
     *         )
     *     ),
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
    public function show(Request $request)
    {
        $schedule = Schedule::find($request->schedule_id);
        if (Schedule::whereId($request->schedule_id)->exists()) {
            $course = Course::find($schedule->course_id);

            $list_student_of_course = $course->studentOfCourse;

            foreach ($list_student_of_course as $v) {
                if (Attendance::where([
                    ['user_id', $v->id],
                    ['schedule_id', $request->schedule_id],
                ])->exists()) {
                    $v->attendance = true;
                } else {
                    $v->attendance = false;
                }
            }

            return response()->json([
                'status' => 'success',
                'msg' => 'Lấy thành công danh sách học sinh của khoá học của TKB',
                'data' => $list_student_of_course
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'msg' => 'Khoogn có TKB',
            ]);
        }
    }
}
