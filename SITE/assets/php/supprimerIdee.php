<?php

include 'dbAccess.php';

$db = new dbAccess();

$idIdee = htmlspecialchars($_POST['id']);

if($_SESSION['admin']==1){
    $supprimerIdee = $db->callProcedure('supprimerIdee',[$idIdee]);
}

else{
    echo("Good Try <3");
}
