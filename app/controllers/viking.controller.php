<?php
namespace Controllers; 

use function Helpers\getRenderer;



function getVikingController(){
    

    $twig = getRenderer();
    if(isset($_GET['action'])){
        switch($_GET['action']){
            case "viking":
                
            break;

        }
    }
    echo $twig ->render('viking.html',[
    
    ]);
    
}
?>