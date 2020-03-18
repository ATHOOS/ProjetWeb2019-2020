<?php 

include 'dbAccess.php';

$db = new dbAccess();

$recupAtelier = $db->callProcedure("affichageAteliersAnimateur");

//echo json_encode($recupAtelier);
