<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/home/alampnnj/test.alamalmanpower.com/PHPMailer/src/Exception.php';
require '/home/alampnnj/test.alamalmanpower.com/PHPMailer/src/PHPMailer.php';
require '/home/alampnnj/test.alamalmanpower.com/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST["name"];
    $email = $_POST["email"];
    $number = $_POST["number"];
    $jobstitles = $_POST["jobstitles"];
    $experience = $_POST["experience"];
    $message = $_POST["message"];

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
        //TODO : Add a recipient
        $mail->addAddress('receipient_email', 'receipient_name'); // Add a recipient
        $mail->addReplyTo($email, $name);

        $mail->Subject = "New Enquiry from $fullName";
        $mail->isHTML(true);
        $mail->Body = "
            <h2>New Enquiry</h2>
            <p><strong>Name:</strong> $fullName</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Mobile Number:</strong> $number</p>
            <p><strong>Hiring for:</strong> $jobstitles</p>
            <p><strong>Experience:</strong> $experience</p>
            <p><strong>Message:</strong><br> $message</p>
        ";

        $mail->send();
        echo "Email sent successfully!";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request method.";
}
?>