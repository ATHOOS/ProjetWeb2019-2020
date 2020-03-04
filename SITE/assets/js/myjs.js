//layout

function removeClassActive(){
    $('#navAccueil').removeClass('active');
    $('#navWorkshops').removeClass('active');
    $('#navBoiteId').removeClass('active');
    $('#navProfil').removeClass('active');
    $('#navAbout').removeClass('active');
    $('#navContact').removeClass('active');
    
}

function addClassActive(p){
    p+='';
    $('#'+p).addClass('active');
}

function connexion(){
    $('#content').load("assets/inc/login/connexion.html");

    removeClassActive();


}

function creeCompte(){
    $('#content').load("assets/inc/login/inscription.html");

}

function dejaMembre(){
    $('#content').load("assets/inc/login/connexion.html");

}

function accueil(){
    $('#content').load("assets/inc/accueil.html");

    removeClassActive();
    addClassActive('navAccueil');
}

function workshops(){
    $('#content').load("assets/inc/workshops.html");

    removeClassActive();
    addClassActive('navWorkshops');
}

function boiteId(){
    $('#content').load("assets/inc/boiteId.html");

    removeClassActive();
    addClassActive('navBoiteId');
}

function profil(){
    $('#content').load("assets/inc/profil.html");

    removeClassActive();
    addClassActive('navProfil');
}

function about(){

    removeClassActive();
    addClassActive('navAbout');
}

function contact(){

    removeClassActive();
    addClassActive('navContact');
}