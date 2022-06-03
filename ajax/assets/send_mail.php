<?php
if(isset($_POST)){
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $comments = $_POST["comments"];


    $domain = $_SERVER["HTTP_HOST"];
    $to = "fabianmarianop@gmail.com";
    $subjet = "contacto desde el furmolario dl sitio $domain: $subject";
    $message = "
    <p>
    datos enviados desde el formulario del sitio <b> $domain </b>
    </p>
    <ul>
        <li>nombre: <b>$name</b></li>
        <li>nombre: <b>$email</b></li>
        <li>nombre: $subject</li>
        <li>nombre: $subject</li>

    </ul>
    ";  
    $headers = "MIME-Version: 1.0\r\n" . "Content-Type: text/html; chartset=utf-8\r\n" . "From: envio automatico no reponder <no-reply@$domain";



     $send_mail = mail($to, $subject, $message, $headers);

     if($send_mail) {
         $res = [
             "err" => false,
             "message" => "tus datos han sido enviados"
         ];
     } else {
         $res = [
             "err" => true,
             "message" => "error al enviar tus datos"
         ];
     }

     //header('Acces-Controll-Allow-Origin: *');
     header('Acces-Controll-Allow-Origin: accesos  determinados');

     header('Content-type: application/json');

     echo json_encode($res);
     exit;
}