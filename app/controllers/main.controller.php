<?php

namespace Controllers;


function getMainController(){
    if(isset($_GET['page']) && $_GET['page'] == "endshower"){
        getEndShowerController();
    }
    else{
        getHeaderController();
        if(isset($_GET['page'])){
            switch($_GET['page']){
                case "signup":
                    getSignupController();
                break;
                case "challenge":
                    getChallengeController();
                break;
                case "viking":
                    getVikingController();
                break;
                default:
                getHomepageController();
            break;
            }
        }
        else{
            getHomepageController();
        }
            
            
            getFooterController();
        

        }

    }
    
?>