<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['subject'];

    $mail = new PHPMailer(true);
    
    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host = 'mail.alamalmanpower.com'; // Replace with your SMTP host
        $mail->SMTPAuth = true;
        $mail->Username = 'noreply@alamalmanpower.com'; // Your email address
        $mail->Password = 'mMhx0iFD7d^H'; // Your email password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Use SSL/TLS
        $mail->Port = 465; // Change to 587 if not using SSL

        // Email Content
        $mail->setFrom('noreply@alamalmanpower.com', 'Your Website');
        $mail->addAddress('kasunmihijaya@gmail.com'); // Admin email
        $mail->Subject = "New Contact Form Submission";
        $mail->Body = "Name: $name\nEmail: $email\nMessage: $message";

        // Send Email
        if ($mail->send()) {
            echo "Email sent successfully!";
        } else {
            echo "Failed to send email.";
        }
    } catch (Exception $e) {
        echo "Error: {$mail->ErrorInfo}";
    }
}
?>
