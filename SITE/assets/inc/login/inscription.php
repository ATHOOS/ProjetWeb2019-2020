<?php
session_start();
$_SESSION['pageActuel']='login/inscription.php';
?>
<div id="content">
    <div class="main">
        <section class="signup">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">Inscription</h2>
                        <form method="post" class="register-form" id="register-form" action="#">
                            <div class="form-group">
                                <label for="matricule"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="matricule" id="matricule" placeholder="Votre matricule"/>
                            </div>
                            <div class="form-group">
                                <label for="nom"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="nom" id="nom" placeholder="Votre nom"/>
                            </div>
                            <div class="form-group">
                                <label for="prenom"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="prenom" id="prenom" placeholder="Votre prénom"/>
                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Votre adresse mail"/>
                            </div>
                            <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Mot de passe"/>
                            </div>
                            <div class="form-group">
                                <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Répeter mot de passe"/>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                <label for="agree-term" class="label-agree-term"><span><span></span></span>J'accepte toutes les conditions d'utilisations  <br><a href="#" class="term-service">Termes d'utilisation</a></label>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signup" id="signup" class="form-submit" value="S'inscrire" onclick="checkInscription()"/>
                            </div>
                        </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src="assets/inc/login/images/signup-image.jpg" alt="sing up image"></figure>
                        <a href="#" class="signup-image-link" onclick="dejaMembre()">Je possède déjà un compte</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>