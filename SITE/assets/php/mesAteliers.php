<?php

$noma = $_SESSION['matricule'];
include 'dbAccess.php';

$db = new dbAccess();

$mesAteliers = json_encode($db->callProcedure("recupAtelierInscrit", [$noma]));

