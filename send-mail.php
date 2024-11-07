<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer library files
require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');
echo json_encode(['status' => 'success', 'message' => 'Test message']);


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form fields and sanitize input
    $name = htmlspecialchars($_POST['your-name']);
    $mobile = htmlspecialchars($_POST['mobile-number']);
    $email = htmlspecialchars($_POST['your-email']);
    $district = htmlspecialchars($_POST['sel-district']);
    $message = htmlspecialchars($_POST['your-message']);

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // SMTP server configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Replace with your SMTP host
        $mail->SMTPAuth = true;
        $mail->Username = 'demo.orangeacadamy@gmail.com'; // Your SMTP username
        $mail->Password = 'ddaykshnkazdsmcb'; // Your SMTP password
        $mail->SMTPSecure = 'tls'; // Enable TLS encryption
        $mail->Port = 587; // SMTP port (usually 587 for TLS, 465 for SSL)

        // Email headers and content
        $mail->setFrom('demo.orangeacadamy@gmail.com', 'Contact Request'); // Your "From" address
        $mail->addAddress('s.lathika1312@gmail.com'); // Recipient's email address
        $mail->Subject = 'New Quote Request from Website';

        // Email body content
        $body = "You have received a new quote request:\n\n";
        $body .= "Name: $name\n";
        $body .= "Mobile Number: $mobile\n";
        $body .= "Email: $email\n";
        $body .= "Selected District: $district\n";
        $body .= "Message: $message\n";

        $mail->Body = $body;

        // Try sending the email
        if ($mail->send()) {
            echo json_encode(['status' => 'success', 'message' => 'Email sent successfully!']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Email could not be sent.']);
        }
    } catch (Exception $e) {
        // Catch PHPMailer exceptions and send a proper JSON response
        echo json_encode(['status' => 'error', 'message' => 'Mailer Error: ' . $mail->ErrorInfo]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
}
