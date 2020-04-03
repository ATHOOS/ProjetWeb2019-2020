<?php

include 'dbAccess.php';

$db = new dbAccess();

$nom = htmlspecialchars($_POST["nom"]);
$desc = htmlspecialchars($_POST["desc"]);
$date = htmlspecialchars($_POST["date"]);
$nb = htmlspecialchars($_POST["nomb"]);
$sujet = htmlspecialchars($_POST["sujet"]);
$idAtelier = htmlspecialchars($_POST["idAtelier"]);

echo json_encode($nb);

$modifAtelier = $db->callProcedure('modifAtelier',[$idAtelier,$nom,$desc,$date,$nb,$sujet]);

//echo json_encode($modifAtelier);