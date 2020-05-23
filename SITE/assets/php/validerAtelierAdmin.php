<?php

include 'dbAccess.php';

$db = new dbAccess();

$id = htmlspecialchars($_POST['id']);



if($_SESSION['admin']==1){
    $validerAtelier = $db->callProcedure("validerAtelierAdmin", [$id]);
}

else{
    echo("Good Try <3");
}