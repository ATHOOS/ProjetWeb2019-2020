<?php

include 'dbAccess.php';

$db = new dbAccess();

$noma = htmlspecialchars($_POST['noma']);



if($_SESSION['admin']==1){
    $suppressionCompte = $db->callProcedure('suppressionCompte',[$noma]);
}

else{
    echo("Good Try <3");
}