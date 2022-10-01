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
     *            name="phone",
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
        $request->validate([
            'phone' => 'required|min:10|numeric',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('phone', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user_temp =  Auth::user();
        $user = (object)[];
        $user->id = $user_temp->id;
        $user->name = $user_temp->name;
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
        return response()->json(auth()->user());
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
