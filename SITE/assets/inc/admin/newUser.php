<?php
session_start();
$_SESSION['pageActuel'] = 'admin/ezAdministration.php';
include '../../php/newUsers.php';
if(!isset($_SESSION['admin']) or $_SESSION['admin'] == "0"){
    header('Location: http://localhost/ProjetWeb2019-2020/SITE/assets/inc/failed.php');
}
?>
<div class="container">
    <div class="table-wrapper">
        <div class="table-title">
            <div class="row">
                <div class="col-sm-5">
                    <h2>Gestion <b> Nouveaux Utilisateurs</b></h2>
                </div>
            </div>
        </div>
        <div class="table-responsive">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Prénom - Nom</th>
                        <th>Matricule</th>
                        <th>Email</th>
                        <th>Valider inscription</th>
                        <th>Supprimer inscription</th>
                    </tr>
                </thead>
                <tbody id="listeNewUser">

                </tbody>
            </table>
        </div>
        <div class="clearfix">
            <ul class="paginationn">

            </ul>
        </div>
    </div>
</div>
<div id="popup">

</div>

<script>
    var newUsers = <?= $recupNewUsers ?>;
    afficheNewUser(newUsers);
    removeClassActive();
    addClassActive('navAdmin');
    <?php if(isset($_SESSION['matricule'])){?>
                        $('.mobile-nav #lienConnexion').replaceWith('<a href="assets/php/deconnexion.php" id="lienConnexion">Déconnexion</a>');
                    <?php } ?>
</script>