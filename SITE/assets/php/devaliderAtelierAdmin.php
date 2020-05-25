<?php
session_start();
include 'dbAccess.php';

$db = new dbAccess();

$id = htmlspecialchars($_POST['id']);

if($_SESSION['admin']==1){
    $devaliderAtelier = $db->callProcedure("devaliderAtelierAdmin", [$id]);
}

else{
    echo("Good Try <3");
}