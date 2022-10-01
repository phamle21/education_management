<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use App\Models\UserRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
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
        $arr_type = array_merge(array_column(Role::all('name')->toArray(), 'name'), ["All"]);

        if (!isset($request->type) || $request->type == null) {
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
            $list = User::all();
        } else {
            $list = Role::where('name', $request->type)->first()->users;
        }

        $response = [
            'status' => 'success',
            'msg' => 'Lấy thành công danh sách ' . $request->type,
            'data' => $list
        ];

        return response()->json($response);
    }

    /**
     * @OA\Post(
     *      path="/api/users",
     *      operationId="createUser",
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
     *       @OA\Response(response=400, description="Bad request"),
     *       security={
     *           {"api_key_security_example": {}}
     *       }
     *     )
     */
    public function store(Request $request)
    {
        $response = [];

        $email_name = strstr($request->email, '@', true);
        $phone_tail = substr($request->phone, -4);

        $add = User::create([
            'name' => $request->name,
            'address' => $request->address,
            'phone' => $request->phone,
            'gender' => $request->gender,
            'birthday' => $request->birthday,
            'email' => $request->email,
            'status' => "Active",
            'password' => Hash::make($email_name . '_' . $phone_tail)
        ]);

        if ($add) {
            UserRole::create([
                'user_id' => $add->id,
                'role_id' => $request->role_id
            ]);

            $response = [
                'status' => 'failed',
                'msg' => 'Add new user completed',
                'data' => User::find($add->id)->with('roles')
            ];
        } else {
            $response = [
                'status' => 'failed',
                'msg' => 'Add new user fail',
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
        $update = User::find($request->user_id)->update([
            'name' => $request->name,
            'address' => $request->address,
            'phone' => $request->phone,
            'gender' => $request->gender,
            'birthday' => $request->birthday,
            'email' => $request->email,
            'status' => "Active",
            'password' => Hash::make($request->password)
        ]);

        if ($update) {
            $response = [
                'status' => 'failed',
                'msg' => 'Update user completed',
                'data' => User::find($request->user_id)->with('roles')
            ];
        } else {
            $response = [
                'status' => 'failed',
                'msg' => 'Add new user fail',
            ];
        }

        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
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
}
