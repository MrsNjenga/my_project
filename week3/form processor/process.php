<?php

if(isset($_POST['submit'])){

    $fullname = htmlspecialchars($_POST['fullname']);
    $email = htmlspecialchars($_POST['email']);

    echo "

    <!DOCTYPE html>

    <html>

    <head>

        <title>Success</title>

        <style>

            body{
                margin:0;
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
                background:#020617;
                font-family:Arial;
                overflow:hidden;
            }

            .success-card{
                background:rgba(255,255,255,0.08);
                padding:50px;
                border-radius:30px;
                text-align:center;
                color:white;
                backdrop-filter:blur(15px);
                border:1px solid rgba(255,255,255,0.1);

                box-shadow:
                    0 0 20px rgba(0,247,255,0.3),
                    0 0 50px rgba(0,102,255,0.2);

                animation:pop 0.8s ease;
            }

            @keyframes pop{

                from{
                    transform:scale(0.7);
                    opacity:0;
                }

                to{
                    transform:scale(1);
                    opacity:1;
                }

            }

            h1{
                color:#00f7ff;
                font-size:40px;
                margin-bottom:20px;
            }

            p{
                font-size:20px;
                margin:12px 0;
            }

        </style>

    </head>

    <body>

        <div class='success-card'>

            <h1>SUCCESS</h1>

            <p><strong>Name:</strong> $fullname</p>

            <p><strong>Email:</strong> $email</p>

            <p>Your futuristic form was processed successfully.</p>

        </div>

    </body>

    </html>

    ";

}

?>