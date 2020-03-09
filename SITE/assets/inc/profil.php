<?php
session_start();
?>
<main id="content">
    <div class="main">
        <section class="signup">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">Profil</h2>
                        <form method="post" class="register-form" id="register-form" action="#">
                            <div class="form-group">
                                <label for="matricule"><i class="zmdi zmdi-account material-icons-name"></i> Matricule</label>
                                <br>
                                <br>
                                <br>
                                <input type="text" name="matricule" id="matricule" readonly value=<?php echo $_SESSION['matricule']; ?>/>
                            </div>
                            <div class="form-group">
                                <label for="nom"><i class="zmdi zmdi-account material-icons-name"></i> Nom</label>
                                <br>
                                <br>
                                <br>
                                <input type="text" name="nom" id="nom" readonly value=<?php echo $_SESSION['nom']; ?>/>
                            </div>
                            <div class="form-group">
                                <label for="prenom"><i class="zmdi zmdi-account material-icons-name"></i> Prénom</label>
                                <br>
                                <br>
                                <br>
                                <input type="text" name="prenom" id="prenom" readonly value=<?php echo $_SESSION['prenom']; ?>/>
                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i> Email</label>
                                <br>
                                <br>
                                <br>
                                <input type="email" name="email" id="email" readonly value=<?php echo $_SESSION['mail']; ?>/>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    </div>

</main>