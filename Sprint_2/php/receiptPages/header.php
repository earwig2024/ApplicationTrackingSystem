<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Receipt</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://earwig.greenriverdev.com/pages/Sprint_2/styles/nav-styles.css">
    <link rel="stylesheet" href="https://earwig.greenriverdev.com/pages/Sprint_2/styles/styles.css">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</head>
<body class="d-flex flex-column">
<?php
$response = file_get_contents('https://earwig.greenriverdev.com/pages/Sprint_2/navbar.html');
echo $response;
?>
<div class="container-fluid d-flex settings justify-content-between pt-4 px-3 px-md-5">
    <a class="h-100 icon-link icon-link-hover text-decoration-none justify-self-center fw-bold"
       style="--bs-icon-link-transform: rotate(90deg);"
       href="https://earwig.greenriverdev.com/pages/Sprint_1/UpdateAccountSettings.html">
        Update Account Settings
        <img class="bi" src="../../images/settings.svg" alt="">
    </a>
</div>

