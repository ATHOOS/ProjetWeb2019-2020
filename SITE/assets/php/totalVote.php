<?php
session_start();
include "dbAccess.php";

$db = new dbAccess();
$idIdee = htmlspecialchars($_POST['idIdee']);




$recupNbIdeePour = $db->callProcedure('recupVotePour',[$idIdee]);
$recupNbIdeeContre = $db->callProcedure('recupVoteContre',[$idIdee]);

if(empty($recupNbIdeePour)){
    $pour= 0;
}
else{
    $pour = $recupNbIdeePour[0]['0'];
}
if(empty($recupNbIdeeContre)){
    $contre= 0;
}
else{
    $contre = $recupNbIdeeContre[0]['0'];
}


$total = $pour + $contre;

echo json_encode($total);