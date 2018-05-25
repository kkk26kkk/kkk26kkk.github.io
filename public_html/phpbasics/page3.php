<?php
    //phpinfo();

    //var_dump($_GET);
    //var_dump($_POST);
    
    /* session_start();
    var_dump($_SESSION);
    */

    //var_dump($_SERVER);
    /* foreach($_SERVER as $k=>$s){
        echo "$k $s <br/>";
    }
    */


    // GET
    if($_GET){
        echo "You have GET data.<br/>";
        var_dump($_GET);
    }
    else{
        echo "You have NO GET info";
    }
?>

<form method="POST" action="register.php?abc=10">
    ID : <input type="text" name="id"/><br/>
    NAME : <input type="text" name="name"/><br/>
    AMOUNT : <input type="text" name="amount"/><br/>
    PASSWORD : <input type="password" name="pw"/><br/>
    <input type="hidden" name="secret" value="5"/>
    <button type="submit">Attack</button>
</form>