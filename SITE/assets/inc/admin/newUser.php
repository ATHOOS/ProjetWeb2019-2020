<?php
session_start();
$_SESSION['pageActuel'] = 'admin/ezAdministration.php';
include '../../php/newUsers.php';
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
</script>