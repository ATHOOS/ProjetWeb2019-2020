<?php

$noma = $_SESSION['matricule'];
include 'dbAccess.php';

$db = new dbAccess();

$mesAteliers = $db->callProcedure("recupAtelierInscrit", [$noma]);

