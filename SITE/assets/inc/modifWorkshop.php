<?php
session_start();
include '../php/listeAtelier.php';
$_SESSION['idAtelier'] = $_GET['i'];
include "../php/checkSiDejaDansAtelier.php";
include '../php/checkSiAnimateur.php';
include '../php/checkSiAnnule.php';
include '../php/checkSiDejaCandidat.php';
?>

<script>
    afficheInput();
</script>

<main id="content" style="margin-top:6em">
    <!-- Page Content -->
    <div class="container">

        <!-- Portfolio Item Heading -->

        <h1 class="my-4">
            <div id="nom"></div>
        </h1>

        <div class="row">

            <div class="col-md-8">
                <img class="img-fluid" src="http://placehold.it/750x500" alt="">
            </div>

            <div class="col-md-4">
                <h3 class="my-3">Description atelier</h3>
                <div id="description"></div>
                <h3 class="my-3">Date de l'atelier</h3>
                <div id="date"></div>
                <h3 class="my-3">Sujet de l'atelier</h3>
                <div id="sujet"></div>
                <h3 class="my-3">Nombre de place atelier</h3>
                <div id="nbPlace"></div>




                <div class="form-group form-button">
                    <input onclick="validerModif()" type="submit" name="signin" id="signin" class="form-submit" value="Valider modifications" />
                </div>
                <div class="form-group form-button">
                    <input onclick="annulerModif(<?= $_SESSION['idAtelier']?>)"type="submit" name="signin" id="signin" class="form-submit" value="Annuler modifications" />
                </div>

            </div>

        </div>

        <script>
            removeClassActive();
            addClassActive('navWorkshops');
        </script>
</main>
<?php
if (!isset($_SESSION['matricule'])) {
    echo ("<script> connexion(); </script>");
}
?>