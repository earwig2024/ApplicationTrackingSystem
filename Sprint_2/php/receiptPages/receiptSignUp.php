
<?php include ('./header.php'); ?>
<div class="container mt-4">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <?php

            if($_SERVER['REQUEST_METHOD'] == "POST"){
                //1.remove space key value.
                $name = trim($_POST['name']);
                $email = trim($_POST['email']);
                $cohort = trim($_POST['cohort']);
                $status = isset($_POST['checkboxes']) ? $_POST['checkboxes'] : array(); //isset() is checking if there s $_POST['checkboxes']
                $roles = trim($_POST["roles"]);

                //send a email to earwiggreenriver@gmail.com

                // $to = "earwiggreenriver@gmail.com";
                // $subject = "New User: ".$name." Singed UP!";
                // $message = "Hello world!";
                // $headers = "From: webmaster@example.com";

                //2.make sure no empty value entered. I did not include ！empty($roles) since it not required
                if(!empty($name) && !empty($email)&&!empty($cohort)&&!empty($roles)){
                    echo "<h2> SignUp Information:</h2>";
                    //https://www.w3schools.com/php/php_form_validation.asp
                    //htmlspecialchars()  This prevents attackers from exploiting the code by injecting HTML
                    // or Javascript code (Cross-site Scripting attacks) in forms.
                    echo "<p>Name: " . htmlspecialchars($name) . "</p>";
                    echo "<p>Email: " . htmlspecialchars($email) . "</p>";
                    echo "<p>Cohort: " . htmlspecialchars($cohort) . "</p>";
                    echo '<p>Status: </p>';

                    $statusList = '';
                    foreach($status as $box){
                        echo '<p>' . htmlspecialchars($box) . '</p>';
                        $statusList .= htmlspecialchars($box) . '<br>';
                        // “ .= ” means append or add the string to "statuslist"
                    }
                    echo "<p>Roles: ". htmlspecialchars($roles). "</p>";

                    //send a email to earwiggreenriver@gmail.com
                    $to = "earwiggreenriver@gmail.com";
                    $subject = "New User: ".$name." Singed UP!";
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
                                            <th>Cohort</th>
                                            <th>Status</th>
                                            <th>Roles</th>
                                        </tr>
                                        <tr>
                                            <td>$name</td>
                                            <td>$email</td>
                                            <td>$cohort</td>
                                            <td>$statusList</td>
                                            <td>$roles</td>
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
