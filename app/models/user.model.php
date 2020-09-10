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

function getConnection($token){
    $bdd = getDataBaseConnection();
    $query = $bdd -> prepare('SELECT user.token FROM user where user.token=:token');
    $query -> execute([
        "token"=> $token
    ]);
    $results = $query -> fetch();
    return $results;
}

function newUser($mail,$token,$name){
    $bdd = getDataBaseConnection();
    $query = $bdd -> prepare('INSERT INTO user(token,mail,name) VALUES(:token,:mail,:name)');
    $query -> execute([
        "token"=> $token,
        "mail" =>$mail,
        "name" => $name
    ]);
}