<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Certificate</title>
    <link rel="stylesheet/less" type="text/css" href="{{ asset('/assets/less/certificate.less') }}" />
    <script src="https://cdn.jsdelivr.net/npm/less"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body>
    <div class="container">
        <div class="row justify-content-center">
            <div
                style="
            background: url('https://drive.google.com/uc?export=view&id=1zvQTAyP2mgy-hiFPx0gCSiEKgQkUlK3F');
            background-repeat: no-repeat;
            background-size: 100% auto;
            height: 100vh;
            ">
                <div class="row pm-certificate-body justify-content-center">

                    <div class="row justify-content-center mt-3">
                        <h1 class="w-auto pm-name-text bold"
                            style="font-size: 60px!important;
                            margin-top: 27rem;">
                            {{ $name }}</h1>
                    </div>

                    <div class="row flex-column align-items-center">
                        <span class="w-auto block bold sans fw-bold"
                            style="font-size: 24px!important;
                                margin-top: 4rem;">{{ $courseName }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
<?php

$html = <<<EOD
<link rel="stylesheet/less" type="text/css" href="{{ asset('/assets/less/certificate.less') }}" />
    <script src="https://cdn.jsdelivr.net/npm/less"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<div class="container">
        <div class="row justify-content-center">
            <div
                style="
            background: url('https://drive.google.com/uc?export=view&id=1zvQTAyP2mgy-hiFPx0gCSiEKgQkUlK3F');
            background-repeat: no-repeat;
            background-size: 100% auto;
            height: 100vh;
            ">
                <div class="row pm-certificate-body justify-content-center">

                    <div class="row justify-content-center mt-3">
                        <h1 class="w-auto pm-name-text bold"
                            style="font-size: 60px!important;
                            margin-top: 27rem;">
                            {{ $name }}</h1>
                    </div>

                    <div class="row flex-column align-items-center">
                        <span class="w-auto block bold sans fw-bold"
                            style="font-size: 24px!important;
                                margin-top: 4rem;">{{ $courseName }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
EOD;

$css = <<<EOD
.box {
  border: 4px solid #03B875;
  padding: 20px;
  font-family: 'Roboto';
}
EOD;

$google_fonts = 'Roboto';

$data = ['html' => $html, 'css' => $css, 'google_fonts' => $google_fonts];

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://hcti.io/v1/image');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));

curl_setopt($ch, CURLOPT_POST, 1);
// Retrieve your user_id and api_key from https://htmlcsstoimage.com/dashboard
curl_setopt($ch, CURLOPT_USERPWD, '24d7783d-0f47-4c25-b244-e823fca35c16' . ':' . '7d724321-4d6e-4515-a9b8-bdc1c122096a');

$headers = [];
$headers[] = 'Content-Type: application/x-www-form-urlencoded';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close($ch);
$res = json_decode($result, true);
echo $res['url'];
// https://hcti.io/v1/image/202dc04d-5efc-482e-8f92-bb51612c84cf
?>
