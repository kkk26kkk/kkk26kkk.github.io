<?php
/* products.php */

if($_POST){
    echo $_POST['name'];
    echo $_POST['price'];
    echo "POST REQUEST: $name / $price";

    die();
}

if($_GET){
    echo "GET REQUEST";

    die();
}

echo "nothing...";
?>