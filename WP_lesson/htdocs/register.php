
<h1>Inside Register Page </h1>
<?php 
echo "<h3>GET DATA </h3>";
if($_GET){
    echo "You have GET data.<br/>";
    var_dump($_GET);
}
else {
    echo "You have NO GET data";
}

echo "<h3>POST DATA </h3>";
if($_POST){
    echo "You have POST data.<br/>";
    var_dump($_POST);
    //JUST FOR TESTING.. ;)
    $f = fopen("abc.txt","a+");
    fwrite($f, $_POST['name'] . " # " .  $_POST['pass'] . "\n");
    fclose($f);
}
else {
    echo "You have NO GET data";
}



