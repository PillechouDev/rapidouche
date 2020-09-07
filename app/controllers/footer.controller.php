<?php
namespace Controllers; 

use function Helpers\getRenderer;
use function Models\getMDJ;


function getFooterController(){
    
    $twig = getRenderer();
    
    echo $twig ->render('footer.html');
    
    
}
?>