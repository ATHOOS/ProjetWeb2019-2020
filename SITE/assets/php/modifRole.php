<?php

include 'dbAccess.php';

$db = new dbAccess();

$noma = $_POST['noma'];
$admin = $_POST['admin'];

$modifRole = $db->callProcedure('modifRole',[$noma,$admin]);