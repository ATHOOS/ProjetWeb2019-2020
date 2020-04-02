<?php
session_start();
include "dbAccess.php";

$db = new dbAccess();
$noma = htmlspecialchars($_SESSION['matricule']);
$idAtelier = htmlspecialchars(intval($_SESSION['idAtelier']));

$candidatureAtelier = $db->callProcedure('candidatureAtelier',[$noma,$idAtelier]);

if(empty($noma)){
    echo ("NoConnecte");
} else{
    header('Location: http://localhost/ProjetWeb2019-2020/SITE/');
}
