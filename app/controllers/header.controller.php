<?php
namespace Controllers; 

use function Helpers\getRenderer;


function getHeaderController(){
    
  
    $twig = getRenderer();
   
    echo $twig ->render('header.html');
    
}
?>