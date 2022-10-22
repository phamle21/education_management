<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * @OA\Post(
     *      path="/api/login",
     *      operationId="login",
     *      tags={"Auth"},
     *      summary="Login",
     *      description="Login",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *      @OA\Parameter(
     *            name="email",
     *            description="Phone Number",
     *            example="0941649826",
     *            required=true,
     *            in="query",
     *            @OA\Schema(
     *                type="string"
     *            )
     *        ),
     *      @OA\Parameter(
     *            name="password",
     *            description="Password",
     *            example="admin",
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

    public function login(Request $request)
    {
        $permissionLoginAdmin = ["Admin", "Team Manage"];
        if (isset($request->email)) {
            $request->validate([
                'email' => 'required|string|email',
                'password' => 'required|string',
            ]);
            $credentials = $request->only('email', 'password');
        } else {
            $request->validate([
                'phone' => 'required|min:10|numeric',
                'password' => 'required|string',
            ]);
            $credentials = $request->only('phone', 'password');
        }
        $credentials['status'] = "Active";
        $remember = $request->remember ? true : false;
        $token = Auth::attempt($credentials, $remember);

        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized! Please check Email/Phone or Password. Or your account status isn\'t Active',
            ]);
        }

        $check = false;

        foreach(Auth::user()->roles as $v){
            if(in_array($v->name,$permissionLoginAdmin)){
                $check = true;
            }
        }

        if (!$check) {
            return response()->json([
                'status' => 'error',
                'message' => 'Your account is not allowed to access the login Admin page',
            ]);
        }

        $user_temp =  Auth::user();
        $user = (object)[];
        $user->id = $user_temp->id;
        $user->name = $user_temp->name;
        $user->avatar = User::find($user_temp->id)->avatar()->path;
        $user->email = $user_temp->email;
        $user->phone = $user_temp->phone;
        $user->status = $user_temp->status;
        $user->roles = $user_temp->roles;
        return response()->json([
            'status' => 'success',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = Auth::login($user);
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function logout()
    {
        Auth::logout();

        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function me()
    {
        $user_temp =  Auth::user();
        $user = (object)[];
        $user->id = $user_temp->id;
        $user->name = $user_temp->name;
        $user->avatar = User::find($user_temp->id)->avatar()->path;
        $user->email = $user_temp->email;
        $user->phone = $user_temp->phone;
        $user->status = $user_temp->status;
        $user->roles = $user_temp->roles;
        return response()->json($user);
    }

    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }
}
