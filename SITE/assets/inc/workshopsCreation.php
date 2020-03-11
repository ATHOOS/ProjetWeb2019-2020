<?php
session_start();
$_SESSION['pageActuel'] = 'workshops.php';
echo $_SESSION['pageActuel'];
?>
<main id="content">
    <?php
    session_start();
    $_SESSION['pageActuel'] = 'workshopsCreation.php';
    ?>
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
                                    <input type="text" name="workshop_nom" id="workshop_nom" placeholder="Adresse mail ou matricule" />
                                </div>
                                <div class="form-group">
                                    <label for="workshop_desc"><i class="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="workshop_desc" id="workshop_desc" placeholder="Mot de passe" />
                                </div>
                                <div class="form-group">
                                    <label for="workshop_date"><i class="zmdi zmdi-lock"></i></label>
                                    <input type="date" name="workshop_date" id="workshop_date" placeholder="Mot de passe" />
                                </div>
                                <div class="form-group">
                                    <label for="workshop_nbrPlaces"><i class="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="workshop_nbrPlaces" id="workshop_nbrPlaces" placeholder="Mot de passe" />
                                </div>
                                <div class="form-group">
                                    <label for="workshop_animateur"><i class="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="workshop_animateur" id="workshop_animateur" placeholder="Mot de passe" />
                                </div>
                                <div class="form-group">
                                    <label for="workshop_terminer"><i class="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="workshop_terminer" id="workshop_terminer" placeholder="Mot de passe" />
                                </div>
                                <div class="form-group form-button">
                                    <input type="submit" name="signin" id="signin" class="form-submit" value="Création" onclick="checkAtelier()" />
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
    addClassActive('navWorkshops');
</script>