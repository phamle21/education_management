<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\SendMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{

    protected function sendMail($subject, $title, $body, $view)
    {
        $mailData = [
            'view' => $view,
            'subject' => $subject,
            'title' => $title,
            'body' => $body,
        ];

        $to = env('MAIL_LIST_CONFIRM');

        $list_send_mail = explode(',', $to);

        foreach ($list_send_mail as $email) {
            $check = Mail::to($email)->send(new SendMail($mailData));
        }

        return $check;
    }

    /**
     * @OA\POST(
     *      path="/api/contact",
     *      operationId="sendContact",
     *      tags={"Contact"},
     *      summary="sendmail contact",
     *      description="aaaaaaaaaaaaaa",
     *      @OA\RequestBody(
     *           @OA\MediaType(
     *               mediaType="application/json",
     *               @OA\Schema(
     *                   @OA\Property(
     *                       property="send_name",
     *                       type="string"
     *                   ),
     *                   @OA\Property(
     *                       property="send_email",
     *                       type="string"
     *                   ),
     *                   @OA\Property(
     *                       property="send_phone",
     *                       type="string",
     *                   ),
     *                   @OA\Property(
     *                       property="send_subject",
     *                       type="string",
     *                   ),
     *                   @OA\Property(
     *                       property="send_message",
     *                       type="string"
     *                   ),
     *                   example={
     *                        "send_name": "Hong An",
     *                        "send_email": "hongan@gmail.com",
     *                        "send_phone": "0966425761",
     *                        "send_subject": "Tieu de ne",
     *                        "send_message": "noi dung ne"
     *                    }
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
    public function sendContact(Request $request)
    {
        $send_name = $request->send_name;
        $send_email = $request->send_email;
        $send_phone = $request->send_phone;
        $send_subject = $request->send_subject;
        $send_message = $request->send_message;

        $body = [
            'send_name' => $send_name,
            'send_email' => $send_email,
            'send_phone' => $send_phone,
            'send_subject' => $send_subject,
            'send_message' => $send_message,
        ];

        $send = $this->sendMail($send_subject, 'Contact', $body, 'sendContact');

        if ($send) {
            return response()->json([
                'status' => 'success',
                'msg' => 'Sendmail thành công',
                'mail' => view('emails.sendContact')
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'msg' => 'Sendmail thất bại',
            ]);
        }
    }
}
