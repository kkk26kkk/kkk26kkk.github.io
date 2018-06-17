<?php /* products.php*/ 
header('Content-Type: application/json');
?>

<?php 
if($_POST){
    $name = $_POST['name'];
    $price = $_POST['price'];
   //call db functions..
   @require_once("functions.php");
   if(saveProducts($name,$price)){
        $a = array("status"=>true);
        echo json_encode($a);
   }
   else{
        $a = array("status"=>false);
        echo json_encode($a);
   }
   die();   
}
if($_GET){
    @require_once("functions.php");
    $products = getProducts();
    echo json_encode($products);
    die();
}
?>