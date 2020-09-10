<?php
namespace Controllers; 

use function Helpers\getRenderer;


function getHeaderController(){
    
  
    $twig = getRenderer();
   if (isset($_SESSION['token'])){
    echo $twig ->render('header.html',
[
    "token" =>$_SESSION['token']
]);
   }
   else{
    echo $twig ->render('header.html',
    [
        "token" =>"no"
    ]);
   }
    
    
}
?>