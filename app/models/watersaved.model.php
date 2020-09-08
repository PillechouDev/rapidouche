<?php

namespace Models;

use function Helpers\getDataBaseConnection;

function getUserWater(){
    $bdd = getDataBaseConnection();
    $query = $bdd -> prepare('SELECT user.water FROM user ;');
    $query -> execute();
    $results = $query -> fetchAll();
    return $results;
}