<?php

namespace App\Http\Controllers;

use App\Imports\SchedulesImport;
use App\Models\Course;
use App\Models\Schedule;
use Carbon\Carbon;
use DateTime;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ScheduleController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/schedules",
     *      operationId="getSchedule",
     *      tags={"Schedule"},
     *      summary="Get schedule list",
     *      description="Returns schedule list",
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
    public function index(Request $request)
    {
        if (isset($request->startStr) && isset($request->endStr)) {
            $start_date = Carbon::parse($request->startStr)->toDateTimeString();
            $end_date = Carbon::parse($request->endStr)->toDateTimeString();

            $schedule = Schedule::where([
                ['date_time_start', '>=', $start_date],
                ['date_time_end', '<=', $end_date],
            ])->get();
        } else {
            $schedule = Schedule::all();
        }


        foreach ($schedule as $v) {
            $v->courseName = $v->course()->name;
            $v->title = $v->course()->name;
            $v->courseId = $v->course_id;
            $v->start = str_replace(' ', 'T', $v->date_time_start);
            $v->end = str_replace(' ', 'T', $v->date_time_end);
            $v->category = 'Education';
        }

        return response()->json($schedule);
    }

    /**
     * @OA\POST(
     *      path="/api/schedules",
     *      operationId="createSchedule",
     *      tags={"Schedule"},
     *      summary="create schedule",
     *      description="Returns schedule list",
     *      @OA\RequestBody(
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 @OA\Property(
     *                     property="courseID",
     *                     type="integer"
     *                 ),
     *                 @OA\Property(
     *                     property="start",
     *                     type="string"
     *                 ),
     *                 @OA\Property(
     *                     property="end",
     *                     type="string"
     *                 ),
     *                 @OA\Property(
     *                     property="location",
     *                     type="string"
     *                 ),
     *                 example={"courseID": "1", "start": "2022-11-18T03:12:00", "end": "2022-11-18T05:00:00", "location": "dia chi"}
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
    public function store(Request $request)
    {
        Schedule::create([
            'course_id' => $request->item['courseId'],
            'date_time_start' => Carbon::parse($request->item['start'])->format('Y-m-d H:i:s'),
            'date_time_end' => Carbon::parse($request->item['end'])->format('Y-m-d H:i:s'),
            'location' => $request->item['location'],
        ]);

        $schedule = Schedule::all();

        foreach ($schedule as $v) {
            $v->courseName = $v->course()->name;
            $v->title = $v->course()->name;
            $v->courseId = $v->course_id;
            $v->start = str_replace(' ', 'T', $v->date_time_start);
            $v->end = str_replace(' ', 'T', $v->date_time_end);
            $v->category = 'Education';
        }

        return response()->json($schedule);
    }

    /**
     * @OA\PATCH(
     *      path="/api/schedules/{id}",
     *      operationId="updateSchedule",
     *      tags={"Schedule"},
     *      summary="update schedule",
     *      description="Returns schedule list",
     *      @OA\Parameter(
     *            name="id",
     *            description="id",
     *            example="1",
     *            required=true,
     *            in="path",
     *            @OA\Schema(
     *                type="integer",
     *            )
     *        ),
     *      @OA\RequestBody(
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 @OA\Property(
     *                     property="courseID",
     *                     type="integer"
     *                 ),
     *                 @OA\Property(
     *                     property="start",
     *                     type="string"
     *                 ),
     *                 @OA\Property(
     *                     property="end",
     *                     type="string"
     *                 ),
     *                 @OA\Property(
     *                     property="location",
     *                     type="string"
     *                 ),
     *                 example={"courseID": "1", "start": "2022-11-18T03:12:00", "end": "2022-11-18T05:00:00", "location": "dia chi"}
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
    public function update(Request $request, Schedule $schedule)
    {
        Schedule::find($schedule->id)->update([
            'course_id' => $request->item['courseId'],
            'date_time_start' => Carbon::parse($request->item['start'])->format('Y-m-d H:i:s'),
            'date_time_end' => Carbon::parse($request->item['end'])->format('Y-m-d H:i:s'),
            'location' => $request->item['location'],
        ]);

        $schedule = Schedule::all();

        foreach ($schedule as $v) {
            $v->courseName = $v->course()->name;
            $v->title = $v->course()->name;
            $v->courseId = $v->course_id;
            $v->start = str_replace(' ', 'T', $v->date_time_start);
            $v->end = str_replace(' ', 'T', $v->date_time_end);
            $v->category = 'Education';
        }

        return response()->json($schedule);
    }

    /**
     * @OA\Delete(
     *      path="/api/schedules/{id}",
     *      operationId="deleteSchedule",
     *      tags={"Schedule"},
     *      summary="delete schedule",
     *      description="Returns schedule list",
     *      @OA\Parameter(
     *            name="id",
     *            description="id",
     *            example="1",
     *            required=true,
     *            in="path",
     *            @OA\Schema(
     *                type="integer",
     *            )
     *        ),
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
    public function destroy(Schedule $schedule)
    {
        $schedule->delete();

        $schedule = Schedule::all();

        foreach ($schedule as $v) {
            $v->courseName = $v->course()->name;
            $v->title = $v->course()->name;
            $v->courseId = $v->course_id;
            $v->start = str_replace(' ', 'T', $v->date_time_start);
            $v->end = str_replace(' ', 'T', $v->date_time_end);
            $v->category = 'Education';
        }

        return response()->json($schedule);
    }

    /**
     * @OA\POST(
     *      path="/api/schedules/import",
     *      operationId="importSchedule",
     *      tags={"Schedule"},
     *      summary="import schedule list",
     *      description="Returns schedule list",
     *      @OA\RequestBody(
     *          @OA\MediaType(
     *               mediaType="multipart/form-data",
     *               @OA\Schema(
     *                   type="object",
     *                   @OA\Property(
     *                      property="import-file",
     *                      type="array",
     *                      @OA\Items(
     *                           type="string",
     *                           format="binary",
     *                      ),
     *                   ),
     *               ),
     *           )
     *      ),
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
    public function import(Request $request)
    {

        Excel::import(new SchedulesImport, request()->file('import-file'));

        $schedule = Schedule::all();

        foreach ($schedule as $v) {
            $v->courseName = $v->course()->name;
            $v->title = $v->course()->name;
            $v->courseId = $v->course_id;
            $v->start = str_replace(' ', 'T', $v->date_time_start);
            $v->end = str_replace(' ', 'T', $v->date_time_end);
            $v->category = 'Education';
        }

        return response()->json($schedule);
    }

    /**
     * @OA\POST(
     *      path="/api/schedules/course",
     *      operationId="getScheduleOfCourse",
     *      tags={"Schedule"},
     *      summary="get schedulOfCoursee list",
     *      description="Returns schedule list",
     *      @OA\RequestBody(
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 @OA\Property(
     *                     property="course_id",
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
    public function scheduleOfCourse(Request $request)
    {
        $course = Course::find($request->course_id);

        $course->schedules;
        foreach ($course->schedules as $v) {
            $temp = new DateTime($v->date_time_start);
            $v->dateNameStart = $temp->format('l');

            $temp2 = new DateTime($v->date_time_end);
            $v->dateNameEnd = $temp2->format('l');
        }

        return response()->json([
            'status' => 'success',
            'msg' => 'Lấy thành công thời khóa biểu của khóa học',
            'description' => 'Trả về khóa học và lịch học',
            'data' => $course
        ]);
    }
}
