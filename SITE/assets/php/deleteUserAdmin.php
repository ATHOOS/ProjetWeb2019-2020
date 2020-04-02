<?php

include 'dbAccess.php';

$db = new dbAccess();

$noma = htmlspecialchars($_POST['noma']);


$suppressionCompte = $db->callProcedure('suppressionCompte',[$noma]);