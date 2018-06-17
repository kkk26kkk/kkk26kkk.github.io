<?php include_once("dbfunctions2.php"); ?>
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
                $data['name'] = $_POST['name'];
                $data['price'] = $_POST['price'];

                //var_dump($data);
                if(savePhonelist($data))
                    echo "";
                else
                    echo "";
            }

        ?>
        
        <img height="100" width="300" src="image/logo.svg"/>
        <h1>Product Information</h1>
        
        <form method="post">
        <div class="post">
            Name
            <input type="text" name="name"/><br/>
            Price 
            <input type="text" name="price"/><br/>
            <button id="btnSave" type="submit">Save</button>
        </div>
        </form>
        
        <hr/>

        <?php
            $customers = getPhonelist();
        ?>

        <h4 id="tail" align="center">&copy;2018. 김연아&#8482;</h4>
    </div>

    

</body>
<script src="main.js"></script>
</html>