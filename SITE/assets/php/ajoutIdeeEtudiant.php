<?php
session_start();
include "dbAccess.php";

$db = new dbAccess();
$nom = htmlspecialchars($_POST['nom']);
$sujet = htmlspecialchars($_POST['sujet']);
$idUser = htmlspecialchars($_POST['idUser']);
$admin = 0;



$ajoutIdeeEtudiant = $db->callProcedure('ajoutIdeeEtudiant',[$nom,$sujet,$idUser,$admin]);