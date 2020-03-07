<?php

include "dbAccess.php";

$db = new dbAccess();
$noma = $_POST['matricule'];
$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$email = $_POST['email'];
$mdp = $_POST['password'];

$checkInscription = $db->callProcedure('checkInscription',[$noma,$email]);

if(!empty($checkInscription)){
    echo json_encode("NomaOuMailDejaUse");
} else{
    $db->callProcedure('creationCompte',[$noma,$nom,$prenom,$email,$mdp]);
    echo json_encode("CompteCree");
}