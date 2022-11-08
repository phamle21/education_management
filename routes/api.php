<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\TopicController;

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

/** User */
Route::resource('users', UserController::class);
Route::post('/users/check-account', [UserController::class, 'checkAccount']);
Route::get('/roles', [UserController::class, 'getRoles']);

/** Topics */
Route::resource('topics', TopicController::class);
