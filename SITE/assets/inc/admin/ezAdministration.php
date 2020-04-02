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
                    <a href="#" id="annulation" onclick="annulationAtelier()">Annulation atelier</a>
                </li>
                <li>
                    <a href="#" id="validation" onclick="validationAtelier()">Validation atelier</a>
                </li>
                <li>
                    <a href="#" id="droit" onclick="gestionDroits()">Gestion des droits</a>
                </li>
	              <li>
	                  <a href="#" id="contrat" onclick="generationContrats()">Génération de contrat</a>
                </li>
                <li>
	                  <a href="#" id="sondage" onclick="sondage()">Sondage</a>
	              </li>
	        </ul>
          
	        <div class="footer">
	        	<p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
						  Copyright &copy;2020 All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
						  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
	        </div>

	      </div>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">

            <button type="button" id="sidebarCollapse" class="btn btn-primary">
              <i class="fa fa-bars"></i>
              <span class="sr-only">Toggle Menu</span>
            </button>
            <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars"></i>
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
  </body>
</html>