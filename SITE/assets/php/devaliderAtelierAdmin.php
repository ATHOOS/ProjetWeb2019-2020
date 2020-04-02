<?php

include 'dbAccess.php';

$db = new dbAccess();

$id = $_POST['id'];

$devaliderAtelier = $db->callProcedure("devaliderAtelierAdmin", [$id]);