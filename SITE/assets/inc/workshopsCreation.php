<?php
session_start();
$_SESSION['pageActuel'] = 'workshopsCreation.php';
?>
<main id="content">
    <div id="content">
        <div class="main">
            <section class="sign-in">
                <div class="container">
                    <div class="signin-content">
                        <div class="signin-image">
                            <figure><img src="assets/img/CreaWorkshop.jpeg" alt="sing up image"></figure>
                        </div>

                        <div class="signin-form">
                            <h2 class="form-title">Création de workshop</h2>
                            <form method="POST" class="createWorkshop-form" id="createWorkshop-form">
                                <div class="form-group">
                                    <label for="workshop_nom"></label>
                                    <input type="text" name="workshop_nom" id="workshop_nom" placeholder="Nom de l'atelier" />                                  
                                </div>
                                <p id="workshopNomError" style="color:red; display:none">Nom de l'atelier requis</p>
                                <br>
                                <div class="form-group">
                                    <label for="workshop_desc"></label>
                                    <input type="text" name="workshop_desc" id="workshop_desc" placeholder="Description de l'atelier" />
                                </div>
                                <p id="workshopDescError" style="color:red; display:none">Description de l'atelier requise</p>
                                <div class="form-group">
                                    <label for="workshop_date">Date et heure de l'atelier</label>
                                    <br>
                                    <br>
                                    <input type="datetime-local" name="workshop_date" id="workshop_date" />
                                    <span id="error_date" style="display : none; color : red">Date incorrecte</span>
                                </div>
                                <p id="workshopDateError" style="color:red; display:none">Date de l'atelier requise</p>
                                <p id="workshopDatePassee" style="color:red; display:none">Il est impossible de faire un bon dans le temps MARTY !!!</p>
                                <br>
                                <div class="form-group">
                                    <label for="workshop_nbrPlaces"></label>
                                    <input type="number" min="1" name="workshop_nbrPlaces" id="workshop_nbrPlaces" placeholder="Nombre de place" />
                                </div>
                                <p id="WorkshopPlaceError" style="color:red; display:none">Places de l'atelier requises</p>
                                <p id="WorkshopPlaceNegatif" style="color:red; display:none">Le nombre doit être supérieur ou égale à 1</p>
                                <div class="form-group">
                                    <label for="workshop_duree">Durée (hh:mm)</label>
                                    <br>
                                    <br>
                                    <input type="time" name="workshop_duree" id="workshop_duree" />
                                    <span id="error_date" style="display : none; color : red">Durée incorrecte</span>
                                </div>
                                <p id="workshopDureeError" style="color:red; display:none">Durée de l'atelier requise</p>
                                <br>
                                <div class="form-group">
                                    <label for="workshop_animateur">Sélectionnez un sujet :</label></br></br>
                                    <select name="workshop_animateur" id="workshop_sujet">
                                        <option value="Comptabilité">Comptabilité</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Informatique">Informatique</option>
                                        <option value="Electro-mécanique">Electro-mécanique</option>
                                        <option value="Droit">Droit</option>
                                    </select>
                                </div>
                                <div class="form-group form-button">
                                    <input type="submit" name="signin" id="signin" class="form-submit" value="Création" onclick="ajoutAtelier()" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
<script>
    removeClassActive();
    addClassActive('navWorkshops');
    <?php if(isset($_SESSION['matricule'])){?>
                        $('.mobile-nav #lienConnexion').replaceWith('<a href="assets/php/deconnexion.php" id="lienConnexion">Déconnexion</a>');
                    <?php } ?>
</script>

</main>
<?php 
    if(!isset($_SESSION['matricule'])){
        echo("<script> connexion(); </script>");
    }
?>