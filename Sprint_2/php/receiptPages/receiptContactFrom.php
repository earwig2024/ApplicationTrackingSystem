<?php include ('./header.php'); ?>

<div class="container mt-4">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <?php
            if($_SERVER['REQUEST_METHOD'] == "POST"){
                //1.remove space key value.
                $name = trim($_POST['nameContact']);
                $email = trim($_POST['emailContact']);
                $message = trim($_POST["messageContact"]);
                //2.make sure no empty value entered.
                echo "<h2> Contact Information:</h2>";
                if(!empty($name) && !empty($email)&&!empty($message)){
                    //https://www.w3schools.com/php/php_form_validation.asp
                    //htmlspecialchars()  This prevents attackers from exploiting the code by injecting HTML
                    // or Javascript code (Cross-site Scripting attacks) in forms.
                    echo "<p>Name: " . htmlspecialchars($name) . "</p>";
                    echo "<p>Email: " . htmlspecialchars($email) . "</p>";
                    echo "<p>Message: ". htmlspecialchars($message). "</p>";

                    //send a email to earwiggreenriver@gmail.com
                    // tschrock@greenriver.edu
                    $to = "earwiggreenriver@gmail.com";
                    $subject = "New User: ".$name." send a new message from contact form!";
                    $message = "
                            <html>
                                <head>
                                    <title>HTML email</title>
                                </head>
                                <body>
                                    <p>This email contains HTML Tags!</p>
                                    <table>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Message</th>
                                        </tr>
                                        <tr>
                                            <td>$name</td>
                                            <td>$email</td>
                                            <td>$message</td>
                                        </tr>
                                    </table>
                                </body>
                            </html>
                        ";

                    // Always set content-type when sending HTML email
                    $headers = "MIME-Version: 1.0" . "\r\n";
                    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

                    // More headers
                    $headers .= 'From: <webmaster@example.com>' . "\r\n";
                    $headers .= 'Cc: myboss@example.com' . "\r\n";

                    mail($to,$subject,$message,$headers);
                }else {
                    echo "<h2>Please fill the form correctly!</h2> ";
                }
            }
            else{
                echo "<h2>Please fill the form correctly</h2>";
            }
            ?>
        </div>
    </div>
</div>
<?php include ('./footer.php'); ?>
