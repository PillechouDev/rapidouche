<?php
namespace Helpers;

function getRenderer(){
    $loader = new \Twig\Loader\FilesystemLoader('app/views');
    $twig = new \Twig\Environment($loader
    );

    return $twig;
}

?>