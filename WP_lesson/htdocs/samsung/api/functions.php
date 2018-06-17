<?php

$host = "localhost";
$user = "root";
$pass = "";
$db   = "samsam";

global $con;
$con = @mysqli_connect($host,$user,$pass,$db);

function saveProducts($name, $price ){
    global $con;
    if(mysqli_query($con, "INSERT INTO products (name,price) VALUES('$name','$price')"))
        return true;
    else 
        return false;
}

function getProducts(){
    global $con;
    $res = mysqli_query($con, "SELECT * FROM products");
    $products = array();
    while ($row = mysqli_fetch_assoc($res)) {
         array_push($products,$row);
    }
    return $products;
}