<?php

if (isset($_POST["submit"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["contact-message"];
    
    $headers = "From: ".$email;
    $txt = "From: ".$name.".\n\n".$message.".\n\n".$phone.".\n\n".$email; 
    
    mail("Maria@sevittiinvestigations.ca", "Lead from Website", $txt, $headers)
    or die('
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>siagency</title>
            <link rel="icon" type="image/x-icon" href="./assets/images/Favicon.ico">
            <link rel="stylesheet" href="./assets/style.css" />
        </head>
        <body id="body">
            <section class="returntohomepage" id="intake-form">
            <img src="./assets/images/logo-sevitti-intake-form.webp">
            <h2>Sorry! There seems to be a problem with our server and we were unable to receive your information.</h2>
            <p>Go back to the <a href="./index.html">homepage</a>.</p>
            </section>
        </body>
    </html>
    ');
    
    echo'
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>siagency</title>
            <link rel="icon" type="image/x-icon" href="./assets/images/Favicon.ico">
            <link rel="stylesheet" href="./assets/style.css" />
        </head>
        <body id="body">
            <section class="returntohomepage" id="intake-form">
            <img src="./assets/images/logo-sevitti-intake-form.webp">
            <h2>Thank you for contacting us.  We will get back to you as soon as possible!</h2>
            <p>Go back to the <a href="./index.html">homepage</a>.</p>
            </section>
        </body>
    </html>
    ';
}

?>