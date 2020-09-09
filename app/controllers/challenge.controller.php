<?php
namespace Controllers; 

use function Helpers\getRenderer;



function getChallengeController(){
    

    $twig = getRenderer();
    if(isset($_GET['action'])){
        switch($_GET['action']){
            case "challenge":
                
            break;

        }
    }
    echo $twig ->render('challenge.html',[
    
    ]);
    
}
?>