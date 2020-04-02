<?php

include 'dbAccess.php';

$db = new dbAccess();

$id = $_POST['id'];

$annulerAtelier = $db->callProcedure("annulationAtelierAdmin", [$id]);