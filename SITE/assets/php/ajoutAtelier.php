<?php
session_start();
include "dbAccess.php";

$db = new dbAccess();
$Nom = htmlspecialchars($_POST['Nom']);
$Description = htmlspecialchars($_POST['Description']);
$Date = htmlspecialchars($_POST['Date']);
$Nombre_de_places = htmlspecialchars($_POST['Nombre_de_places']);
$Animateur = htmlspecialchars($_SESSION['matricule']);
$Sujet = htmlspecialchars($_POST['Sujet']);
$Duree = htmlspecialchars($_POST['Duree']);

echo json_encode($Animateur);

$envoi = $db->callProcedure('ajoutAtelier',[$Nom,$Description,$Date,$Nombre_de_places,$Animateur,$Sujet,$Duree]);

$_SESSION['pageActuel'] = "workshopsListe.php";

header('Location: http://localhost/ProjetWeb2019-2020/SITE/');
