<?php

$name = $_POST['name'];
$email = $_POST['email'];

?>

<!DOCTYPE html>
<html>
<head>
    <title>Processing Page</title>
</head>
<body>

    <h2>Form Submitted Successfully</h2>

    <p><strong>Name:</strong> <?php echo $name; ?></p>

    <p><strong>Email:</strong> <?php echo $email; ?></p>

</body>
</html>