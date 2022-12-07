<?php

namespace App\Http\Controllers\MVC;

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
     * @OA\Post(
     *      path="/api/contact",
     *      operationId="contact",
     *      tags={"Contact"},
     *      summary="contact admin with gmail",
     *      description="",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation"
     *       ),
     *         @OA\MediaType(
     *             mediaType="application/json, multipart/form-data",
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Property(
     *                     property="send_name",
     *                     type="string"
     *                 ),
     *                 @OA\Property(
     *                     property="send_email",
     *                     type="string"
     *                 ),
     *                 @OA\Property(
     *                     property="send_phone",
     *                     type="string",
     *                 ),
     *                 @OA\Property(
     *                     property="send_subject",
     *                     type="string",
     *                 ),
     *                 @OA\Property(
     *                     property="send_message",
     *                     type="string"
     *                 ),
     *                 example={
     *                      "send_name": "Ten Khoa Hoc",
     *                      "send_email": "[1,2,3,4]",
     *                      "send_phone": "mo ta",
     *                      "send_subject": "2022-09-17 21:21:21",
     *                      "send_message": "2022-12-17 21:21:21",
     *                  }
     *             )
     *
     *         )
     *     ),
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
            return redirect('/contact')->with('success', 'Gửi liên hệ thành công.');
        } else {
            return redirect('/contact')->with('error', 'Gửi liên hệ thất bại.');
        }
    }
}
