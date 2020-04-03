<?php
session_start();
include 'dbAccess.php';

$db = new dbAccess();

$id = htmlspecialchars($_POST["id"]);

echo json_encode($recupPlacesDispo = $db->callProcedure('recupPlacesDispo',[$id]));
