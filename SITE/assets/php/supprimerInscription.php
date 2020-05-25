<?php 
session_start();
include 'dbAccess.php';

$db = new dbAccess();

$noma = htmlspecialchars($_POST["noma"]);

if($_SESSION['admin']==1){
    $supprimerInscription = $db->callProcedure("supprimerInscription", [$noma]);
}

else{
    echo("Good Try <3");
}
