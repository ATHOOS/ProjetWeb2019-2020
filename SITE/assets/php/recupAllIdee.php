<?php
include "dbAccess.php";

$db = new dbAccess();



$recupAllIdee = json_encode($db->callProcedure('recupAllIdee'));
