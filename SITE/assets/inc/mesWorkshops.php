<?php
session_start();
$_SESSION['pageActuel']='mesWorkshops.php';
echo $_SESSION['pageActuel'];
?>
<main id="content">



</main>
<script>
    removeClassActive();
    addClassActive('navWorkshops');
</script>