<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/home/alampnnj/test.alamalmanpower.com/PHPMailer/src/Exception.php';
require '/home/alampnnj/test.alamalmanpower.com/PHPMailer/src/PHPMailer.php';
require '/home/alampnnj/test.alamalmanpower.com/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $subject = isset($_POST['subject']) ? $_POST['subject'] : '';
    $message = isset($_POST['message']) ? $_POST['message'] : '';

    $mail = new PHPMailer(true);
    
    try {
        // SMTP Configuration
        $mail->SMTPDebug = 2;
        $mail->isSMTP();
        $mail->Host = 'alamalmanpower.com'; // Replace with your SMTP host
        $mail->SMTPAuth = true;
        $mail->Username = 'noreply@alamalmanpower.com'; // Your email address
        $mail->Password = 'mMhx0iFD7d^H'; // Your email password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Use SSL/TLS
        $mail->Port = 465; // Change to 587 if not using SSL

       //Recipients
        $mail->setFrom('noreply@alamalmanpower.com', 'Al Amal Manpower');
        $mail->addAddress('kasunmihijaya@gmail.com', 'Kasun Mihijaya'); // Add a recipient
        $mail->addReplyTo($email, $name);

        // Content
        $mail->isHTML(true); // Set email format to HTML
        $mail->Subject = $subject;
        $mail->Body = "<p> $message </p>";
        $mail->AltBody = $message;

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