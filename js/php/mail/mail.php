<?php

    //echo "why " . $_POST["title"]. " " . $_POST["message"];

    include "mime_mail.php";
    
    $mail = new mime_mail;
    $mail->from = "WebsiteBusiness@yahoo.com";
    $mail->to = "yamil_padron@hotmail.com";
    $mail->subject = $_POST['title'] .  time();
    $mail->body = $_POST["message"];
    $mail->send();
    
    echo "OK FROM EMAIL";