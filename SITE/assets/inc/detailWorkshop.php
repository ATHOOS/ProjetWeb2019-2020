<?php
session_start();
include '../php/listeAtelier.php';
include "../php/checkSiDejaDansAtelier.php";
$_SESSION['idAtelier'] = $_GET['i'];
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

    <!-- Portfolio Item Row -->
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