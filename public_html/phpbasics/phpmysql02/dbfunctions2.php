<?php

//Global variables.
$user = "root";
$pass = "";
$host = "localhost";
$db = "phone";
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

function savePhonelist($data){
    global $con;
    if($con == null)
        $con = myconnection();
    
    $name = $data['name'];
    $price = $data['price'];
    
    $table = "phonelist";

    $sq = "INSERT INTO $table ";
    $sq .= "(name, price) VALUES";
    $sq .= "('$name', '$price')";

    //echo $sq;
    if (mysqli_query($con, $sq))
        return true;
    else
        return false;

    @mysql_close($con);
}

function getPhonelist() {
    global $con;
    if($con == null)
        $con = myconnection();

    if(isset($_GET['order'])){
        $order = $_GET['order'];
    } 

    if(isset($_GET['sort'])){
        $sort = $_GET['sort'];
    } 

    $table = "phonelist";
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
                <th>&#9660 ID</th>
                <th align='center'><a href='?order=name&&sort=$sort'>&#9660 NAME</a></th>
                <th align='center'><a href='?order=price&&sort=$sort'>&#9660 PRICE</a></th>
            </tr>
        ";
        while($rows = $result->fetch_assoc()){
            $id = $rows['id'];
            $name = $rows['name'];
            $price = $rows['price'];

            echo "
            <tr>
                <td align='center'>$id</td>
                <td align='center'>$name</td>
                <td align='center'>$price</td>
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