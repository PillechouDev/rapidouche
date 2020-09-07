<?php

namespace Controllers;


function getMainController(){
    getHeaderController();
    if(isset($_GET['page'])){
        switch($_GET['page']){
            case "signup":
                getSignupController();
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
?>