<?php

include 'dbAccess.php';

$db = new dbAccess();

$id = htmlspecialchars($_POST['id']);


if($_SESSION['admin']==1){
    $annulerAtelier = $db->callProcedure("annulationAtelierAdmin", [$id]);
}

else{
    echo("Good Try <3");
}