<div
    style="
            height: auto !important;
            max-width: 600px !important;
            font-family: Helvetica, Arial, sans-serif !important;
            margin-bottom: 40px;
            margin-left: auto;
            margin-right: auto;
          ">
    <div style="margin-bottom: 100px">
        <div
            style="
                border-top-left-radius: 30px;
                border-top-right-radius: 30px;
                background-image: linear-gradient(#efff00,#fefff4);
                display: flex;
                justify-content: center;
                color: blue;
                text-shadow: 2px 3px 4px #ffffff;
                font-size: 1.1rem;
                text-align: center;
        ">
            <h1></h1>
        </div>
        <table
            style="
                max-width: 600px;
                background-color: #fdffdefd;
                border: 2px;
                border-collapse: separate !important;
                border-bottom-left-radius: 30px;
                border-bottom-right-radius: 30px;
                border-spacing: 0;
                color: #4e4e4e;
                margin: 0;
                padding: 32px;
                padding-top: 1rem;
                font-size: 14px;
                font-weight: 400;
                line-height: 1.5;
                box-shadow: 0px 10px 30px rgba(239, 231, 143, 0.715) !important;
              ">
            <tbody>
                <tr>
                    <td>
                        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/318574608_837168304184556_5663151121796969510_n.png?stp=dst-png_p403x403&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=ioYt71nyvhgAX8K9ukN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTd1Tf9JicOOH9uhvNN9a27JHDw8pBDMgNG4KkZk595zw&oe=63B85C47"
                            alt="logo"
                            style="width: 200px; margin-bottom: 15px; clear: both; display: inline-block; margin-left: 31%;" />
                        <br />
                        <h6
                            style="width: 536px; display: inline-block; font-size: 20px; margin: 10px 0; font-weight: 500; text-align: center;">
                            <b>Quên mật khẩu</b>
                        </h6>
                        <div>
                            <p>
                                Mã đặt lại tải khoản của bạn là: {{ $code_repass }}
                            </p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <table style="margin-top: 30px; padding-bottom: 20px; margin-bottom: 40px; width: 600px">
            <tbody>
                <tr>
                    <td style="text-align: center; vertical-align: center">
                        <p
                            style="font-size: 10px; text-decoration: none; line-height: 1; color: #afafaf; margin-top: 0px">
                            Hãy ghé thăm website của chúng tôi để trải nghiệm nhiều hơn
                            <a href="{{ env('APP_URL') }}" target="_blank"
                                style="color: #2499e3; text-decoration: none">Quản lý các khóa học</a>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
