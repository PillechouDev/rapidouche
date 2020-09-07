<?php

require_once __DIR__. '/vendor/autoload.php';

use function Controllers\getMainController;

session_start();
getMainController();
//Controllers\getMaintenanceController();
?>