<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone']; 


$mail->From = 'support@u.com';	// от кого
$mail->FromName = 'Индра';						// от кого
$mail->AddAddress('school.indra@yandex.ru');						// кому - адрес, Имя  
$mail->IsHTML(true);													// выставляем формат письма HTML

$mail->Body    = '<b>Имя:</b> ' . $name .   '<br><b>Телефон:</b> ' . $phone ;
$mail->Subject = 'Заявка с сайта Индра';
$mail->AltBody = '';
$mail->send();
?>