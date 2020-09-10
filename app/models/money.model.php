<?php

namespace Models;

use function Helpers\getDataBaseConnection;

function getTotalmoney(){
    if (isset($_GET["totalargent"])){
        $bdd = getDataBaseConnection();
        $query = $bdd->prepare('UPDATE user
                                SET moneysaved = :newmoney
                                WHERE user.token="zqefefzfe"');
        $query -> execute(array(
            "newmoney" => $_GET["totalargent"]
        ));
        header("Refresh:0,url=/rapidouche/?page=homepage");
        
  
    }
}