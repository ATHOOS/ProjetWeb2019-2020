<?php
session_start();
$_SESSION['pageActuel']='login/connexion.php';
?>
<div id="content">
    <div class="main">
        <section class="sign-in">
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src="assets/inc/login/images/signin-image.jpg" alt="sing up image"></figure>
                        <a href="#" class="signup-image-link" onclick='creeCompte()'>Créer un compte</a>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Connexion</h2>
                        <form method="POST" class="register-form" id="login-form">
                            <div class="form-group">
                                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="your_login" id="your_login" placeholder="Adresse mail ou matricule"/>
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Mot de passe"/>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit" value="Connexion" onclick="checkConnexion()"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>