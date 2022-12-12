<?php

use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CourseContentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\StudyController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ResetPasswordController;
use App\Models\Study;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::post('me', 'me');
});

/** Courses */
Route::resource('courses', CourseController::class);
Route::get('/courses/{id}/content', [CourseController::class, 'courseContent']);
Route::get('/courses/{id}/student', [CourseController::class, 'courseOfStudent']);
Route::get('/courses/{id}/teacher', [CourseController::class, 'courseOfTeacher']);

/** Content Course */
Route::post('/content_course', [CourseContentController::class, 'store']);
Route::patch('/content_course', [CourseContentController::class, 'update']);
Route::delete('/content_course', [CourseContentController::class, 'destroy']);

/** User */
Route::resource('users', UserController::class);
Route::post('/users/check-account', [UserController::class, 'checkAccount']);
Route::post('/users/update/{id}/{field}', [UserController::class, 'updateField']);
Route::post('/users/delete-list', [UserController::class, 'deleteList']);
Route::post('/users/get-roles', [UserController::class, 'getRoles']);
Route::post('/users/update-info/{id}', [UserController::class, 'updateUserInfo']);
Route::post('/users/change-avatar/{id}', [UserController::class, 'changeAvatar']);
Route::post('/users/change-password/{id}', [UserController::class, 'changePassword']);

/** Topics */
Route::resource('topics', TopicController::class);

/** Teacher */
Route::get('/teacher/{id}/details', [UserController::class, 'teacherDetails']);

/** Student */
Route::get('/student/{id}/details', [UserController::class, 'studentDetails']);

/** Ckeditor */
Route::post('upload-image-ckeditor', [CourseContentController::class, 'storeImage'])->name('ckeditor.image.upload');

/** Schedule */
Route::resource('schedules', ScheduleController::class);
Route::post('/schedules/import', [ScheduleController::class, 'import']);
Route::post('/schedules/course', [ScheduleController::class, 'scheduleOfCourse']);
Route::post('/schedules/get-schedule-by-user', [ScheduleController::class, 'getScheduleByUser']);

/** Study */
Route::get('/studies', [StudyController::class, 'index']);
Route::post('/studies', [StudyController::class, 'store']);
Route::post('/studies/update', [StudyController::class, 'update']);
Route::delete('/studies', [StudyController::class, 'destroy']);

/** Attendance */
Route::get('/attendances/schedule', [AttendanceController::class, 'show']);
Route::post('/attendances', [AttendanceController::class, 'attendances']);

/** Dashboard */
Route::get('/dashboard', [DashboardController::class, 'index']);

// Contact
Route::post('/contact', [ContactController::class, 'sendContact'])->name('contact.send');

// Reset Password
Route::post('forget-password', [ResetPasswordController::class, 'submitForgetPasswordForm'])->name('forget.password.post');
Route::post('reset-password', [ResetPasswordController::class, 'submitResetPasswordForm'])->name('reset.password.post');

/** Certificate */
Route::get('/certificate', function (Request $request) {
    $name = $request->name ? $request->name : "Undefine";
    $courseName = $request->courseName ? $request->courseName : "Undefine";
    return view('certificate', compact('name', 'courseName'));
});
