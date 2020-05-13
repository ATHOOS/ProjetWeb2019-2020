<?php

include 'dbAccess.php';

$db = new dbAccess();

$recupNewUsers = json_encode($db->callProcedure("recupNewUsers"));