<?php

$noma = $_SESSION['matricule'];
include 'dbAccess.php';

$db = new dbAccess();

$liste = json_encode($db->callProcedure("mesWorkshops", [$noma]));

