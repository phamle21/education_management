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
