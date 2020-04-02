<?php
session_start();
include '../../php/listeUsers.php';
?>
<div class="container">
    <div class="table-wrapper">
        <div class="table-title">
            <div class="row">
                <div class="col-sm-5">
                    <h2>Gestion <b>Utilisateurs</b></h2>
                </div>
            </div>
        </div>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Prénom - Nom</th>
                    <th>Matricule</th>
                    <th>Rôle</th>
                    <th>Valider changement</th>
                    <th>Supprimer utilisateur</th>
                </tr>
            </thead>
            <tbody id="listeUser">

            </tbody>
        </table>
        <div class="clearfix">
            <ul class="paginationn">

            </ul>
        </div>
    </div>
</div>
<script>
        var allUsers =  <?= $recupAllUsers ?>;
        afficheAllUser(allUsers);
</script>