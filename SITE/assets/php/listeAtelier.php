<?php 

include 'dbAccess.php';

$db = new dbAccess();

$recupAtelier = $db->callProcedure("affichageAteliersAnimateur");

json_encode($recupAtelier);