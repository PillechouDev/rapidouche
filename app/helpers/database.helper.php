<?php
namespace Helpers;

use PDO;
function getDatabaseConnection(){
    $bdd = new PDO('mysql:host=localhost:3308;dbname=projetsite;charset=utf8','root','');
    return $bdd;
}

?>