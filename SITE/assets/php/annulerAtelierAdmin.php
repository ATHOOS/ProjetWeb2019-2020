<?php

include 'dbAccess.php';

$db = new dbAccess();

$id = htmlspecialchars($_POST['id']);

$annulerAtelier = $db->callProcedure("annulationAtelierAdmin", [$id]);