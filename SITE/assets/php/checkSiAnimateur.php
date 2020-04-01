<?php

$noma = $_SESSION['matricule'];
$idAtelier = intval($_SESSION['idAtelier']);

$checkSiAnimateur = $db->callProcedure('checkSiAnimateur',[$noma,$idAtelier]);