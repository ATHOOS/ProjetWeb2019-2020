<?php

$idAtelier = intval($_SESSION['idAtelier']);

$checkSiAnnule = $db->callProcedure('checkSiAnnule',[$idAtelier]);