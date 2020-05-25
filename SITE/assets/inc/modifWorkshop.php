<?php
session_start();
include '../php/listeAtelier.php';
$_SESSION['idAtelier'] = $_GET['i'];
include "../php/checkSiDejaDansAtelier.php";
include '../php/checkSiAnimateur.php';
include '../php/checkSiAnnule.php';
include '../php/checkSiDejaCandidat.php';
include '../php/checkCategorie.php';
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
        <p id="workshopModifNomError" style="color:red; display:none">Nom de l'atelier requis</p>

        <div class="row">

            <div class="col-md-8">
                <?php switch($checkCategorie[0]{'sujet'}) {
                    case 'Comptabilité':?>
                    <img class="img-fluid" src="assets/img/comptabilite.jpg">
                <?php
                break;
                    case "Droit":?>
                    <img class="img-fluid" src="assets/img/droit.jpg">
                <?php
                 break;
                    case "Informatique":?>
                    <img class="img-fluid" src="assets/img/informatique.jpg">
                <?php
                 break;
                    case "Marketing":?>
                    <img class="img-fluid" src="assets/img/marketing.jpg">
                <?php
                break;
                    case "Electro-Mecanique":?>
                    <img class="img-fluid" src="assets/img/mecanique.jpg">
                <?php
                break;
                }?>
            </div>

            <div class="col-md-4">
                <h3 class="my-3">Description atelier</h3>
                <div id="description"></div>
                <p id="workshopModifDescError" style="color:red; display:none">Description de l'atelier requise</p>
                <h3 class="my-3">Date de l'atelier</h3>
                <div id="date"></div>
                <p id="workshopModifDateError" style="color:red; display:none">Date de l'atelier requise</p>
                <p id="workshopModifDatePassee" style="color:red; display:none">Il est impossible de faire un bon dans le temps MARTY !!!</p>
                <h3 class="my-3">Sujet de l'atelier</h3>
                <div id="sujet"></div>
                <h3 class="my-3">Nombre de place atelier</h3>
                <div id="nbPlace"></div>
                <p id="WorkshopModifPlaceNegatif" style="color:red; display:none">Le nombre doit être supérieur ou égale à 1</p>
                <p id="WorkshopModifPlaceError" style="color:red; display:none">Places de l'atelier requises</p>
                <h3 class="my-3">Durée de l'atelier</h3>
                <div id="duree"></div>
                <p id="WorkshopModifDureeError" style="color:red; display:none">Durée de l'atelier requises</p>




                <div class="form-group form-button">
                    <input onclick="validerModif($('#nomModifWork').val(),$('#descModifWork').val(),$('#dateModifWork').val(),$('#nbPlaceModifWork').val(),$('#sujetModifWork').val(),<?= $_SESSION['idAtelier'] ?>,$('#dureeModifWork').val())" type="submit" name="signin" id="signin" class="form-submit" value="Valider modifications" />
                </div>
                <div class="form-group form-button">
                    <input onclick="annulerModif(<?= $_SESSION['idAtelier']?>)"type="submit" name="signin" id="signin" class="form-submit" value="Annuler modifications" />
                </div>

            </div>

        </div>

        <script>
            removeClassActive();
            addClassActive('navWorkshops');
            <?php if(isset($_SESSION['matricule'])){?>
                        $('.mobile-nav #lienConnexion').replaceWith('<a href="assets/php/deconnexion.php" id="lienConnexion">Déconnexion</a>');
                    <?php } ?>
        </script>
</main>
<?php
if (!isset($_SESSION['matricule'])) {
    echo ("<script> connexion(); </script>");
}
?>