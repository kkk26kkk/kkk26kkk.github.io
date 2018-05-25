<?php

$user = "root";
$pass = "";
$host = "localhost";
$db = "sbank";
$port = "4000";

$con = @mysqli_connect($host, $user, $pass, $db, $port);

if($con) echo "CONNECTED";
else echo "NOT CONNECTED";

?>