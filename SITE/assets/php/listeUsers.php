<?php 

include 'dbAccess.php';

$db = new dbAccess();

$recupAllUsers = json_encode($db->callProcedure("recupUsers"));