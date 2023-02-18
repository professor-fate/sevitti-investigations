<?php
if (isset($_POST['submit-form'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $phoneNumber = $_POST['phone'];
    $message = $_POST['contact-message'];

    $mailTo = "little__88@hotmail.com"
    $headers = "From website: ".$mailFrom;
    $txt = "You have received an email from ".$name.".\n\n".$message.".\n phone number: ".$phoneNumber;

    mail($mailTo, $txt, $headers);
    header("Location: index.html?mailsend");
}
