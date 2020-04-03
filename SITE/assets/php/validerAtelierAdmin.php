<?php

include 'dbAccess.php';

$db = new dbAccess();

$id = htmlspecialchars($_POST['id']);

$validerAtelier = $db->callProcedure("validerAtelierAdmin", [$id]);