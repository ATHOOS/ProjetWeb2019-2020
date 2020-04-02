<?php
session_start();
include '../../php/listeAtelier.php';
?>
<div class="container">
    <div class="table-wrapper">
        <div class="table-title">
            <div class="row">
                <div class="col-sm-5">
                    <h2>Gestion <b>Ateliers</b></h2>
                </div>
            </div>
        </div>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Titre</th>
                    <th>Sujet</th>
                    <th>Animateur</th>
                    <th>Date</th>
                    <th>Valider l'atelier</th>
                    <th>Annuler l'atelier</th>
                </tr>
            </thead>
            <tbody id="listeAtelier">

            </tbody>
        </table>
        <div class="clearfix">
            <ul class="paginationn">

            </ul>
        </div>
    </div>
</div>
<div id="popupAtelier">
    
</div>

<script>
        var allAteliers =  <?= $recupAtelier ?>;
        afficheAllAteliers(allAteliers);
</script>