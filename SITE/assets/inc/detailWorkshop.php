<?php
session_start();
include '../php/listeAtelier.php';
$id = $_GET['i'];
$fullDate = $recupAtelier[$id]{
'date'};
$_SESSION['idAtelier'] = $recupAtelier[$id]{
'idAtelier'};
include "../php/checkSiDejaDansAtelier.php";
include '../php/checkSiAnimateur.php';
include '../php/checkSiAnnule.php';
include '../php/checkSiDejaCandidat.php';
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
        <img class="img-fluid" src="http://placehold.it/750x500" alt="">
      </div>

      <div class="col-md-4">
        <h3 class="my-3">Description atelier</h3>
        <p id="description"></p>
        <h3 class="my-3">Date de l'atelier</h3>
        <ul>
          <li id="date"></li>
          <li id="heure"></li>

        </ul>
        <?php if(!empty($checkSiAnimateur)) { ?>
          <?php if(!empty($checkSiAnnule)) { ?>
            <form id="annulationWorkshop" method="post" action="assets/php/annulationAtelier.php">
              <div class="form-group form-button">
                <input type="submit" name="signin" id="signin" class="form-submit" value="Annuler workshop"/>
              </div>
            </form>
          <?php } else  { ?>
            <form id="desannulationWorkshop" method="post" action="assets/php/desannulationAtelier.php">
              <div class="form-group form-button">
                <input type="submit" name="signin" id="signin" class="form-submit" value="Reprogrammer workshop"/>
              </div>
            </form>
          <?php } ?>
        <?php } else { ?>
          <?php if(empty($checkSiDejaCandidat)) { ?>
            <form id="proposerCandidature" method="post" action="assets/php/candidatureAtelier.php">
              <div class="form-group form-button">
                <input type="submit" name="signin" id="signin" class="form-submit" value="Proposer sa candidature"/>
              </div>
            </form>
          <?php } else { ?>
            <form id="retirerCandidature" method="post" action="assets/php/retirerCandidature.php">
              <div class="form-group form-button">
                <input type="submit" name="signin" id="signin" class="form-submit" value="Retirer sa candidature"/>
              </div>
            </form>
          <?php } ?>
        <?php } ?>
        <?php if (empty($checkSiDejaDansAtelier)) { ?>
          <form id="inscriptionWorkshop" method="post" action="assets/php/inscriptionWorkshop.php">
            <div class="form-group form-button">
              <input type="submit" name="signin" id="signin" class="form-submit" value="S'inscrire à ce workshop"/>
            </div>
          </form>
        <?php } else { ?>
          <form id="inscriptionWorkshop" method="post" action="assets/php/desinscriptionWorkshop.php">
            <div class="form-group form-button">
              <input type="submit" name="signin" id="signin" class="form-submit" value="Se désinscrire de ce workshop"/>
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