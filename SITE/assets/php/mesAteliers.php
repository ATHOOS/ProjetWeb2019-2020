<?php


include 'dbAccess.php';

$noma = htmlspecialchars($_SESSION['matricule']);

$db = new dbAccess();

$mesAteliers = json_encode($db->callProcedure("recupAtelierInscrit", [$noma]));

