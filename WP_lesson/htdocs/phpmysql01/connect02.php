<?php

$user = "root";
$pass = "";
$host = "localhost";
$db = "sbank";
$port = "4000";

//create connection
$con = @mysqli_connect($host, $user, $pass, null, $port); // $db null
if(!$con){
    echo "NOT CONNECTED";
    die();
}

//select the database
$dbc = @mysqli_select_db($con, $db);
if(!$dbc){
    echo "Connected but Database NOT selected";
    die();
}

//connted with database
echo "CONNECTED";

?>