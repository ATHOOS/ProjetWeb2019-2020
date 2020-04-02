
<?php

$noma = htmlspecialchars($_SESSION['matricule']);
$idAtelier = htmlspecialchars(intval($_SESSION['idAtelier']));

$checkSiDejaDansAtelier = $db->callProcedure('checkSiDejaDansAtelier',[$noma,$idAtelier]);
