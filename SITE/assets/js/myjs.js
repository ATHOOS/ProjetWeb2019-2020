//layout

function removeClassActive() {
    $('#navAccueil').removeClass('active');
    $('#navWorkshops').removeClass('active');
    $('#navBoiteId').removeClass('active');
    $('#navProfil').removeClass('active');

}

function addClassActive(p) {
    p += '';
    $('#' + p).addClass('active');
}

function connexion() {
    $('#content').load("assets/inc/login/connexion.php");

    removeClassActive();


}

function creeCompte() {
    $('#content').load("assets/inc/login/inscription.php");

}

function dejaMembre() {
    $('#content').load("assets/inc/login/connexion.php");

}

function accueil() {
    $('#content').load("assets/inc/accueil.php");

    removeClassActive();
    addClassActive('navAccueil');
}

function workshops() {
    $('#content').load("assets/inc/workshops.php");

    removeClassActive();
    addClassActive('navWorkshops');
}

function boiteId() {
    $('#content').load("assets/inc/boiteId.php");

    removeClassActive();
    addClassActive('navBoiteId');
}

function profil() {
    $('#content').load("assets/inc/profil.php");

    removeClassActive();
    addClassActive('navProfil');
}

function estCo(){
    $('#navConnexion').html('<a href="" id="lienConnexion">Déconnexion</a>');
    $("#navConnexion").prop("onclick", null).off("click");

}


//form check

//inscription

function checkInscription() {
    let a = 1;
    event.preventDefault();
    if ($('#matricule').val() == '') {
        $('#matricule').attr('placeholder', 'Matricule requis');
        a = 0;
    }

    if ($('#nom').val() == '') {
        $('#nom').attr('placeholder', 'Nom requis');
        a = 0;
    }

    if ($('#prenom').val() == '') {
        $('#prenom').attr('placeholder', 'Prenom requis');
        a = 0;
    }

    if ($('#email').val() == '') {
        $('#email').attr('placeholder', 'Email requis');
        a = 0;
    }

    if ($('#pass').val() == '') {
        $('#pass').attr('placeholder', 'Mot de passe requis');
        a = 0;
    }


    if ($('#re_pass').val() == '') {
        $('#re_pass').attr('placeholder', 'Veuillez entrer une nouvelle fois votre mot de passe');
        a = 0;
    }

    if ($('#re_pass').val() !== $('#pass').val()) {
        $('#re_pass').attr('placeholder', 'Les mots de passe ne sont pas identique');
        $('#pass').attr('placeholder', 'Les mots de passe ne sont pas identique');
        a = 0;
    }

    if (a === 1) {
        let objectForm = { 'matricule': $('#matricule').val(), 'Nom': $('#nom').val(), 'Prenom': $('#prenom').val(), 'email': $('#email').val(), 'password': $('#pass').val() };
        console.log(objectForm);
        $.ajax({
            url: "assets/php/inscription.php",
            type: "POST",
            data: objectForm,
            datatype: "json",
            success: function (response) {
                if (response === '"NomaOuMailDejaUse"') {
                    console.log("marche pas");
                }
                else {
                    console.log('inscr OK');
                    console.log(response);
                }
            }
        });
    }

}


//connexion

function checkConnexion() {
    let a = 1;
    event.preventDefault();
    if ($('#your_login').val() == '') {
        $('#your_login').attr('placeholder', 'Email ou matricule requis');
        a = 0;
    }

    if ($('#your_pass').val() == '') {
        $('#your_pass').attr('placeholder', 'Mot de passe requis');
        a = 0;
    }

    if (a === 1) {
        let objectForm = { 'login': $('#your_login').val(), 'password': $('#your_pass').val() };
        //console.log(objectForm);
        $.ajax({
            url: "assets/php/connexion.php",
            type: "POST",
            data: objectForm,
            datatype: "json",
            success: function (response) {
                console.log(response);
            }
        });

        profil();

    }


}

