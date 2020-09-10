<?php
namespace Controllers; 

use function Helpers\getRenderer;
use function Models\getUserMoneyWater;



function getEndShowerController(){
    

    $twig = getRenderer();
    $getUserMoneyWater = getUserMoneyWater();
    $eau = eau();
    $argent = argent();
    if(isset($_GET['action'])){
        switch($_GET['action']){
            case "endshower":
                
            break;

        }
    }
    echo $twig ->render('endshower.html',[
        "eau" => $eau,
        "argent" => $argent,
        "user" => $getUserMoneyWater

    
    ]);
    
}

function eau(){
    return $_GET["eau"];
        
}

function argent(){
    return $_GET["argent"];
}
?>