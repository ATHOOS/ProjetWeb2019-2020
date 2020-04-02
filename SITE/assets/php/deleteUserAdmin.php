<?php

include 'dbAccess.php';

$db = new dbAccess();

$noma = $_POST['noma'];


$suppressionCompte = $db->callProcedure('suppressionCompte',[$noma]);