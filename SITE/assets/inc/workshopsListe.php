<?php
session_start();
$_SESSION['pageActuel'] = 'workshopsListe.php';
include '../php/listeAtelier.php';
?>
<main id="content">
    <div class="container py-5" id="listeAteliers">

        <!-- For demo purpose -->
        <div class="row text-center mb-5">
            <div class="col-lg-7 mx-auto">
                <h1>Listes des workshops</h1>
            </div>
        </div>
        <div class="row text-center mb-5">
            <div class="col-lg-7 mx-auto">
                <form id="filtreAtelier">
                    <!--label>Filtrer les ateliers</label-->
                    <select id="sujet">
                    <option value="">Aucun</option>
                        <option value="Comptabilité">Comptabilité</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Informatique">Informatique</option>
                        <option value="Electro-mécanique">Electro-mécanique</option>
                        <option value="Droit">Droit</option>
                    </select>
                    <button type="button" onclick="filtrerAtelier($('#sujet').val(), tabAteliers);">Filtrer les ateliers</button>
                </form>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-8 mx-auto">

                <!-- List group-->
                <ul class="list-group shadow" id="itemAtelier">
                    
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
    <script>
        var tabAteliers =  <?= $recupAtelier ?>;
        $(document).ready(filtrerAtelier($('#sujet').val(), tabAteliers));
        <?php if(isset($_SESSION['matricule'])){?>
                        $('.mobile-nav #lienConnexion').replaceWith('<a href="assets/php/deconnexion.php" id="lienConnexion">Déconnexion</a>');
                    <?php } ?>
    </script>
</main>