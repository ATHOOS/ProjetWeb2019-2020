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
if($total === 0){
    echo json_encode('Pas de vote');
}
else{
    $poucentagePour = ($pour/$total) * 100;
    echo json_encode($poucentagePour);
}










