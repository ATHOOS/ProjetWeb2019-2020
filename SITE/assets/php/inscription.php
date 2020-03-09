<?php

include "dbAccess.php";

$db = new dbAccess();
$noma = $_POST['matricule'];
$Nom = $_POST['Nom'];
$Prenom = $_POST['Prenom'];
$email = $_POST['email'];
$mdp = hash('sha256',$_POST['password']);

$checkInscription = $db->callProcedure('checkInscription',[$email,$noma]);

if(!empty($checkInscription)){
    echo json_encode("NomaOuMailDejaUse");
} else{
    $envoi = $db->callProcedure('creationCompte',[$noma,$Nom,$Prenom,$email,$mdp]);
}