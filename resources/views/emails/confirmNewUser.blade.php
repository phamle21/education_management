<!DOCTYPE html>
<html>

<head>
    <title>Send Mail Confirm</title>
</head>

<body>
    <div class="container">
        <div class="header" style="width:100%;text-align:center">
            {{-- <img class="header-img" style="width:250px" src="https://www.ctu.edu.vn/images/upload/logomobile.png"
                alt=""> --}}
            <img class="header-img" style="width:250px" src="https://cms.groupeditors.com/img//8f9e2838-da40-4a25-aa39-66d8c7a5e4f5.jpg"
                alt="">
            <h3>{{ env('APP_NAME') }} </h3>
        </div>
        <div class="content" style="margin-top:20px">
            <div class="ground-info" style="margin-bottom:15px">
                <p style="font-size:15px">Hi,</p>
                <p style="font-size:15px">Create new user successfully</p>
            </div>

            <div class="team-info" style="margin-bottom:15px">Full Name: <b> {{ $mailData['body']['name'] }} </b></div>
            <div class="league-info" style="margin-bottom:15px">Email: <b> {{ $mailData['body']['email'] }} </b>
            </div>
            <div class="league-info" style="margin-bottom:15px">Phone: <b> {{ $mailData['body']['phone'] }} </b>
            </div>
            <div class="league-info" style="margin-bottom:15px">Role:
                <span
                    style="
                    margin-right:0.5rem;
                    border:1px solid rgb(61, 61, 228);
                    border-radius: 30px;
                    color: black;
                    padding: 0.2rem 0.4rem 0.2rem;
                    ">{{ {{ $user->role }} }}</span>
            </div>
            <div class="team-info" style="margin-bottom:15px">Password: <b> {{ $mailData['body']['password'] }} </b>
            </div>
            <br>
            <div class="ground-info" style="margin-bottom:15px;margin-top: 15px;">
                <p style="font-size:13px">Thanks you.</p>
            </div>
        </div>
    </div>

</body>

</html>
