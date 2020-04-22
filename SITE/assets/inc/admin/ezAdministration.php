<?php
session_start();
$_SESSION['pageActuel'] = 'admin/ezAdministration.php';
?>

<!doctype html>
<html lang="fr">

<head>
  <title>Outils d'administration</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="assets/inc/admin/css/style.css">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bootstrap User Management Data Table</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link href="assets/css/boiteId.css" rel="stylesheet">
  <script type="text/javascript">
    $(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  </script>
</head>

<body>

  <div class="wrapper d-flex align-items-stretch">
    <nav id="sidebar">
      <div class="p-4 pt-5">
        <a href="#" class="img logo rounded-circle mb-5" style="background-image: url(assets/inc/admin/images/logo.jpg);"></a>
        <ul class="list-unstyled components mb-5">
          <li class="active">
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Outils d'administration</a>
            <ul class="collapse list-unstyled" id="homeSubmenu">

              <li>
                <a href="#" id="annulation" onclick="annulationAtelier()">Gestion atelier</a>
              </li>
              <li>
                <a href="#" id="droit" onclick="gestionDroits()">Gestion des droits</a>
              </li>
              <li>
                <a href="#" id="propIdee" onclick="propIdee()">Proposer une idée d'atelier</a>
              </li>
            </ul>

            <div class="footer">
              <p>
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                Copyright &copy;2020 All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              </p>
            </div>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">

        <button type="button" id="sidebarCollapse" class="btn btn-primary">
          <i class="fa fa-bars"></i>
          <span class="sr-only">Toggle Menu</span>
        </button>

      </div>
    </nav>

    <!-- Page Content  -->
    <div id="content" class="p-4 p-md-5">
      <div id='contentAdminPage'>
        <h2 class="mb-4">Bienvenue dans votre interface d'administration</h2>
        <p>
          Veuillez sélectionner dans le menu de gauche à quel outil d'administration vous voulez accèder.
        </p>

      </div>
    </div>
  </div>


  <script src="assets/inc/admin/js/popper.js"></script>
  <script src="assets/inc/admin/js/main.js"></script>
  <script>
    removeClassActive();
    addClassActive('navAdmin');
  </script>
</body>

</html>