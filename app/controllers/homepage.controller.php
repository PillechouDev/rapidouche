<?php
namespace Controllers; 

use function Helpers\getRenderer;



function getHomepageController(){
    

    $twig = getRenderer();
    
    echo $twig ->render('homepage.html',[
        
    ]);
    
}
?>