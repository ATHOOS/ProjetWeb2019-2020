<?php

include "dbAccess.php";

$db = new dbAccess();
$Nom = $_POST['Nom'];
$Description = $_POST['Description'];
$Date = $_POST['Date'];
$Nombre_de_places = $_POST['Nombre_de_places'];
$Animateur = $_POST['Animateur'];

echo json_encode($Animateur);

$envoi = $db->callProcedure('ajoutAtelier',[$Nom,$Description,$Date,$Nombre_de_places,$Animateur]);
