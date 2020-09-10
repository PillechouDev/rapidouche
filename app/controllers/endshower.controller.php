<?php
namespace Controllers; 

use function Helpers\getRenderer;



function getEndShowerController(){
    

    $twig = getRenderer();
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
        "argent" => $argent
    
    ]);
    
}

function eau(){
    return $_GET["eau"];
        
}

function argent(){
    return $_GET["argent"];
}
?>