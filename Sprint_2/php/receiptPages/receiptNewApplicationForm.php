<?php include('./header.php'); ?>

<div class="container mt-4">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <?php
            if ($_SERVER['REQUEST_METHOD'] == "POST") {
                // 1. Remove space key value.
                $jobPosition = trim($_POST['jobPosition']);
                $dateOfApplication = trim($_POST['dateOfApplication']);
                $descriptionUrl = trim($_POST['DescriptionUrl']);
                $applicationStatus = trim($_POST['applicationStatus']);
                $comments = trim($_POST['comments']);
                $followUpDate = trim($_POST['futureDate']);

                // 2. Make sure no empty value entered.
                echo "<h2> Application Information:</h2>";
                if (!empty($jobPosition) && !empty($dateOfApplication) && !empty($descriptionUrl) && !empty($applicationStatus) && !empty($followUpDate)) {
                    // HTML encode to prevent XSS
                    echo "<p>Job Position: " . htmlspecialchars($jobPosition) . "</p>";
                    echo "<p>Date of Application: " . htmlspecialchars($dateOfApplication) . "</p>";
                    echo "<p>Description Url: " . htmlspecialchars($descriptionUrl) . "</p>";
                    echo "<p>Status: " . htmlspecialchars($applicationStatus) . "</p>";
                    echo "<p>Notes: " . htmlspecialchars($comments) . "</p>";
                    echo "<p>Follow-up date: " . htmlspecialchars($followUpDate) . "</p>";

                    // You can add additional processing or email sending logic here if needed.
                    //send a email to earwiggreenriver@gmail.com
                    // tschrock@greenriver.edu
                    $to = "earwiggreenriver@gmail.com";
                    $subject = "New Application! '$jobPosition' added!";
                    $message = "
                            <html>
                                <head>
                                    <title>HTML email</title>
                                </head>
                                <body>
                                    <p>This email contains HTML Tags!</p>
                                    <table>
                                        <tr>
                                            <th>Job Position</th>
                                            <th>Date of Application</th>
                                            <th>Description URL</th>
                                            <th>Application Status</th>
                                            <th>Comments</th>
                                            <th>Follow up Date</th>
                                        </tr>
                                        <tr>
                                            <td>$jobPosition</td>
                                            <td>$dateOfApplication</td>
                                            <td>$descriptionUrl</td>
                                            <td>$applicationStatus</td>
                                            <td>$comments</td>
                                            <td>$followUpDate</td>
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
                } else {
                    echo "<h2>Please fill the form correctly!</h2> ";
                }
            } else {
                echo "<h2>Please fill the form correctly</h2>";
            }
            ?>
        </div>
    </div>
</div>
<?php include('./footer.php'); ?>
