<?php

include 'dbAccess.php';

$db = new dbAccess();

$id = htmlspecialchars($_POST['id']);

$devaliderAtelier = $db->callProcedure("devaliderAtelierAdmin", [$id]);