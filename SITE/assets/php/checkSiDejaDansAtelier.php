
<?php

$noma = htmlspecialchars($_SESSION['matricule']);
$idAtelier = htmlspecialchars(intval($_SESSION['idAtelier']));

$checkSiDejaDansAtelier = $db->callProcedure('checkSiDejaDansAtelier',[$noma,$idAtelier]);

$recupPlacesDispo = $db->callProcedure('recupPlacesDispo',[$idAtelier]);
$recupUnAtelier = $db->callProcedure("recupUnAtelier",[$_SESSION['idAtelier']]);