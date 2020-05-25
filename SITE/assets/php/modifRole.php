<?php
session_start();
include 'dbAccess.php';

$db = new dbAccess();

$noma = htmlspecialchars($_POST['noma']);
$admin = htmlspecialchars($_POST['admin']);

if($_SESSION['admin']==1){
    $modifRole = $db->callProcedure('modifRole',[$noma,$admin]);
}

else{
    echo("Good Try <3");
}