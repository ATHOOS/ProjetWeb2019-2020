<?php 

include 'dbAccess.php';

$db = new dbAccess();

$nbAtelierPage = 4;
$checkNbAtelier = $db->callProcedure("checkNbAtelier");
$intNbAteliers = intval($checkNbAtelier{0}[0]);
$intnbPages = ceil($intNbAteliers / $nbAtelierPage);
echo ($intNbAteliers);
var_dump($checkNbAtelier);

if (isset($_GET['p']) && $_GET['p'] > 0 && $_GET['p'] <= $intnbPages) {
    $numPage = $_GET['p'];
} else {
    $numPage = 1;
}

$param = ($numPage - 1) * $nbAtelierPage;

$recupAtelier = $db->callProcedure("affichageAteliersAnimateur", [$nbAtelierPage, $param]);

var_dump($recupAtelier);