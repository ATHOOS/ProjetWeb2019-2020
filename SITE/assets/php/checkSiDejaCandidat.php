<?php

$noma = $_SESSION['matricule'];
$idAtelier = intval($_SESSION['idAtelier']);

$checkSiDejaCandidat = $db->callProcedure('checkSiDejaCandidat',[$noma,$idAtelier]);