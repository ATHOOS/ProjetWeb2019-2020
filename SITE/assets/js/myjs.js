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
    $('#content').load("assets/inc/login/connexion.html");

    removeClassActive();


}

function creeCompte() {
    $('#content').load("assets/inc/login/inscription.html");

}

function dejaMembre() {
    $('#content').load("assets/inc/login/connexion.html");

}

function accueil() {
    $('#content').load("assets/inc/accueil.html");

    removeClassActive();
    addClassActive('navAccueil');
}

function workshops() {
    $('#content').load("assets/inc/workshops.html");

    removeClassActive();
    addClassActive('navWorkshops');
}

function boiteId() {
    $('#content').load("assets/inc/boiteId.html");

    removeClassActive();
    addClassActive('navBoiteId');
}

function profil() {
    $('#content').load("assets/inc/profil.html");

    removeClassActive();
    addClassActive('navProfil');
}


//form check

function checkConnexion() {
    return false;
}

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
    //console.log(a);

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