<?php
    $user = "root";
    $pass = "";
    $host = "localhost";
    $db = "sbank";
    $port = "4000";

    $mysqli = mysqli_connect($host, $user, $pass, $db, $port);

    if(isset($_GET['order'])){
        $order = $_GET['order'];
    } else {
        $order = 'lastname';
    }

    if(isset($_GET['sort'])){
        $sort = $_GET['sort'];
    } else {
        $sort = 'ASC';
    }

    $table = "customers";
    $q = "SELECT * FROM $table ORDER BY $order $sort";
    $result = mysqli_query($mysqli, $q);

    if($result->num_rows > 0) {

        $sort == 'DESC' ? $sort = 'ASC' : $sort = 'DESC';

        echo "
        <table border='1'>
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
?>