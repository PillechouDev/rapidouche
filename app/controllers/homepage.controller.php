<?php
namespace Controllers; 

use function Helpers\getRenderer;
use function Models\getUserMoneyWater;



function getHomepageController(){
    

    $twig = getRenderer();
    $getUserMoneyWater = getUserMoneyWater();
    
    echo $twig ->render('homepage.html',[
        "user" => $getUserMoneyWater,
        "name_user" => $_SESSION['name']

        
    ]);
    
}
?>