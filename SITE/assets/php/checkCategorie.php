<?php

$idAtelier = htmlspecialchars(intval($_SESSION['idAtelier']));

$checkCategorie = $db->callProcedure('checkCategorie',[$idAtelier]);