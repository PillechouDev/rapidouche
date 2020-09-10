<?php

namespace Models;

use function Helpers\getDataBaseConnection;

function getUserMoneyWater(){
    $bdd = getDataBaseConnection();
    $query = $bdd -> prepare('SELECT user.moneysaved, user.watersaved FROM user WHERE user.id =:token');
    $query -> execute([
        "token"=>$_SESSION['token']
    ]);
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

function newUser($mail,$token){
    $bdd = getDataBaseConnection();
    $query = $bdd -> prepare('INSERT INTO user(token,mail) VALUES(:token,:mail)');
    $query -> execute([
        "token"=> $token,
        "mail" =>$mail
    ]);
    
}