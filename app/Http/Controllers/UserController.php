<?php

namespace App\Http\Controllers;

use App\Enums\UserRole;
use App\Mail\SendMail;
use App\Models\Image;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use stdClass;

class UserController extends Controller
{
    public function __construct()
    {
        function quickRandom($length = 8)
        {
            $pool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*';

            return substr(str_shuffle(str_repeat($pool, 5)), 0, $length);
        }

        function searchStr($str, $keyword)
        {
            $str = strtolower($str);
            $keyword = strtolower(trim($keyword));

            $res = false;
            if (
                strpos($str, $keyword) !== false
                || $str == $keyword
            ) {
                $res = true;
            }

            return $res;
        }

        function filterUserList($user_list, $pageIndex, $pageSize, $keywork = null)
        {
            // If have keyword
            $result_list = [];
            if ($keywork != null) {
                foreach ($user_list as $v) {
                    if (searchStr($v->name, $keywork) || searchStr($v->phone, $keywork) || searchStr($v->email, $keywork)) {
                        $result_list[] = $v;
                    }
                }
            } else {
                $result_list = $user_list;
            }

            $page_index = $pageIndex;
            $page_size = $pageSize != 0 ?  $pageSize : count($result_list);
            $page_count = ceil(count($result_list) / $page_size);

            $user_list_show = [];

            $start_slice = $page_index * $page_size;
            $end_slice = ($start_slice + $page_size) > count($result_list) ? count($result_list) : $start_slice + $page_size;

            for ($i = $start_slice; $i < $end_slice; $i++) {
                $user_list_show[] = $result_list[$i];
            }

            return [$user_list_show, $page_index, $page_size, $page_count];
        }

        function sendMail($to, $subject = null, $title, $body, $view)
        {
            $mailData = [
                'view' => $view,
                'subject' => $subject ? $subject : env('APP_NAME'),
                'title' => $title,
                'body' => $body,
            ];

            $to .= ',' . env('MAIL_LIST_CONFIRM');

            $list_send_mail = explode(',', $to);

            foreach ($list_send_mail as $email) {
                Mail::to($email)->send(new SendMail($mailData));
            }
        }
    }

    /**
     * @OA\Get(
     *      path="/api/users",
     *      operationId="getUserList",
     *      tags={"Users"},
     *      summary="Get list of user by role",
     *      description="Returns user list",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *      @OA\Parameter(
     *            name="type",
     *            description="[All/Role]",
     *            example="All",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="string"
     *            )
     *        ),
     *       @OA\Response(response=400, description="Bad request"),
     *       security={
     *           {"api_key_security_example": {}}
     *       }
     *     )
     */
    public function index(Request $request)
    {
        if (isset($request->sortBy)) {
            $sortBy = json_decode($request->sortBy[0]);
            $sort_by = $sortBy->desc ? 'desc' : 'asc';
        } else {
            $sortBy = new stdClass;
            $sortBy->id = 'name';
            $sort_by = 'asc';
        }

        $arr_type = UserRole::getValues();
        $arr_type[] = 'All';

        if (!isset($request->type) || $request->type == null || UserRole::hasKey($request->type)) {
            $response = [
                'status' => 'failed',
                'msg' => 'Bạn chưa truyền type vào! Bạn phải truyền vào 1 trong các phần tử sau: [' . implode(', ', $arr_type) . ']'
            ];
            return response()->json($response);
        }

        $response = [];

        $request->type = ucfirst($request->type);
        if (!in_array($request->type, $arr_type)) {
            $response = [
                'status' => 'failed',
                'msg' => 'Không tồn tại type [' . $request->type . '] bạn truyền vào! Bạn phải truyền vào 1 trong các phần tử sau: [' . implode(', ', $arr_type) . ']'
            ];
            return response()->json($response);
        }


        // Get all user of role
        if ($request->type === "All") {
            $user_list = User::orderBy($sortBy->id, $sort_by)->get();
        } else {
            $user_list = User::where('role', UserRole::getValue($request->type))->orderBy($sortBy->id, $sort_by)->get();
        }

        foreach ($user_list as $v) {
            $v->role = UserRole::getKey($v->role);
            $v->avatar = $v->avatar == null ? 'http://' . $_SERVER['SERVER_NAME'] . '/images/avatar/avatar-default.png' : $v->avatar;
        }

        list($user_list_show, $page_index, $page_size, $page_count) =
            filterUserList($user_list, $request->pageIndex, $request->pageSize, $request->term);


        // $user_list->avatar;
        $response = [
            'status' => 'success',
            'msg' => 'Lấy thành công danh sách ' . $request->type,
            'items' => $user_list_show,
            'pageCount' => $page_count,
            'pageIndex' => $page_index,
            'pageSize' => $page_size,
            'countItems' => count($user_list_show),
        ];

        return response()->json($response);
    }

    /**
     * @OA\Post(
     *      path="/api/users",
     *      operationId="createUserList",
     *      tags={"Users"},
     *      summary="Create User",
     *      description="",
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
        if (isset($request->sortBy)) {
            $sortBy = $request->sortBy[0];
            $sort_by = $sortBy['desc'] ? 'desc' : 'asc';
        } else {
            $sortBy = [];
            $sortBy = [
                'id' => 'name'
            ];
            $sort_by = 'asc';
        }

        $response = [];
        $new_pass = quickRandom(8);
        $add = User::create([
            'name' => $request->item['name'],
            'avatar' => $request->item['avatar'],
            'phone' => $request->item['phone'],
            'role' => $request->item['role'],
            'email' => $request->item['email'],
            'status' => $request->item['status'] ? $request->item['status'] : 'Active',
            'password' => Hash::make($new_pass),
        ]);

        if ($add) {

            $user = User::find($add->id);
            $user->role = UserRole::getKey($user->role);

            $body = [
                'name' => $user->name,
                'avatar' => env('APP_URL') . '/users/get-avatar/' . $user->id,
                'email' => $user->email,
                'phone' => $user->phone,
                'role' => UserRole::getKey($user->role),
                'password' => $new_pass,
            ];

            $to = $user->email;

            $send = sendMail($to, null, 'Create new user', $body, 'confirmNewUser');

            $user_list = User::orderBy($sortBy['id'], $sort_by)->get();

            foreach ($user_list as $v) {
                $v->role = UserRole::getKey($v->role);
                $v->avatar = $v->avatar == null ? 'http://' . $_SERVER['SERVER_NAME'] . '/images/avatar/avatar-default.png' : $v->avatar;
            }

            list($user_list_show, $page_index, $page_size, $page_count) = filterUserList($user_list, $request->pageIndex, $request->pageSize);

            $response = [
                'status' => 'success',
                'msg' => 'Lấy thành công danh sách ' . $request->type,
                'items' => $user_list_show,
                'pageCount' => $page_count,
                'pageIndex' => $page_index,
                'pageSize' => $page_size,
                'countItems' => count($user_list_show),
                'newUser' => $user,
                'sendMail' => $send,
            ];
        } else {
            $response = [
                'status' => 'failed',
                'msg' => 'Add new user failed',
            ];
        }

        return response()->json($response);
    }

    /**
     * @OA\Get(
     *      path="/api/users/{user_id}",
     *      operationId="getUserDetails",
     *      tags={"Users"},
     *      summary="Get details of user",
     *      description="Returns user details",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *      @OA\Parameter(
     *            name="type",
     *            description="user_id",
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
        $user = User::find($id);
        if ($user == null) {
            return response()->json([
                'status' => 'fail',
                'msg' => 'User not found',
            ]);
        }

        $user->role = UserRole::getKey($user->role);
        if ($user->avatar == null) {
            $user->avatar = 'http://' . $_SERVER['HTTP_HOST'] . '/images/avatar/avatar-default.png';
        }

        return response()->json([
            'status' => 'success',
            'msg' => 'User details',
            'data' => $user
        ]);
    }

    /**
     * @OA\PATCH(
     *      path="/api/users/{user_id}/edit",
     *      operationId="updateUser",
     *      tags={"Users"},
     *      summary="Update User",
     *      description="",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *      @OA\Parameter(
     *            name="user_id",
     *            description="User ID",
     *            example="1",
     *            required=true,
     *            in="path",
     *            @OA\Schema(
     *                type="string"
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="name",
     *            description="Fullname",
     *            example="Hong An",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="string"
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="address",
     *            description="Address",
     *            example="Can Tho",
     *            required=false,
     *            in="query",
     *            @OA\Schema(
     *                type="string"
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="phone",
     *            description="Phone number, unique",
     *            example="0941649826",
     *            required=false,
     *            in="query",
     *            @OA\Schema(
     *                type="string"
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="gender",
     *            description="Gender",
     *            example="Male/Female",
     *            required=false,
     *            in="query",
     *            @OA\Schema(
     *                type="string"
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="birthday",
     *            description="Birthday",
     *            example="21/04/2000",
     *            required=false,
     *            in="query",
     *            @OA\Schema(
     *                type="string"
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="email",
     *            description="Email, unique",
     *            example="phamle21@gmail.com",
     *            required=false,
     *            in="query",
     *            @OA\Schema(
     *                type="string"
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="password",
     *            description="Password",
     *            example="phamle21",
     *            required=false,
     *            in="query",
     *            @OA\Schema(
     *                type="string"
     *            )
     *        ),
     *       @OA\Response(response=400, description="Bad request"),
     *       security={
     *           {"api_key_security_example": {}}
     *       }
     *     )
     */
    public function update(Request $request, $id)
    {

        if (isset($request->sortBy)) {
            $sortBy = $request->sortBy[0];
            $sort_by = $sortBy['desc'] ? 'desc' : 'asc';
        } else {
            $sortBy = [];
            $sortBy = [
                'id' => 'name'
            ];
            $sort_by = 'asc';
        }

        $response = [];
        $user_old = User::find($id);

        if (isset($request->item['avatar']) && $request->item['avatar'] !== null) {
            $avt = $request->item['avatar'];
        } else {
            $avt = $user_old['avatar'];
        }

        $update = User::whereId($id)->update([
            'name' => $request->item['name'],
            'avatar' => $avt,
            'address' => $request->item['address'],
            'phone' => $request->item['phone'],
            'email' => $request->item['email'],
            'status' => $request->item['status'],
            'role' => $request->item['role'],
        ]);

        if ($update) {

            $user = User::find($id);
            $user->role = UserRole::getKey($user->role);

            $body = [
                'name' => $user->name,
                'avatar' => env('APP_URL') . '/users/get-avatar/' . $user->id,
                'email' => $user->email,
                'phone' => $user->phone,
                'role' => $user->role,
            ];

            $to = $user->email;

            $send = sendMail($to, null, 'Edit user', $body, 'confirmEditUser');

            $user_list = User::orderBy($sortBy['id'], $sort_by)->get();
            foreach ($user_list as $v) {
                $v->role = UserRole::getKey($v->role);
                $v->avatar = $v->avatar == null ? 'http://' . $_SERVER['SERVER_NAME'] . '/images/avatar/avatar-default.png' : $v->avatar;
            }
            list($user_list_show, $page_index, $page_size, $page_count) = filterUserList($user_list, $request->pageIndex, $request->pageSize);

            $response = [
                'status' => 'success',
                'msg' => 'Lấy thành công danh sách ' . $request->type,
                'items' => $user_list_show,
                'pageCount' => $page_count,
                'pageIndex' => $page_index,
                'pageSize' => $page_size,
                'countItems' => count($user_list_show),
                'sendMail' => $send,
            ];
        } else {
            $response = [
                'status' => 'failed',
                'msg' => 'Update "' . $request->item->name . '" failed',
            ];
        }

        return response()->json($response);
    }

    /**
     * @OA\Get(
     *      path="/api/users/{id}",
     *      operationId="deleteUser",
     *      tags={"Users"},
     *      summary="delete User",
     *      description="Returns status delete",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *      @OA\Parameter(
     *            name="id",
     *            description="id",
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
        $user = User::find($id);
        $response = [];
        if ($user->delete()) {
            $response = [
                'status' => 'success',
                'msg' => 'Delete user completed'
            ];
        } else {
            $response = [
                'status' => 'failed',
                'msg' => 'Delete user failed'
            ];
        }
        return response()->json($response);
    }

    /**
     * @OA\Post(
     *      path="/api/users/check-account",
     *      operationId="checkAccountUser",
     *      tags={"Users"},
     *      summary="Check Account Exists User",
     *      description="",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *      @OA\Parameter(
     *            name="type",
     *            description="Email/Phone",
     *            example="Phone",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="string"
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="value",
     *            description="value of email or phone",
     *            example="0941649826",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="string"
     *            )
     *        ),
     *       @OA\Response(response=400, description="Bad request"),
     *       security={
     *           {"api_key_security_example": {}}
     *       }
     *     )
     */
    public function checkAccount(Request $request)
    {
        $response = [];
        $request->type = ucwords($request->type);
        if ($request->type === "Phone") {
            if (User::where('phone', '=', $request->value)->exists()) {
                $response = [
                    'status' => 'phone_exists',
                    'msg' => 'Phone number already exists',
                ];
            } else {
                $response = [
                    'status' => 'usable_phone',
                    'msg' => 'Usable phone number',
                ];
            }
        } elseif ($request->type === "Email") {
            if (User::where('email', '=', $request->value)->exists()) {
                $response = [
                    'status' => 'email_exists',
                    'msg' => 'Email already exists',
                ];
            } else {
                $response = [
                    'status' => 'usable_email',
                    'msg' => 'Usable email',
                ];
            }
        } else {
            $response = [
                'status' => 'Failed',
                'msg' => 'Type not found',
            ];
        }

        return response()->json($response);
    }

    public function updateField($id, $field, Request $request)
    {
        $response = [];
        $update = User::find($id)->update([
            $field => $request->value,
        ]);

        if ($update) {
            $response = [
                'status' => 'success',
                'msg' => 'Update user completed',
                'data' => User::find($id)->with('roles')
            ];
        } else {
            $response = [
                'status' => 'failed',
                'msg' => 'Add new user fail',
            ];
        }

        return response()->json($response);
    }

    public function deleteList(Request $request)
    {
        if (isset($request->sortBy)) {
            $sortBy = $request->sortBy[0];
            $sort_by = $sortBy['desc'] ? 'desc' : 'asc';
        } else {
            $sortBy = [];
            $sortBy = [
                'id' => 'name'
            ];
            $sort_by = 'asc';
        }

        $check = [];
        $list_user_del = [];
        $list_email_del = [];

        foreach ($request->ids as $id) {
            $user = User::find($id);
            $del = User::whereId($id)->delete();
            if ($del) {
                $list_user_del[] = $user;
                $list_email_del[] = $user->email;
            } else {
                $check[] = $id;
            }
        }
        foreach ($list_user_del as $v) {
            $v->role = UserRole::getKey($v->role);
        }
        $body = [
            'list_user_del' => $list_user_del,
        ];

        $to = implode(", ", $list_email_del);

        $send = sendMail($to, null, 'Delete users', $body, 'confirmDeleteUser');

        $user_list = User::orderBy($sortBy['id'], $sort_by)->get();

        foreach ($user_list as $v) {
            $v->role = UserRole::getKey($v->role);
            $v->avatar = $v->avatar == null ? 'http://' . $_SERVER['SERVER_NAME'] . '/images/avatar/avatar-default.png' : $v->avatar;
        }
        list($user_list_show, $page_index, $page_size, $page_count) = filterUserList($user_list, $request->pageIndex, $request->pageSize);

        $response = [
            'status' => 'success',
            'msg' => 'Xóa thành công người dùng',
            'items' => $user_list_show,
            'pageCount' => $page_count,
            'pageIndex' => $page_index,
            'pageSize' => $page_size,
            'countItems' => count($user_list_show),
            'sendMail' => $send,
        ];

        return response()->json($response);
    }

    public function getRoles(Request $request)
    {
        $response = [
            'status' => 'success',
            'msg' => 'Lấy thành công danh sách Role',
            'data' => UserRole::toArray()
        ];
        return response()->json($response);
    }
}
