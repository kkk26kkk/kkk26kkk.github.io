<!-- PHP is embedded in HTML -->
<h1><?php echo "PHP Variables";?></h1>
<?php
  /*HTML is embedded in php  */ 
   echo "<h1>PHP Variables</h1>";
?>
<!-- Just remember everytime you have 
 php code it should be inside <?php ?> -->

<?php
    $a = "Suwon University";
    $b = "The Best University in town!";

    echo $a . " " .  $b;
    echo "<br/>";
    echo "$a $b";

    $r = "a";
    echo "<br/>";
    echo "$$r = ${$r}";

    echo "<h3>Numbers </h3>";
    $a = 5;
    $b = 10;
    $c = $a + $b;
    echo "The sum of $a and $b = $c <br/>";
    echo "The sum of ". $a . " and " . $b . " = " . $c;

    // 5.00 or 5.250000
    // printf();

    printf("<br/>The amount is %.2f", $a);
    printf("<br/>The amount is %.6f", $a);

    echo "<h3>If / switch </h3>";
    //if
    if($a == 5 ){
        echo "<br/>Yes it's true that a if 5";
    }else{}

    //switch
    switch($a){
        case 1:break;
        case 2: break;
        case 5: echo "<br/>Yes it's number 5!";break;
    }

    echo "<h3>Loop </h3>";
    //for loop
    for($i=0; $i<5; $i++)
        echo $i . "<br/>";
    echo "<br/><br/>";

    //while loop
    while ($i>0){
        echo $i . "<br/>";
        $i--;
    }
    //do while
    do {
        echo $i . "<br/>";
        $i ++;
    }while ($i < 5);

?>

<h5> Arrays </h5>
<?php 
    $fruits = Array();
    var_dump($fruits);
    $fruits[0] = "Banana";
    $fruits[7] = "Strawberry";
    $fruits[10] = "Strawberry";
    $fruits[2] = "Apple";
    echo "<br/>";
    //var_dump($fruits);
    foreach ($fruits as $fruit)
        echo $fruit . "<br/>";


    $cars = ['Kia','Hyundai','Samsung'];
    echo "<br/>";
    foreach ($cars as $car)
    echo $car . "<br/>";


    echo "<h3>SORT </h3>";
   
    foreach ($fruits as $k=>$fruit)
        echo "[$k] -  " . $fruit . "<br/>";
    echo "---<br/>";
    //rsort($fruits);
    //sort($fruits);
    //ksort($fruits);
    $nf  = array_unique($fruits);
    foreach ($nf as $k=>$fruit)
        echo "[$k] -  " . $fruit . "<br/>";


    

?>






