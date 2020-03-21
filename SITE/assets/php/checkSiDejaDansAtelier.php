
<?php

$noma = $_SESSION['matricule'];
$idAtelier = intval($_SESSION['idAtelier']);

$checkSiDejaDansAtelier = $db->callProcedure('checkSiDejaDansAtelier',[$noma,$idAtelier]);
