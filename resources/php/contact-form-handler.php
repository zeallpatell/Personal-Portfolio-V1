<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $email_from = 'zealpatel24@gmail.com';
    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Subject: $subject.\n".
                            "User Message: $message.\n".
        
    $to = "zealpatel06@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Replt-To: $visitor_email \r\n";

    mail($to,$email_body,$headers);
    header("Location: index.html");
?>