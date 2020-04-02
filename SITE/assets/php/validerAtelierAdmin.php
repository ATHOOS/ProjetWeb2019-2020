<?php

include 'dbAccess.php';

$db = new dbAccess();

$id = $_POST['id'];

$validerAtelier = $db->callProcedure("validerAtelierAdmin", [$id]);