<?php

//Global variables.
$user = "root";
$pass = "";
$host = "localhost";
$db = "sbank";
$port = "4000";

$con = null;

function myconnection (){
    //Make sure to put global if you use.
    //Global variables in a function.
    global $host;
    global $pass;
    global $user;
    global $db;
    global $port;

    return @mysqli_connect($host, $user, $pass, $db, $port);
}

function saveCustomer($data){
    global $con;
    if($con == null)
        $con = myconnection();
    
    $ln = $data['ln'];
    $fn = $data['fn'];
    $bd = $data['bd'];
    
    $table = "customers";

    $sq = "INSERT INTO $table ";
    $sq .= "(lastname, firstname, birthday) VALUES";
    $sq .= "('$ln', '$fn', '$bd')";

    //echo $sq;
    if (mysqli_query($con, $sq))
        return true;
    else
        return false;

    @mysql_close($con);
}

function getCustomers() {
    global $con;
    if($con == null)
        $con = myconnection();

    $table = "customers";
    $q = "SELECT * FROM $table";

    $result = mysqli_query($con, $q);

    return $result;
    
    @mysql_close($con);
}

?>