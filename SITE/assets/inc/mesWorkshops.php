<?php
session_start();
$_SESSION['pageActuel'] = 'mesWorkshops.php';
include '../php/mesWorkshops.php';
?>


<main id="content">
  <div class="container py-5" id="listeAteliers">

    <!-- For demo purpose -->
    <div class="row text-center mb-5">
      <div class="col-lg-7 mx-auto">
        <h1>Mes workshops</h1>
      </div>
    </div>
    <!-- End -->

    <div class="row">
      <div class="col-lg-8 mx-auto">

        <!-- List group-->
        <ul class="list-group shadow" id="itemMesAteliers">

        </ul>

        <!-- End -->
      </div>
    </div>
    <div class="row text-center mb-7">
      <div class="col-lg-1 mx-auto">
        <br>
        <div class="paginationn">

        </div>
      </div>
    </div>
  </div>
  </div>
  <script>
        var maListe =  <?= $liste ?>;
        $(document).ready(mesWorkshops(maListe));

  </script>

</main>
<?php
if (!isset($_SESSION['matricule'])) {
  echo ("<script> connexion(); </script>");
}
?>