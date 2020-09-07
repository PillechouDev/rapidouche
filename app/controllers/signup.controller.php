<?php
namespace Controllers; 

use function Helpers\getRenderer;



function getSignupController(){
    

    $twig = getRenderer();
    if(isset($_GET['action'])){
        switch($_GET['action']){
            case "signup":
                
            break;

        }
    }
    echo $twig ->render('signup.html',[
    
    ]);
    
}
?>