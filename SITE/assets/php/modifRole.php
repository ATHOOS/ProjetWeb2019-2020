<?php

include 'dbAccess.php';

$db = new dbAccess();

$noma = htmlspecialchars($_POST['noma']);
$admin = htmlspecialchars($_POST['admin']);

$modifRole = $db->callProcedure('modifRole',[$noma,$admin]);