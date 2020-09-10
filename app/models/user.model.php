<?php

namespace Models;

use function Helpers\getDataBaseConnection;

function getUserMoneyWater(){
    $bdd = getDataBaseConnection();
    $query = $bdd -> prepare('SELECT user.moneysaved, user.watersaved FROM user WHERE user.id = "1" ;');
    $query -> execute();
    $results = $query -> fetchAll();
    return $results;
}