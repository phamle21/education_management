<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Support\Str;
use app\Models\User;
use Illuminate\Http\Request;
use App\Models\PasswordReset;
use App\Notifications\ResetPasswordRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class ResetPasswordController extends Controller
{
    /**
     * @OA\POST(
     *      path="/api/forget-password",
     *      operationId="forgetPassword",
     *      tags={"ForgetPassword"},
     *      summary="sendmail contact",
     *      description="Đừng có test ở đây lỗi đó",
     *      @OA\RequestBody(
     *           @OA\MediaType(
     *               mediaType="application/json",
     *               @OA\Schema(
     *                   @OA\Property(
     *                       property="email",
     *                       type="string"
     *                   ),
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
    public function submitForgetPasswordForm(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users',
        ]);

        $token = Str::random(64);
        $code_repass = Str::random(6);

        DB::table('password_resets')->insert([
            'email' => $request->email,
            'token' => $token,
            'code' => $code_repass,
            'created_at' => Carbon::now()
        ]);

        Mail::send('emails.forgetPassword', ['code_repass' => $code_repass], function ($message) use ($request) {
            $message->to($request->email);
            $message->subject('Reset Password');
        });

        return response()->json([
            'status' => 'success',
            'msg' => "Đã gửi mail đặt lại mặt khẩu tới email <b>$request->email</b>",
            'token' => $token,
        ]);
    }

    /**
     * @OA\POST(
     *      path="/api/reset-password",
     *      operationId="resetPassword",
     *      tags={"ForgetPassword"},
     *      summary="sendmail contact",
     *      description="Đừng có test ở đây lỗi đó",
     *      @OA\RequestBody(
     *           @OA\MediaType(
     *               mediaType="application/json",
     *               @OA\Schema(
     *                   @OA\Property(
     *                       property="email",
     *                       type="string"
     *                   ),
     *                   @OA\Property(
     *                       property="token",
     *                       type="string"
     *                   ),
     *                   @OA\Property(
     *                       property="code",
     *                       type="string",
     *                   ),
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
    public function submitResetPasswordForm(Request $request)
    {
        // $request->validate([
        //     'email' => 'required|email|exists:users',
        //     'password' => 'required|string|min:6|confirmed',
        //     'password_confirmation' => 'required'
        // ]);

        $updatePassword = DB::table('password_resets')
            ->where([
                'email' => $request->email,
                'token' => $request->token,
                'code' => $request->code,
            ])
            ->first();

        if (!$updatePassword) {
            return response()->json([
                'status' => 'error',
                'msg' => 'Sao token',
            ]);
        }

        $user = User::where('email', $request->email)
            ->update(['password' => Hash::make($request->password)]);

        DB::table('password_resets')->where(['email' => $request->email])->delete();

        return response()->json([
            'status' => 'success',
            'msg' => "Đã đặt lại mật khẩu mới",
        ]);
    }
}
