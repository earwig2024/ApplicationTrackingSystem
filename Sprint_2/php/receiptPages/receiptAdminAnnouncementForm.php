<?php include('./header.php'); ?>
<div class="container mt-4">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <?php
             if($_SERVER['REQUEST_METHOD'] == "POST") {
                 //Gathering data, trimming
                 $title = trim($_POST['name']);
                 $jobType = isset($_POST['jobtype']) ? $_POST['jobtype'] : '';
                 $location = trim($_POST['location']);
                 $employer = trim($_POST['employer']);
                 $moreInfo = trim($_POST['moreinfo']);
                 $URL = trim($_POST['Url']);
                 $email = trim($_POST['email']);

                 //Checking for empty fields
                 if(!empty($title) && !empty($jobType) && !empty($location) && !empty($employer) && !empty($URL)){
                     echo "<h2>Thank you for your submission!</h2>";
                     echo "<p>Title: " . htmlspecialchars($title) . "</p>";
                     echo "<p>Job or Internship:" . htmlspecialchars($jobType) . "</p>";
                     echo "<p>Location: " . htmlspecialchars($location) . "</p>";
                     echo "<p>Employer: " . htmlspecialchars($employer) . "</p>";
                     echo "<p>More Infomoration: " . htmlspecialchars($moreInfo) . "</p>";
                     echo "<p>URL: " . htmlspecialchars($URL) . "</p>";
                     echo "<p>Email: " . htmlspecialchars($email) . "</p>";


                     // send email
                     // tschrock@greenriver.edu
                     $to = "tschrock@greenriver.edu";
                     $subject = "New Application: ".$title." added!";
                     $message = "
                            <html>
                                <head>
                                    <title>HTML email</title>
                                </head>
                                <body>
                                    <p>This email contains HTML Tags!</p>
                                    <table>
                                        <tr>
                                            <th>Title</th>
                                            <th>Job Type</th>
                                            <th>Location</th>
                                            <th>Employer</th>
                                            <th>More Info</th>
                                            <th>URL</th>
                                            <th>Email</th>
                                        </tr>
                                        <tr>
                                            <td>$title</td>
                                            <td>$jobType</td>
                                            <td>$location</td>
                                            <td>$employer</td>
                                            <td>$moreInfo</td>
                                            <td>$URL</td>
                                            <td>$email</td>
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

