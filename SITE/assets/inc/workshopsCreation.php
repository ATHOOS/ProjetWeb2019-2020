<?php
session_start();
$_SESSION['pageActuel'] = 'workshopsCreation.php';
echo $_SESSION['pageActuel'];
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
                                    <label for="workshop_nom"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="workshop_nom" id="workshop_nom" placeholder="Nom de l'atelier" />
                                </div>
                                <div class="form-group">
                                    <label for="workshop_desc"><i class="zmdi zmdi-lock"></i></label>
                                    <input type="text" name="workshop_desc" id="workshop_desc" placeholder="Description de l'atelier" />
                                </div>
                                <div class="form-group">
                                    <label for="workshop_date"><i class="zmdi zmdi-lock"></i></label>
                                    <input type="date" name="workshop_date" id="workshop_date" />
                                    <span id="error_date" style="display : none; color : red">Date incorrecte</span>
                                </div>
                                <div class="form-group">
                                    <label for="workshop_nbrPlaces"><i class="zmdi zmdi-lock"></i></label>
                                    <input type="text" name="workshop_nbrPlaces" id="workshop_nbrPlaces" placeholder="Nombre de place" />
                                </div>
                                <div class="form-group">
                                    <label for="workshop_animateur"><i class="zmdi zmdi-lock"></i></label>
                                    <input type="text" name="workshop_animateur" id="workshop_animateur" placeholder="Matricule de l'animateur" />
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


</main>
<script>
    removeClassActive();
    addClassActive('navWorkshops');
</script>