<?php 


$to = "cesar.d.moro@gmail.com";
$subject = "Somos Cerveceros | Contacto Web Festival ";

$message = "<b>Este es un contacto desde la web del festival </b>";
$message .= "<h1>This is headline.</h1>";

$message .= "<br>Nombre:".$_POST['username'];
$message .= "<br>Email:".$_POST['email'];
$message .= "<br>Asunto:".$_POST['subject'];
$message .= "<br>Descripcion:".$_POST['Descripcion'];

$header = "From:info@somoscerveceros.com \r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html\r\n";

$retval = mail ($to,$subject,$message,$header, " -finfo@somoscerveceros.com");

if( $retval == true ) {
   echo "Message sent successfully...";
}else {
   echo "Message could not be sent...";
}
?>