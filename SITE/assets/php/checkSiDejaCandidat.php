<?php

$noma = htmlspecialchars($_SESSION['matricule']);
$idAtelier = htmlspecialchars(intval($_SESSION['idAtelier']));

$checkSiDejaCandidat = $db->callProcedure('checkSiDejaCandidat',[$noma,$idAtelier]);
