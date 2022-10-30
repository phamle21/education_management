<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\CourseTopic;
use App\Models\Image;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

class CourseController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/courses",
     *      operationId="getCoursesList",
     *      tags={"Courses"},
     *      summary="Get courses list",
     *      description="Returns courses list",
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
        foreach ($course_list as $v) {
            $v->teacher_name = User::find($v->user_id)->name;
            $v->teacher_avatar = User::find($v->user_id)->getAvatar();
            $v->image = url(Storage::url($v->image));
            $v->topics;
        }

        $response = [
            'status' => 'success',
            'msg' => 'Lấy thành công danh sách khóa học!',
            'data' => $course_list
        ];

        return response()->json($response);
    }

    /**
     * @OA\Get(
     *      path="/api/courses/{id}/content",
     *      operationId="getCoursesContent",
     *      tags={"Courses"},
     *      summary="Get courses content",
     *      description="Returns courses content",
     *      @OA\Parameter(
     *            name="id",
     *            description="Course ID",
     *            example="1",
     *            required=true,
     *            in="path",
     *            @OA\Schema(
     *                type="integer"
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
    public function courseContent($id)
    {
        $response = [];
        $course = Course::find($id);

        if ($course) {
            $response = [
                'status' => 'success',
                'msg' => 'Lấy thành công nội dung khóa học!',
                'data' => $course->contents
            ];
        } else {
            $response = [
                'status' => 'error',
                'msg' => 'Không tìm thấy khóa học hoặc nội dung khóa học!',
            ];
        }
        return response()->json($response);
    }

    /**
     * @OA\Post(
     *      path="/api/courses",
     *      operationId="createNewCourses",
     *      tags={"Courses"},
     *      summary="Create Course",
     *      description="",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *      @OA\Parameter(
     *            name="name",
     *            description="name",
     *            example="Ten Khoa Hoc",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="string",
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="topic_id[]",
     *            description="Danh sách ID của danh mục",
     *            example="Danh sách ID của danh mục",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="array",
     *                  @OA\Items(type="integer"),
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="description",
     *            description="Description of course",
     *            example="Khóa học 3tr có tiền thì học không thì ngu",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="string",
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="content",
     *            description="Content of course",
     *            example="Khóa học giảng dạy về....",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="string",
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="start",
     *            description="Start datetime of course",
     *            example="2022-09-17 21:21:21",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="string",
     *                format ="date-time",
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="end",
     *            description="End datetime of course",
     *            example="2022-12-17 21:21:21",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="string",
     *                format ="date-time",
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="quantity",
     *            description="Quantity member of course",
     *            example="20",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="integer",
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="tuition",
     *            description="Tuition fee of course",
     *            example="3000000",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="integer",
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="user_id",
     *            description="Teacher ID of course",
     *            example="1",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="integer",
     *            )
     *        ),
     *       @OA\RequestBody(
     *           @OA\MediaType(
     *               mediaType="multipart/form-data",
     *               @OA\Schema(
     *                   type="object",
     *                   @OA\Property(
     *                      property="image",
     *                      type="array",
     *                      @OA\Items(
     *                           type="string",
     *                           format="binary",
     *                      ),
     *                   ),
     *               ),
     *           )
     *       ),
     *       @OA\Response(response=400, description="Bad request"),
     *       security={
     *           {"api_key_security_example": {}}
     *       }
     *     )
     */
    public function store(Request $request)
    {
        $response = [];

        // kiểm tra có files sẽ xử lý
        if ($request->hasFile('image')) {
            $allowedfileExtension = ['jpg', 'jpeg', 'tiff', 'psd', 'eps', 'gif', 'png', 'raw', 'svg',];
            $files = $request->file('image');
            // flag xem có thực hiện lưu DB không. Mặc định là có
            $exe_flg = true;

            // kiểm tra tất cả các files xem có đuôi mở rộng đúng không
            foreach ($files as $file) {
                $extension = $file->getClientOriginalExtension();
                $check = in_array($extension, $allowedfileExtension);

                if (!$check) {
                    // nếu có file nào không đúng đuôi mở rộng thì đổi flag thành false
                    $exe_flg = false;
                    break;
                }
            }

            // nếu không có file nào vi phạm validate thì tiến hành lưu DB
            if ($exe_flg) {

                //Thêm vào BD
                $add = Course::create([
                    'name' => $request->name,
                    'description' => $request->description,
                    'content' => $request->content,
                    'start' => $request->start,
                    'end' => $request->end,
                    'quantity' => $request->quantity,
                    'tuition' => $request->tuition,
                    'user_id' => $request->user_id,
                ]);

                if ($add) {

                    // Thực hiện lưu file
                    $file = $request->file('image');
                    $extension = $file->getClientOriginalExtension();

                    $path = Storage::put('public/courses', $file);

                    Course::where('id', $add->id)->update([
                        'image' => $path,
                    ]);

                    //Add topic
                    if (is_array($request->topic_id)) {
                        foreach ($request->topic_id as $v) {
                            CourseTopic::create([
                                'course_id' => $add->id,
                                'topic_id' => $v,
                            ]);
                        }
                    }

                    $course = Course::find($add->id);
                    $course->teacher_name = User::find($course->user_id)->name;

                    $response = [
                        'status' => 'success',
                        'msg' => 'Thêm khóa học mới thành công',
                        'data' => $course
                    ];
                } else {
                    $response = [
                        'status' => 'failed',
                        'msg' => "Thêm khóa học thất bại!",
                    ];
                    return response()->json($response);
                }
            } else {

                $response = [
                    'status' => 'failed',
                    'msg' => "Định dạng file tải lên không đúng.\n Định dạng tải lên phải là 1 trong những file sau: ['jpg', 'jpeg', 'tiff', 'psd', 'eps', 'gif', 'png', 'raw', 'svg',]",
                ];
                return response()->json($response);
            }
        } else {
            $response = [
                'status' => 'failed',
                'msg' => "Không có file nào tải lên!",
            ];
            return response()->json($response);
        }

        return response()->json($response);
    }

    /**
     * @OA\Get(
     *      path="/api/courses/{id}",
     *      operationId="getCourseDetails",
     *      tags={"Courses"},
     *      summary="Get details of Course",
     *      description="Returns Course details",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *      @OA\Parameter(
     *            name="id",
     *            description="course_id",
     *            example="1",
     *            required=true,
     *            in="path",
     *            @OA\Schema(
     *                type="integer"
     *            )
     *        ),
     *       @OA\Response(response=400, description="Bad request"),
     *       security={
     *           {"api_key_security_example": {}}
     *       }
     *     )
     */
    public function show($id)
    {
        if (Course::where('id', $id)->exists()) {
            $course = Course::find($id);
            $course->teacher_name = User::find($course->user_id)->name;
            $course->teacher_avatar = User::find($course->user_id)->getAvatar();
            $course->image = url(Storage::url($course->image));

            $response = [
                'status' => 'success',
                'msg' => 'Lấy thành công chi tiết khóa học!',
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

    /**
     * @OA\Patch(
     *      path="/api/courses/{id}",
     *      operationId="updateCourses",
     *      tags={"Courses"},
     *      summary="Update Course",
     *      description="",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *      @OA\Parameter(
     *            name="id",
     *            description="id khoa hoc",
     *            example="1",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="integer",
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="name",
     *            description="name",
     *            example="Ten Khoa Hoc",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="string",
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="topic_id[]",
     *            description="Danh sách ID của danh mục",
     *            example="Danh sách ID của danh mục",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="array",
     *                  @OA\Items(type="integer"),
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="description",
     *            description="Description of course",
     *            example="Khóa học 3tr có tiền thì học không thì ngu",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="string",
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="content",
     *            description="Content of course",
     *            example="Khóa học giảng dạy về....",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="string",
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="start",
     *            description="Start datetime of course",
     *            example="2022-09-17 21:21:21",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="string",
     *                format ="date-time",
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="end",
     *            description="End datetime of course",
     *            example="2022-12-17 21:21:21",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="string",
     *                format ="date-time",
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="quantity",
     *            description="Quantity member of course",
     *            example="20",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="integer",
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="tuition",
     *            description="Tuition fee of course",
     *            example="3000000",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="integer",
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="user_id",
     *            description="Teacher ID of course",
     *            example="1",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="integer",
     *            )
     *        ),
     *       @OA\RequestBody(
     *           @OA\MediaType(
     *               mediaType="multipart/form-data",
     *               @OA\Schema(
     *                   type="object",
     *                   @OA\Property(
     *                      property="image",
     *                      type="array",
     *                      @OA\Items(
     *                           type="string",
     *                           format="binary",
     *                      ),
     *                   ),
     *               ),
     *           )
     *       ),
     *       @OA\Response(response=400, description="Bad request"),
     *       security={
     *           {"api_key_security_example": {}}
     *       }
     *     )
     */
    public function update(Request $request, $id)
    {
        $response = [];

        // kiểm tra có files sẽ xử lý
        if ($request->hasFile('image')) {
            $allowedfileExtension = ['jpg', 'jpeg', 'tiff', 'psd', 'eps', 'gif', 'png', 'raw', 'svg',];
            $files = $request->file('image');
            // flag xem có thực hiện lưu DB không. Mặc định là có
            $exe_flg = true;

            // kiểm tra tất cả các files xem có đuôi mở rộng đúng không
            foreach ($files as $file) {
                $extension = $file->getClientOriginalExtension();
                $check = in_array($extension, $allowedfileExtension);

                if (!$check) {
                    // nếu có file nào không đúng đuôi mở rộng thì đổi flag thành false
                    $exe_flg = false;
                    break;
                }
            }

            // nếu không có file nào vi phạm validate thì tiến hành lưu DB
            if ($exe_flg) {

                $update = Course::find($id)->update([
                    'name' => $request->name,
                    'description' => $request->description,
                    'content' => $request->content,
                    'start' => $request->start,
                    'end' => $request->end,
                    'quantity' => $request->quantity,
                    'tuition' => $request->tuition,
                    'user_id' => $request->user_id,
                ]);

                if ($update) {

                    // Xóa file cũ
                    Storage::delete(Course::find($id)->image);

                    // Thực hiện lưu file
                    $file = $request->file('image');
                    $extension = $file->getClientOriginalExtension();

                    $path = Storage::put('public/courses', $file);

                    Course::where('id', $id)->update([
                        'image' => $path,
                    ]);

                    //update topic
                    CourseTopic::where('course_id', $id)->delete();
                    foreach ($request->topic_id as $v) {
                        CourseTopic::create([
                            'course_id' => $id,
                            'topic_id' => $v,
                        ]);
                    }

                    $course = Course::find($id);
                    $course->teacher_name = User::find($course->user_id)->name;
                    $course->image = url(Storage::url($course->image));

                    $response = [
                        'status' => 'success',
                        'msg' => 'Update "' . $request->name . '" completed.',
                        'data' => $course
                    ];
                } else {
                    $response = [
                        'status' => 'failed',
                        'msg' => 'Update "' . $request->name . '" failed',
                    ];
                }
            } else {

                $response = [
                    'status' => 'failed',
                    'msg' => "Định dạng file tải lên không đúng.\n Định dạng tải lên phải là 1 trong những file sau: ['jpg', 'jpeg', 'tiff', 'psd', 'eps', 'gif', 'png', 'raw', 'svg',]",
                ];
                return response()->json($response);
            }
        } else {
            $update = Course::find($id)->update([
                'name' => $request->name,
                'description' => $request->description,
                'content' => $request->content,
                'start' => $request->start,
                'end' => $request->end,
                'quantity' => $request->quantity,
                'tuition' => $request->tuition,
                'user_id' => $request->user_id,
            ]);

            if ($update) {

                //update topic
                CourseTopic::where('course_id', $id)->delete();
                foreach ($request->topic_id as $v) {
                    CourseTopic::create([
                        'course_id' => $id,
                        'topic_id' => $v,
                    ]);
                }

                $course = Course::find($id);
                $course->teacher_name = User::find($course->user_id)->name;
                $course->image = url(Storage::url($course->image));

                $response = [
                    'status' => 'success',
                    'msg' => 'Update "' . $request->name . '" completed.',
                    'data' => $course
                ];
            } else {
                $response = [
                    'status' => 'failed',
                    'msg' => 'Update "' . $request->name . '" failed',
                ];
            }
        }

        return response()->json($response);
    }

    /**
     * @OA\Delete(
     *      path="/api/courses/{id}",
     *      operationId="deleteCourse",
     *      tags={"Courses"},
     *      summary="Delete courses",
     *      description="Returns status delete",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *      @OA\Parameter(
     *            name="id",
     *            description="courses_id",
     *            example="1",
     *            required=true,
     *            in="path",
     *            @OA\Schema(
     *                type="integer"
     *            )
     *        ),
     *       @OA\Response(response=400, description="Bad request"),
     *       security={
     *           {"api_key_security_example": {}}
     *       }
     *     )
     */
    public function destroy($id)
    {
        if (Course::where('id', $id)->exists()) {
            $course = Course::find($id);
            $fileDelete = $course->image;
            $response = [];
            if ($course->delete()) {

                // Delete file of course
                Storage::delete($fileDelete);

                $fileOfCourse = Image::where([
                    ['type', 'Course'],
                    ['type_id', $id],
                ])->get();

                foreach ($fileOfCourse as $v) {
                    Storage::delete($v->path);
                    $v->delete();
                }

                $response = [
                    'status' => 'success',
                    'msg' => 'Delete course completed'
                ];
            } else {
                $response = [
                    'status' => 'failed',
                    'msg' => 'Delete course failed'
                ];
            }
        } else {
            $response = [
                'status' => 'failed',
                'msg' => 'Khóa học không tồn tại'
            ];
        }

        return response()->json($response);
    }

    /**
     * @OA\Get(
     *      path="/api/courses/{id}/student",
     *      operationId="getCourseOfStuent",
     *      tags={"Courses"},
     *      summary="Get course of student",
     *      description="Returns Courses of student",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *      @OA\Parameter(
     *            name="id",
     *            description="student_id",
     *            example="1",
     *            required=true,
     *            in="path",
     *            @OA\Schema(
     *                type="integer"
     *            )
     *        ),
     *       @OA\Response(response=400, description="Bad request"),
     *       security={
     *           {"api_key_security_example": {}}
     *       }
     *     )
     */
    public function courseOfStudent($id)
    {
        $studyInfo = User::find($id)->studyInfo();

        if (count($studyInfo) < 1) {
            return response()->json([
                'status' => 'failed',
                'msg' => 'Không có thông tin!!!'
            ]);
        }

        return response()->json([
            'status' => 'success',
            'msg' => 'Lấy thành công các khóa học của học viên.',
            'data' => $studyInfo
        ]);
    }

    /**
     * @OA\Get(
     *      path="/api/courses/{id}/teacher",
     *      operationId="getCourseOfTeacher",
     *      tags={"Courses"},
     *      summary="Get course of Teacheer",
     *      description="Returns Courses of Teacheer",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *      @OA\Parameter(
     *            name="id",
     *            description="teacher_id",
     *            example="1",
     *            required=true,
     *            in="path",
     *            @OA\Schema(
     *                type="integer"
     *            )
     *        ),
     *       @OA\Response(response=400, description="Bad request"),
     *       security={
     *           {"api_key_security_example": {}}
     *       }
     *     )
     */
    public function courseOfTeacher($id)
    {
        return response()->json([
            'status' => 'ahiihii',
            'msg' => 'Chưa cóa',
        ]);
    }
}
