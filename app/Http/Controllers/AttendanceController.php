<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\Course;
use App\Models\Schedule;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{
    /**
     * @OA\POST(
     *      path="/attendances/schedule",
     *      operationId="getStudentListBySchedule",
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
     *                 example={"schedule_id": "1"}
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
                'msg' => 'Lấy thành công danh sách học sinh của TKB theo khóa học',
                'data' => $list_student_of_course
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'msg' => 'Không có thời khóa biểu',
            ]);
        }
    }

    /**
     * @OA\POST(
     *      path="/api/attendances",
     *      operationId="addUpdateAttendance",
     *      tags={"Attendance"},
     *      summary="add or update attendance",
     *      description="Returns attandance list",
     *      @OA\RequestBody(
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 @OA\Property(
     *                     property="schedule_id",
     *                     type="integer"
     *                 ),
     *                  @OA\Property(
     *                      property="user_ids[]",
     *                      type="array",
     *                      @OA\Items(type="string", format="id"),
     *                 ),
     *                 example={"schedule_id": "1", "user_ids": "[1,2,3,4]"}
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
    public function attendances(Request $request)
    {
        Attendance::where('schedule_id', $request->schedule_id)->delete();
        $schedule_id = $request->schedule_id;
        $list_user_id = $request->user_ids;

        foreach ($list_user_id as $id) {
            Attendance::create([
                'schedule_id' => $schedule_id,
                'user_id' => $id
            ]);
        }

        $schedule = Schedule::find($request->schedule_id);

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
            'msg' => 'Điểm danh thành công',
            'description' => 'Trả về danh sách học sinh của khóa học theo trạng thái điểm danh mới',
            'data' => $list_student_of_course
        ]);
    }
}
