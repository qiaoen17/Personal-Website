<?php
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    // get form data 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // set receipient address
    $to = "e0772903@u.nus.edu";

    // Set subject
    $subject = "New Contact Form Submission"

    // Build email body
    $body = "Name: $name\n"
    $body .= "Email: $email\n";
    $body .= "Message:\n $message";

    // set additional headers
    $headers = "From: $email";

    mail($to, $subject, $body, $headers);

    // redirect back to form or thank you page
    header("Location: contactPage.html");
    exit;
}
?>