<?php

namespace Models;

use function Helpers\getDataBaseConnection;

function getTotalwater(){
    if (isset($_GET["totaleau"])){
        $bdd = getDataBaseConnection();
        $query = $bdd->prepare('UPDATE user
                                SET watersaved = :newwater
                                WHERE user.token="zqefefzfe"');
        $query -> execute(array(
            "newwater" => $_GET["totaleau"]
        ));
        header("Refresh:0,url=/rapidouche/?page=homepage");
        
  
    }
}