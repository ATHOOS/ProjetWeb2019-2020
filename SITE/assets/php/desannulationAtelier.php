<?php
session_start();
include_once "dbAccess.php";

$db = new dbAccess();
$noma = htmlspecialchars($_SESSION['matricule']);
$idAtelier = htmlspecialchars(intval($_SESSION['idAtelier']));

$desannulationAtelier = $db->callProcedure('desannulationAtelier',[$idAtelier,$noma]);

if(empty($noma)){
    echo ("NoConnecte");
} else{
    header('Location: http://localhost/ProjetWeb2019-2020/SITE/');
}