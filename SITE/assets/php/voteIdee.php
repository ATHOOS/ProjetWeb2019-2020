<?php
session_start();
include "dbAccess.php";

$db = new dbAccess();
$idIdee = htmlspecialchars($_POST['idIdee']);
$etat = htmlspecialchars($_POST['etat']);
$idUser = htmlspecialchars($_POST['idUser']);

$checkUserIdee = $db->callProcedure('checkUserIdee',[$idIdee, $idUser]);

if(empty($checkUserIdee)){
    $ajoutVotePour = $db->callProcedure('voteIdee',[$idIdee,$etat,$idUser]);
}

else{
    $modifEtatVote = $db->callProcedure('modifEtatVote',[$checkUserIdee[0]{'idVote'}, $etat]);
}



