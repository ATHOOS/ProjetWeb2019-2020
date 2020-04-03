<?php
session_start();
include '../php/listeAtelier.php';
$_SESSION['idAtelier'] = $_GET['i'];
include "../php/checkSiDejaDansAtelier.php";
include '../php/checkSiAnimateur.php';
include '../php/checkSiAnnule.php';
include '../php/checkSiDejaCandidat.php';
include '../php/unAtelier.php';
$nom = "'" . $recupUnAtelier[0]{'nom'} . "'";
$desc ="'" . $recupUnAtelier[0]{'description'} . "'";
$date ="'" . $recupUnAtelier[0]{'date'} . "'";
$nb="'" . $recupUnAtelier[0]{'nbrPlaces'} . "'";
$sujet="'" . $recupUnAtelier[0]{'sujet'} . "'";
$id ="'" . $recupUnAtelier[0]{'idAtelier'} . "'";
echo $nom
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
              <div class="form-group form-button">
                <button onclick="afficheModifAtelier(<?= $nom ?>,<?= $desc ?>,<?= $date ?>,<?= $nb ?>,<?= $sujet ?>,<?= $id ?>)" type="button" name="signin" id="signin" class="form-submit">Modifier workshop</button>
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