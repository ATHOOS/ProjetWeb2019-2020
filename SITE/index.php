<?php

session_start();

?>

<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>EPHEC Workshops</title>
  <meta content="" name="descriptison">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/favicon-16x16.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,600,600i,700,700i" rel="stylesheet">
  <link rel="stylesheet" href="assets/inc/login/fonts/material-icon/css/material-design-iconic-font.min.css">


  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/venobox/venobox.css" rel="stylesheet">
  <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">
  <link rel="stylesheet" href="assets/inc/login/css/loginstyle.css">

  <!-- =======================================================
  * Template Name: Ninestars - v2.0.0
  * Template URL: https://bootstrapmade.com/ninestars-free-bootstrap-3-theme-for-creative/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container-fluid d-flex">

      <div class="logo mr-auto">
        <h1 class="text-light"><a href="#" onclick='accueil()'><span>EPHEC Workshops</span></a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
      </div>
      <?php if (!empty($_SESSION['admin'])) : ?>
        <nav class="nav-menu d-none d-lg-block">
          <ul>
            <li id="navAccueil"><a href="#header" onclick="accueil()">Accueil</a></li>
            <li class="drop-down" id="navWorkshops"><a href="#">Workshops</a>
              <ul>
                <li><a href="#" id="navWorkshopsListe" onclick="workshopsListe()">Liste de workshops</a></li>
                <li><a href="#" id="navWorkshopsCreation" onclick="workshopsCreation()">Création de workshops</a></li>
                <li><a href="#" id="navWorkshopsParticipeListe" onclick="workshopParticipeListe()">Workshops auxquels je participe</a></li>
                <li><a href="#" id="navMesWorkshops" onclick="mesWorkshopsListe()">Mes Workshops</a></li>
              </ul>
            </li>
            <?php if ($_SESSION['admin'] != 1) : ?>
              <li id="navBoiteId" onclick='boiteId()'><a href="">Boite à idées</a></li>
            <?php endif ?>
            <li id="navProfil" onclick='profil()'><a href="">Profil</a></li>
            <?php if ($_SESSION['admin'] == 1) : ?>
              <li id="navAdmin" onclick='adminPage()'><a href="">Administration</a></li>
            <?php endif ?>
            <li id="navConnexion" class="get-started" onclick="connexion()"><a href="" id="lienConnexion">Connexion</a></li>
          </ul>
        </nav><!-- .nav-menu connexion-->
        
      <?php else : ?>
        <nav class="nav-menu d-none d-lg-block">
          <ul>
            <li id="navAccueil"><a href="#header" onclick="accueil()">Accueil</a></li>
            <li class="drop-down" id="navWorkshops"><a href="#">Workshops</a>
              <ul>
                <li><a href="#" id="navWorkshopsListe" onclick="workshopsListe()">Liste de workshops</a></li>
                <li><a href="#" id="navWorkshopsCreation" onclick="workshopsCreation()">Création de workshops</a></li>
                <li><a href="#" id="navWorkshopsParticipeListe" onclick="workshopParticipeListe()">Workshops auxquels je participe</a></li>
                <li><a href="#" id="navMesWorkshops" onclick="mesWorkshopsListe()">Mes Workshops</a></li>
              </ul>
            </li>
            <li id="navBoiteId" onclick='boiteId()'><a href="">Boite à idées</a></li>
            <li id="navProfil" onclick='profil()'><a href="">Profil</a></li>
            <li id="navConnexion" class="get-started" onclick="connexion()"><a href="" id="lienConnexion">Connexion</a></li>
          </ul>
        </nav><!-- .nav-menu -->
      <?php endif ?>
    </div>
  </header><!-- End Header -->

  <div id="content"></div>



  </footer><!-- End Footer -->

  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
  <!-- HEUUUU DE BASE C'EST BOOTSTRAP.BUNDLE.MIN.JS -->
  <script src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>
  
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/venobox/venobox.min.js"></script>
  <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>
  <script src="assets/inc/login/js/loginmain.js"></script>
  <script src="assets/js/myjs.js"></script>
  <script>
    <?php
    if (!isset($_SESSION['pageActuel'])) {
      echo ("$('#content').load('assets/inc/accueil.php');");
    } else {
      echo ("$('#content').load('assets/inc/$_SESSION[pageActuel]');");
    }

    if (isset($_SESSION['matricule'])) {
      echo ("estCo();");
    }

    ?>
  </script>

</body>

</html>