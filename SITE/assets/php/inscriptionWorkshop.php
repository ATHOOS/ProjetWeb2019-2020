<?php
session_start();
include "dbAccess.php";

$db = new dbAccess();
$noma = $_SESSION['matricule'];
$idAtelier = intval($_SESSION['idAtelier']);


$inscriptionAtelier = $db->callProcedure('inscriptionAtelier',[$noma,$idAtelier]);

if(empty($noma)){
    echo ("NoConnecte");
} else{
    header('Location: http://localhost/ProjetWeb2019-2020/SITE/');
}

