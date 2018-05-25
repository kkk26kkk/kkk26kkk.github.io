<?php

    //customers.php api

    //DATA
    //get from a database

    $array = Array();

    $customer = {"id" => "1", "name" => "Kim Yuna"};
    array_push($array, $customer);
    $customer = {"id" => "2", "name" => "Park Jina"};
    array_push($array, $customer);

    echo json_encode($array);
?>