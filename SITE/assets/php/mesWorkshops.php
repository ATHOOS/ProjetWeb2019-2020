<?php


include 'dbAccess.php';

$noma = htmlspecialchars($_SESSION['matricule']);

$db = new dbAccess();

$liste = json_encode($db->callProcedure("mesWorkshops", [$noma]));

