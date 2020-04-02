<?php

$idAtelier = htmlspecialchars(intval($_SESSION['idAtelier']));

$checkSiAnnule = $db->callProcedure('checkSiAnnule',[$idAtelier]);