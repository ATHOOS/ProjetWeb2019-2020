<?php
session_start();
include 'dbAccess.php';

$db = new dbAccess();

$nom = htmlspecialchars($_POST["nom"]);
$desc = htmlspecialchars($_POST["desc"]);
$date = htmlspecialchars($_POST["date"]);
$nb = htmlspecialchars($_POST["nomb"]);
$sujet = htmlspecialchars($_POST["sujet"]);
$idAtelier = htmlspecialchars($_POST["idAtelier"]);

$checkAtelierUser = $db->callProcedure('checkAtelierUser',[$idAtelier,$_SESSION['matricule']]);

if(!empty($checkAtelierUser)){
    $modifAtelier = $db->callProcedure('modifAtelier',[$idAtelier,$nom,$desc,$date,$nb,$sujet]);
}else {
    echo json_encode('pasBon');
}
