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
     *                     property="user_id",
     *                     type="string"
     *                 ),
     *                 @OA\Property(
     *                     property="course_id",
     *                     type="string"
     *                 ),
     *                 example={"user_id": "1", "course_id": "1"}
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
        $add = Study::create([
            'user_id' => $request->user_id,
            'course_id' => $request->course_id,
        ]);

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
     * Display the specified resource.
     *
     * @param  \App\Models\Study  $study
     * @return \Illuminate\Http\Response
     */
    public function show(Study $study)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Study  $study
     * @return \Illuminate\Http\Response
     */
    public function edit(Study $study)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Study  $study
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Study $study)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Study  $study
     * @return \Illuminate\Http\Response
     */
    public function destroy(Study $study)
    {
        //
    }
}
