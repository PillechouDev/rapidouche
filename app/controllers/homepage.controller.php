<?php
namespace Controllers; 

use function Helpers\getRenderer;
use function Helpers\getDatabaseConnection;
use function Models\getUserMoneyWater;
use function Models\getTotalmoney;
use function Models\getTotalwater;



function getHomepageController(){
    

    $twig = getRenderer();
    $getUserMoneyWater = getUserMoneyWater();
    
    echo $twig ->render('homepage.html',[
        "user" => $getUserMoneyWater,
        "argent" => getTotalmoney(),
        "eau" => getTotalwater()
        
    ]);
    
}



?>