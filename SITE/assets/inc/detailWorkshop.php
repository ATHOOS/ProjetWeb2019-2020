<?php
session_start();
include '../php/listeAtelier.php';
$_SESSION['idAtelier'] = $_GET['i'];
include "../php/checkSiDejaDansAtelier.php";
include '../php/checkSiAnimateur.php';
include '../php/checkSiAnnule.php';
include '../php/checkSiDejaCandidat.php';
include '../php/checkCategorie.php'
?>

<script>
  detailsWorkshop();
</script>

<main id="content" style="margin-top:6em">
  <!-- Page Content -->
  <div class="container">

    <!-- Portfolio Item Heading -->


    <h1 class="my-4">
      <span id="nom"></span>
    </h1>

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
        <p id="description"></p>
        <h3 class="my-3">Date de l'atelier</h3>
        <ul>
          <li id="date"></li>
          <li id="heure"></li>
        </ul>
        <h3 class="my-3">Duree de l'atelier</h3>
        <p id="duree"></p>
        <div style="display:none">
          <h3 class="my-3">Places dispos</h3>
          <p id="places"></p>
        </div>
        <?php if(empty($checkSiDejaDansAtelier)) { ?>
          <?php if(empty($recupPlacesDispo)) { ?>
            <form id="inscriptionWorkshop" method="post" action="assets/php/inscriptionWorkshop.php">
              <div class="form-group form-button">
                <input type="submit" name="signin" id="signin" class="form-submit" value="S'inscrire à ce workshop" />
              </div>
            </form>
          <?php }else { ?>
            <?php if($recupPlacesDispo[0]{'0'} < $recupUnAtelier[0]{'nbrPlaces'}) { ?>
              <form id="inscriptionWorkshop" method="post" action="assets/php/inscriptionWorkshop.php">
                <div class="form-group form-button">
                  <input type="submit" name="signin" id="signin" class="form-submit" value="S'inscrire à ce workshop" />
                </div>
              </form>
            <?php }else { ?>
              <div class="form-group form-button">
                <input type="submit" name="signin" id="signin" class="form-submit" value="Complet" />
              </div>
            <?php } ?>
            <?php } ?>
        <?php } else { ?>
          <form id="inscriptionWorkshop" method="post" action="assets/php/desinscriptionWorkshop.php">
            <div class="form-group form-button">
              <input type="submit" name="signin" id="signin" class="form-submit" value="Se désinscrire de ce workshop" />
            </div>
          </form>
        <?php } ?>
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