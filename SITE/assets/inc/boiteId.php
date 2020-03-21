<?php
session_start();
$_SESSION['pageActuel']='boiteId.php';
?>
<main id="content">


<script>
    removeClassActive();
    addClassActive('navBoiteId');
</script>
</main>

<?php 
    if(!isset($_SESSION['matricule'])){
        echo("<script> connexion(); </script>");
    }
?>