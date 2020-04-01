<?php 

include 'dbAccess.php';

$db = new dbAccess();

$recupAtelier = json_encode($db->callProcedure("affichageAteliersAnimateur"));