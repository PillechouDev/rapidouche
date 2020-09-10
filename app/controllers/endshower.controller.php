<?php
namespace Controllers; 

use function Helpers\getRenderer;



function getEndShowerController(){
    

    $twig = getRenderer();
    if(isset($_GET['action'])){
        switch($_GET['action']){
            case "endshower":
                
            break;

        }
    }
    echo $twig ->render('endshower.html',[
    
    ]);
    
}
?>