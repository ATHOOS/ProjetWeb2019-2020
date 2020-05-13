<?php 

include 'dbAccess.php';

$db = new dbAccess();

$noma = htmlspecialchars($_POST["noma"]);

$supprimerInscription = $db->callProcedure("supprimerInscription", [$noma]);