<?php

namespace App\Http\Controllers;

use App\Enums\UserRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Storage;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register', 'me']]);
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
     *      @OA\RequestBody(
     *           @OA\MediaType(
     *               mediaType="application/json",
     *               @OA\Schema(
     *                   @OA\Property(
     *                       property="email",
     *                       type="string"
     *                   ),
     *                   @OA\Property(
     *                       property="password",
     *                       type="string"
     *                   ),
     *                   example={
     *                        "email": "phamle21@gmail.com",
     *                        "password": "admin",
     *                    }
     *               )
     *           )
     *       ),
     *       @OA\Response(response=400, description="Bad request"),
     *       security={
     *           {"api_key_security_example": {}}
     *       }
     *     )
     */

    public function login(Request $request)
    {
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

        $token = Auth::attempt($credentials);

        if (!$token) {
            return response()->json([
                'status' => 'error',
                'msg' => 'Tài khoản mật khẩu không chính xác',
            ]);
        }

        if (UserRole::Teacher != Auth::user()->role && UserRole::Admin != Auth::user()->role) {
            return response()->json([
                'status' => 'error',
                'msg' => 'Bạn không có quyền đăng nhập ở đây!',
            ]);
        }

        $user = User::find(Auth::user()->id);

        $user->avatar = url(Storage::url($user->avatar));

        $user->courses = $user->courseOfTeacher();

        $user->otherInformation = $user->getOtherInfor();

        return response()->json([
            'status' => 'success',
            'msg' => 'Đăng nhập thành công',
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
        $user = User::find(Auth::user()->id);

        $user->avatar = url(Storage::url($user->avatar));

        $user->courses = $user->courseOfTeacher();

        $user->otherInformation = $user->getOtherInfor();

        return response()->json($user);
    }

    public function refresh()
    {
        $user = User::find(Auth::user()->id);

        $user->avatar = url(Storage::url($user->avatar));

        $user->courses = $user->courseOfTeacher();

        $user->otherInformation = $user->getOtherInfor();

        $token = Auth::refresh();

        return response()->json([
            'status' => 'success',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }
}
