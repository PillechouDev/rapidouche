<?php
namespace Controllers; 

use function Helpers\getRenderer;

use function Models\getConnection;
use function Models\NewUser;

function getSignupController(){
    

    $twig = getRenderer();
    if(isset($_GET['action'])){
        switch($_GET['action']){
            case "connection":
                if(getConnection($_POST['token'])==FALSE){
                    NewUser($_POST['mail'],$_POST['token'],$_POST['name']);
                    $_SESSION['token']=$_POST['token'];
                    $_SESSION['name']=$_POST['name'];
                    getHomepageController();
                }
                else{
                    $_SESSION['token']=$_POST['token'];
                    $_SESSION['name']=$_POST['name'];
                    getHomepageController();
                }
            break;
            case "logout":
                session_destroy();
                
                getHomepageController();
            break;

        }
    }
    else{
        echo $twig ->render('signup.html',[
    
            ]);
    }
    
    
}
?>