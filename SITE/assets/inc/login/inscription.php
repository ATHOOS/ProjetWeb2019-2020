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
                                <p id="nonMatricule" style="color:red; display:none">Matricule requis</p>
                                <p id="badMatricule" style="color:red; display:none">Ce matricule n'est pas de l'EPHEC</p>
                            </div>
                            <div class="form-group">
                                <label for="nom"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="nom" id="nom" placeholder="Votre nom"/>
                                <p id="nonNom" style="color:red; display:none">Nom requis</p>
                            </div>
                            <div class="form-group">
                                <label for="prenom"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="prenom" id="prenom" placeholder="Votre prénom"/>
                                <p id="nonPrenom" style="color:red; display:none">Prenom requis</p>
                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Votre adresse mail"/>
                                <p id="nonEmail" style="color:red; display:none">Email requis</p>
                                <p id="emailInvalide" style="color:red; display:none">L'email n'est pas valide</p>
                            </div>
                            <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Mot de passe"/>
                                <p id="nonPassword" style="color:red; display:none">Mot de passe requis</p>
                            </div>
                            <div class="form-group">
                                <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Répeter mot de passe"/>
                                <p id="nonRePassword" style="color:red; display:none">Confirmation de mot de passe requise</p>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                <label for="agree-term" class="label-agree-term"><span><span></span></span>J'accepte toutes les conditions d'utilisations  <br><a href="#" class="term-service">Termes d'utilisation</a></label>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signup" id="signup" class="form-submit" value="S'inscrire" onclick="checkInscription()"/>
                            </div>
                            <p id="mdpNotSame" style="color:red; display:none">Les deux mots de passes doivent être identiques</p>
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