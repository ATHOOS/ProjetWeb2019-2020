<?php
session_start();
include "dbAccess.php";

$db = new dbAccess();
$mdp = htmlspecialchars(hash('sha256',$_POST['password']));
$login = htmlspecialchars($_POST['login']);

$checkConnexion = $db->callProcedure('checkConnexion',[$login,$mdp]);

if(empty($checkConnexion)){
    echo json_encode("erreurConnexion");
} else{
    $_SESSION['matricule'] = $checkConnexion[0]['matricule'];
    $_SESSION['mail'] = $checkConnexion[0]['mail'];
    $_SESSION['nom'] = $checkConnexion[0]['nom'];
    $_SESSION['prenom'] = $checkConnexion[0]['prenom'];
    $_SESSION['admin'] = $checkConnexion[0]['administration'];
    echo json_encode($_SESSION['prenom']);
    $_SESSION['pageActuel'] = 'profil.php';
}
