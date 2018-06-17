<?php
//phpinfo();

$user="root";
$pass="";
$host="localhost";

$con = mysqli_connect($host, $user, $pass);

if($con) echo "CONNECTED";
else echo "NOT CONNECTED";

?>