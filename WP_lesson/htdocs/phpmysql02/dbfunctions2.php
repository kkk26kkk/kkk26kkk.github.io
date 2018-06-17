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

    if(isset($_GET['order'])){
        $order = $_GET['order'];
    } 

    if(isset($_GET['sort'])){
        $sort = $_GET['sort'];
    } 

    $table = "customers";
    if(isset($order) && isset($sort))
        $q = "SELECT * FROM $table ORDER BY $order $sort";
    else
        $q = "SELECT * FROM $table";

    $result = mysqli_query($con, $q);
    
    mysqli_close($con);

    if($result->num_rows > 0) {

        if(!isset($sort))
            $sort = 'ASC';
        
        $sort == 'DESC' ? $sort = 'ASC' : $sort = 'DESC';

        echo "
        <table border='1' width='100%'>
            <tr>
                <th><a href='?order=lastname&&sort=$sort'>Name</a></th>
                <th><a href='?order=birthday&&sort=$sort'>Birthday</a></th>
            </tr>
        ";
        while($rows = $result->fetch_assoc()){
            $ln = $rows['lastname'];
            $fn = $rows['firstname'];
            $bd = $rows['birthday'];

            echo "
            <tr>
                <td>$ln $fn</td>
                <td>$bd</td>
            </tr>
            ";
        }
        
        echo "
        </table>
        ";
    } else {
        echo "No records returned.";
    } 
}

?>