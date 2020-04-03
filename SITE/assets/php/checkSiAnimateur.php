<?php

$noma = htmlspecialchars($_SESSION['matricule']);
$idAtelier = htmlspecialchars(intval($_SESSION['idAtelier']));

$checkSiAnimateur = $db->callProcedure('checkSiAnimateur',[$noma,$idAtelier]);