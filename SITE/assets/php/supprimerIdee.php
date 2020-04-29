<?php

include 'dbAccess.php';

$db = new dbAccess();

$idIdee = htmlspecialchars($_POST['id']);


$supprimerIdee = $db->callProcedure('supprimerIdee',[$idIdee]);