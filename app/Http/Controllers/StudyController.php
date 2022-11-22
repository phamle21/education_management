<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Study;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class StudyController extends Controller
{
    /**
     * @OA\Post(
     *      path="/api/studies",
     *      operationId="createStudy",
     *      tags={"Study"},
     *      summary="Create Study",
     *      description="",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *      @OA\RequestBody(
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 @OA\Property(
     *                     property="user_id[]",
     *                  type="array",
     *                  @OA\Items(type="string", format="id"),
     *                 ),
     *                 @OA\Property(
     *                     property="course_id",
     *                     type="string"
     *                 ),
     *                 example={"user_id": "[1,2,3,4]", "course_id": "1"}
     *             )
     *         )
     *     ),
     *       @OA\Response(response=400, description="Bad request"),
     *       security={
     *           {"api_key_security_example": {}}
     *       }
     *     )
     */
    public function store(Request $request)
    {
        if (!isset($request->user_id) || $request->user_id < 1) {
            return response()->json([
                'status' => 'error',
                'msg' => 'Không có học sinh nào ',
            ]);
        }

        if (!is_array($request->user_id)) {
            return response()->json([
                'status' => 'error',
                'msg' => 'Các user_id không phải một mảng ',
                't' => gettype($request->user_id)
            ]);
        }
        foreach ($request->user_id as $v) {
            $add = Study::create([
                'user_id' => $v,
                'course_id' => $request->course_id,
            ]);
        }

        if ($add) {

            if (Course::where('id', $request->course_id)->exists()) {
                $course = Course::find($request->course_id);
                $course->teacher_name = User::find($course->user_id)->name;
                $course->teacher_avatar = User::find($course->user_id)->getAvatar();
                $course->image = url(Storage::url($course->image));
                $course->topics;
                $course->studentOfCourse;

                foreach ($course->studentOfCourse as $v) {
                    $v->avatar = url(Storage::url($v->avatar));
                }

                $response = [
                    'status' => 'success',
                    'msg' => 'Thêm học sinh vào kháo học thành công!',
                    'description' => 'Trả về chi tiết khóa học',
                    'data' => $course
                ];
            } else {
                $response = [
                    'status' => 'failed',
                    'msg' => 'Khóa học không tồn tại'
                ];
            }
        } else {
            $response = [
                'status' => 'failed',
                'msg' => 'Thêm học sinh vào kháo học thất bại!!',
            ];
        }


        return response()->json($response);
    }

    /**
     * @OA\Delete(
     *      path="/api/studies",
     *      operationId="deleteStudy",
     *      tags={"Study"},
     *      summary="delete Study",
     *      description="Returns Study list",
     *      @OA\RequestBody(
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 @OA\Property(
     *                     property="user_id",
     *                      type="string",
     *                 ),
     *                 @OA\Property(
     *                     property="course_id",
     *                     type="string"
     *                 ),
     *                 example={"user_id": "1", "course_id": "1"}
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
    public function destroy(Request $request)
    {
        Study::where([
            ['user_id', $request->user_id],
            ['course_id', $request->course_id]
        ])->delete();

        if (Course::whereId($request->course_id)->exists()) {
            $course = Course::find($request->course_id);
            $course->teacher_name = User::find($course->user_id)->name;
            $course->teacher_avatar = User::find($course->user_id)->getAvatar();
            $course->image = url(Storage::url($course->image));
            $course->topics;
            $course->studentOfCourse;

            foreach ($course->studentOfCourse as $v) {
                $v->avatar = url(Storage::url($v->avatar));
            }

            $response = [
                'status' => 'success',
                'msg' => 'Xóa thành công học sinh khỏi lớp học!',
                'description' => 'Trả về chi tiết khóa học',
                'data' => $course
            ];
        } else {
            $response = [
                'status' => 'failed',
                'msg' => 'Khóa học không tồn tại'
            ];
        }

        return response()->json($response);
    }
}
