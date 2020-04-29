<?php

include "dbAccess.php";

$db = new dbAccess();
$noma = htmlspecialchars(strtoupper($_POST['matricule']));
$Nom = htmlspecialchars($_POST['Nom']);
$Prenom = htmlspecialchars($_POST['Prenom']);
$email = htmlspecialchars($_POST['email']);
$mdp = htmlspecialchars(hash('sha256',$_POST['password']));

$checkInscription = $db->callProcedure('checkInscription',[$email,$noma]);

if(!empty($checkInscription)){
    echo json_encode("NomaOuMailDejaUse");
} else{
    $envoi = $db->callProcedure('creationCompte',[$noma,$Nom,$Prenom,$email,$mdp]);
    $_SESSION['pageActuel'] = "connexion.php";
    header('Location: http://localhost/ProjetWeb2019-2020/SITE/');
}