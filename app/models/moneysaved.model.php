<?php

namespace Models;

use function Helpers\getDataBaseConnection;

function getUserMoney(){
    $bdd = getDataBaseConnection();
    $query = $bdd -> prepare('SELECT user.money FROM user ;');
    $query -> execute();
    $results = $query -> fetchAll();
    return $results;
}