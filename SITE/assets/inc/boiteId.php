<?php
session_start();
$_SESSION['pageActuel'] = 'boiteId.php';
include '../php/recupAllIdee.php';
?>

<script>
    removeClassActive();
    addClassActive('navBoiteId');
</script>

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
<main id="content" style="margin-top:6em">

    <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-5">
                        <h2>Boite à idées <b>Professeurs</b></h2>
                    </div>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Proposition de</th>
                            <th>Titre</th>
                            <th>Sujet</th>
                            <th>Voter oui</th>
                            <th>Voter non</th>
                            <th>% avis</th>
                            <th>Total avis</th>
                        </tr>
                    </thead>
                    <tbody id="listeIdeesProfs">

                    </tbody>
                </table>
            </div>
            <div class="row text-center mb-7">
                <div class="col-lg-1 mx-auto">
                    <br>
                    <div class="paginationnIdeesProfs">

                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>

    <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-5">
                        <h2>Boite à idées <b>Etudiants</b></h2>
                    </div>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Proposition de</th>
                            <th>Titre</th>
                            <th>Sujet</th>
                            <th>Voter oui</th>
                            <th>Voter non</th>
                            <th>% avis</th>
                            <th>Total avis</th>
                        </tr>
                    </thead>
                    <tbody id="listeIdeesEtudiants">

                    </tbody>
                </table>
            </div>
            <div class="row text-center mb-7">
                <div class="col-lg-1 mx-auto">
                    <br>
                    <div class="paginationnIdeesEtudiants">

                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>

    <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-5">
                        <h2>Proposer une <b>Idée</b></h2>
                    </div>
                </div>
            </div>
            <input class="col-md-5" type="text" id="newIdeeStudent" placeholder="Rentrez votre idée" />
            <select id="sujetNewIdeeStudent">
                <option value="Comptabilité">Comptabilité</option>
                <option value="Marketing">Marketing</option>
                <option value="Informatique">Informatique</option>
                <option value="Electro-mécanique">Electro-mécanique</option>
                <option value="Droit">Droit</option>
            </select>
            <button onclick="addIdeeEtudiant($('#newIdeeStudent').val(), $('#sujetNewIdeeStudent').val(),'<?= $_SESSION['matricule'] ?>' )">Proposer mon idée</button>
        </div>
    </div>



</main>
<script>
    var allIdee = <?= $recupAllIdee ?>;
    var idUser = '<?= $_SESSION['matricule']; ?>';
    afficheAllIdee(allIdee);
</script>
<?php
if (!isset($_SESSION['matricule'])) {
    echo ("<script> connexion(); </script>");
}
?>