<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\CourseContent;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CourseContentController extends Controller
{
    public function storeImage(Request $request)
    {
        if ($request->hasFile('upload')) {
            $originName = $request->file('upload')->getClientOriginalName();
            $fileName = pathinfo($originName, PATHINFO_FILENAME);
            $extension = $request->file('upload')->getClientOriginalExtension();
            $fileName = $fileName . '_' . time() . '.' . $extension;

            $request->file('upload')->move(public_path('storage/ckeditor-media'), $fileName);

            $url = asset('storage/ckeditor-media/' . $fileName);
            return response()->json(['fileName' => $fileName, 'uploaded' => 1, 'url' => $url]);
        }
    }

    /**
     * @OA\POST(
     *      path="/api/content_course",
     *      operationId="content_course",
     *      tags={"Course Content"},
     *      summary="add content_course",
     *      description="aaaaaaaaaaaaaa",
     *      @OA\RequestBody(
     *           @OA\MediaType(
     *               mediaType="application/json",
     *               @OA\Schema(
     *                   @OA\Property(
     *                       property="course_id",
     *                       type="string"
     *                   ),
     *                   @OA\Property(
     *                       property="title",
     *                       type="string"
     *                   ),
     *                   @OA\Property(
     *                       property="content",
     *                       type="string"
     *                   ),
     *                   example={
     *                        "course_id": "1",
     *                        "title": "Tieu de noi dung",
     *                        "content": "asfgdsgfsagsag",
     *                    }
     *               )
     *           )
     *       ),
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
        $course_id = $request->course_id;

        CourseContent::create([
            'course_id' => $course_id,
            'title' => $request->title,
            'content' => $request->content,
        ]);

        // Response after completed processing
        $course = Course::find($course_id);

        $response = [
            'status' => 'success',
            'msg' => 'Đã tạo nội dung mới cho kháo học',
            'data' => $course->contents
        ];
        return response()->json($response);
    }

    /**
     * @OA\PATCH(
     *      path="/api/content_course",
     *      operationId="updateCourseContent",
     *      tags={"Course Content"},
     *      summary="update content_course",
     *      description="aaaaaaaaaaaaaa",
     *      @OA\RequestBody(
     *           @OA\MediaType(
     *               mediaType="application/json",
     *               @OA\Schema(
     *                   @OA\Property(
     *                       property="course_id",
     *                       type="string"
     *                   ),
     *                   @OA\Property(
     *                       property="course_content_id",
     *                       type="string"
     *                   ),
     *                   @OA\Property(
     *                       property="title",
     *                       type="string"
     *                   ),
     *                   @OA\Property(
     *                       property="content",
     *                       type="string"
     *                   ),
     *                   example={
     *                        "course_id": "1",
     *                        "course_content_id": "1",
     *                        "title": "Tieu de noi dung",
     *                        "content": "asfgdsgfsagsag",
     *                    }
     *               )
     *           )
     *       ),
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
    public function update(Request $request)
    {
        $course_id = $request->course_id;

        $update = CourseContent::whereId($request->course_content_id)->update([
            'title' => $request->title,
            'content' => $request->content,
        ]);
        $course = Course::find($course_id);

        if (!$update) {
            return response()->json([
                'status' => 'error',
                'msg' => 'Xẩy ra lỗi khi chỉnh sửa khóa học',
                'data' => $course->contents,

                'des' => $update
            ]);
        }

        $response = [
            'status' => 'success',
            'msg' => 'Đã chỉnh sữa nội dung của khóa học',
            'data' => $course->contents
        ];
        return response()->json($response);
    }

    /**
     * @OA\Delete(
     *      path="/api/content_course",
     *      operationId="deleteCourseContent",
     *      tags={"Course Content"},
     *      summary="delete content_course",
     *      description="aaaaaaaaaaaaaa",
     *      @OA\RequestBody(
     *           @OA\MediaType(
     *               mediaType="application/json",
     *               @OA\Schema(
     *                   @OA\Property(
     *                       property="course_content_id",
     *                       type="string"
     *                   ),
     *                   example={
     *                        "course_content_id": "1",
     *                    }
     *               )
     *           )
     *       ),
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
        $content = CourseContent::find($request->course_content_id);
        $course_id = $content->course_id;

        $content->delete();

        // Response after completed processing
        $course = Course::find($course_id);

        $response = [
            'status' => 'success',
            'msg' => 'Đã xóa một nội dung của khóa học',
            'data' => $course->contents
        ];
        return response()->json($response);
    }
}
