<?php
session_start();
include_once "dbAccess.php";

$db = new dbAccess();
$noma = $_SESSION['matricule'];
$idAtelier = intval($_SESSION['idAtelier']);

$desannulationAtelier = $db->callProcedure('desannulationAtelier',[$idAtelier,$noma]);

if(empty($noma)){
    echo ("NoConnecte");
} else{
    header('Location: http://localhost/ProjetWeb2019-2020/SITE/');
}