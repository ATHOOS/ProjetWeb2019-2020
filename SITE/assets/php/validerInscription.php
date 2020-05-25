<?php 
session_start();
include 'dbAccess.php';

$db = new dbAccess();

$noma = htmlspecialchars($_POST["noma"]);

if($_SESSION['admin']==1){
    $validerInscription = $db->callProcedure("validerInscription", [$noma]);
}
else{
    echo("Good Try <3");
}
