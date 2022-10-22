<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Role;
use App\Models\User;
use App\Models\UserRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth:api');
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
     *            description="[All/ Admin/ Teacher/ Student]",
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
        $request->type = ucfirst($request->type);

        // Get all user of role
        if ($request->type === "All") {
            $user_list = User::all();
        } else {
            $user_list = User::where('role', $request->type)->get();
        }

        // Check
        if (!$user_list) {
            $response = [
                'status' => 'failed',
                'msg' => 'Lấy danh sách ' . $request->type . 'thất bại',
            ];

            return response()->json($response);
        }

        foreach ($user_list as $v) {
            $v->avatar = $v->avatar()->path;
        }

        // $user_list->avatar;
        $response = [
            'status' => 'success',
            'msg' => 'Lấy thành công danh sách ' . $request->type,
            'data' => $user_list
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
     *            name="role_id",
     *            description="Role",
     *            example="1",
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
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="string"
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="password",
     *            description="Password",
     *            example="phamle21",
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
    public function store(Request $request)
    {
        $response = [];
        $add = User::create([
            'name' => $request->name,
            'address' => $request->address,
            'phone' => $request->phone,
            'gender' => $request->gender,
            'birthday' => $request->birthday,
            'email' => $request->email,
            'status' => "Active",
            'password' => Hash::make($request->password)
        ]);

        if ($add) {

            Image::create([
                'type' => 'User',
                'type_name' => 'avatar',
                'name' => 'Avatar of ' . $add->name,
                'path' => '/images/avatar/avatar-default.png',
                'type_id' => $add->id,
            ]);

            $user = User::find($add->id);
            $user->roles;
            $user->avatar = $user->avatar();

            $response = [
                'status' => 'success',
                'msg' => 'Successfully added new user',
                'data' => $user
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

        $user->roles;
        $user->avatar = $user->avatar();

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
        $response = [];

        if (isset($request->password)) {
            $update = User::find($id)->update([
                'name' => $request->name,
                'address' => $request->address,
                'phone' => $request->phone,
                'gender' => $request->gender,
                'birthday' => $request->birthday,
                'email' => $request->email,
                'status' => $request->status,
                'password' => Hash::make($request->password)
            ]);
        } else {
            $update = User::find($id)->update([
                'name' => $request->name,
                'address' => $request->address,
                'phone' => $request->phone,
                'gender' => $request->gender,
                'birthday' => $request->birthday,
                'email' => $request->email,
                'status' => $request->status
            ]);
        }

        if ($update) {

            $user = User::find($id);
            $user->roles;
            $user->avatar = $user->avatar();

            $response = [
                'status' => 'success',
                'msg' => 'Update "' . $request->name . '" completed.',
                'data' => $user
            ];
        } else {
            $response = [
                'status' => 'failed',
                'msg' => 'Update "' . $request->name . '" failed',
            ];
        }

        return response()->json($response);
    }

    /**
     * @OA\Delete(
     *      path="/api/users/{id}",
     *      operationId="deleteUser",
     *      tags={"Users"},
     *      summary="Delete user",
     *      description="Returns status delete",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *      @OA\Parameter(
     *            name="id",
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
}
