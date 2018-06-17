<?php include_once("dbfunctions.php"); ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Customers</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
</head>
<body>
    <div id="main">
        <?php

            if($_POST){
                //We will write our code here
                //To process the POST data.
                $data['ln'] = $_POST['lname'];
                $data['fn'] = $_POST['fname'];
                $data['bd'] = $_POST['bdate'];

                //var_dump($data);
                if(saveCustomer($data))
                    echo "Saved.";
                else
                    echo "Not Saved.";
            }

        ?>

        <h1>Customers</h1>
        <form method="post"/>
            Lastname : <br/>
            <input type="text" name="lname"/><br/>
            Firstname : <br/>
            <input type="text" name="fname"/><br/>
            Birthdate : <br/>
            <input type="date" name="bdate"/><br/>
            <button type="submit">Save</button>
        </form>

        <hr/>

        <?php
            $customers = getCustomers();
        ?>

        <table id="myTable" border="1" width="100%">
            <tr>
                <th onclick="tableSort(0)">Name</th>
                <th onclick="tableSort(1)">Birthday</th>
            </tr>
            <?php

            foreach($customers as $rec) {
                $ln = $rec['lastname'];
                $fn = $rec['firstname'];
                $bd = $rec['birthday'];
                echo "<tr>";
                echo "<td>$ln $fn</td><td>$bd</td>";
                echo "<tr/>";
            }

            ?>
        </table>

    </div>
</body>
<script src="main.js"></script>
</html>