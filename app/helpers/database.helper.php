<?php
namespace Helpers;

use PDO;
function getDataBaseConnection(){
    $bdd = new PDO('mysql:host=localhost:3308;dbname=rapidouche;charset=utf8','root','');
    return $bdd;
}

?>