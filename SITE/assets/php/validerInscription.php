<?php 

include 'dbAccess.php';

$db = new dbAccess();

$noma = htmlspecialchars($_POST["noma"]);

$validerInscription = $db->callProcedure("validerInscription", [$noma]);