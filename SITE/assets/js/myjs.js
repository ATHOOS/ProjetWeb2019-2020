//layout

function removeClassActive() {
    $('#navAccueil').removeClass('active');
    $('.mobile-nav #navAccueil').removeClass('active');
    $('#navWorkshops').removeClass('active');
    $('.mobile-nav #navWorkshops').removeClass('active');
    $('#navBoiteId').removeClass('active');
    $('.mobile-nav #navBoiteId').removeClass('active');
    $('#navProfil').removeClass('active');
    $('.mobile-nav #navProfil').removeClass('active');
    $('#navAdmin').removeClass('active');
    $('.mobile-nav #navAdmin').removeClass('active');

}

function removeClassActiveAdmin() {
    $('#annulation').removeClass('active');
    $('#validation').removeClass('active');
    $('#droit').removeClass('active');
    $('#contrat').removeClass('active');
    $('#propIdee').removeClass('active');
    $('#newUser').removeClass('active');

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
    $('.mobile-nav #navAccueil').addClass('active');
}

function workshopsListe() {
    $('#content').load("assets/inc/workshopsListe.php");

    removeClassActive("navWorkshopsListe");
    addClassActive('navWorkshops');
    $('.mobile-nav #navWorkshops').addClass('active');
}

function workshopsCreation() {
    $('#content').load("assets/inc/workshopsCreation.php");

    removeClassActive();
    addClassActive('navWorkshops');
    $('.mobile-nav #navWorkshops').addClass('active');
}

function workshopParticipeListe() {
    $('#content').load("assets/inc/workshopParticipe.php");

    removeClassActive();
    addClassActive('navWorkshops');
    $('.mobile-nav #navWorkshops').addClass('active');
}

function mesWorkshopsListe() {
    $('#content').load("assets/inc/mesWorkshops.php");

    removeClassActive();
    addClassActive('navWorkshops');
    $('.mobile-nav #navWorkshops').addClass('active');
}

function boiteId() {
    $('#content').load("assets/inc/boiteId.php");

    removeClassActive();
    addClassActive('navBoiteId');
    $('.mobile-nav #navBoiteId').addClass('active');
}

function profil() {
    $('#content').load("assets/inc/profil.php");

    removeClassActive();
    addClassActive('navProfil');
    $('.mobile-nav #navProfil').addClass('active');
}


function detailWorkshop(p, tab) {
    $('#content').load("assets/inc/detailWorkshop.php");
    detailsWorkshop(tab);

}

function adminPage() {
    $('#content').load("assets/inc/admin/ezAdministration.php");
    removeClassActive();
    addClassActive('navAdmin');

}

function estCo() {
    $('#navConnexion').html('<a href="assets/php/deconnexion.php" id="lienConnexion">Déconnexion</a>');
    $("#navConnexion").prop("onclick", null).off("click");

}

function annulationAtelier() {
    removeClassActiveAdmin();
    addClassActive('annulation');
    $('#contentAdminPage').load('assets/inc/admin/annulationAtelier.php');
}

function gestionDroits() {
    removeClassActiveAdmin();
    addClassActive('droit');
    $('#contentAdminPage').load('assets/inc/admin/droitUtilisateur.php');
}

function propIdee() {
    removeClassActiveAdmin();
    addClassActive('propIdee');
    $('#contentAdminPage').load('assets/inc/admin/propIdee.php');
}

function newUser(){
    removeClassActiveAdmin();
    addClassActive('newUser');
    $('#contentAdminPage').load('assets/inc/admin/newUser.php');
}


//form check

//inscription

//Cette fonction vérifie les différents champs input de l'inscription pour vérifier si tout est remplis et conforme
//erreurForm doit valoir 1 à la fin, cela sinifie qu'il n'y a pas eu d'erreur dans le formulaire

function checkInscription() {
    let erreurForm = 1;
    event.preventDefault();
    if ($('#matricule').val() == '') {
        $('#nonMatricule').show();
        erreurForm = 0;
    } else {
        let matricule = ($('#matricule').val()).toUpperCase();
        if (validateMatricule(matricule) === false) {
            $('#badMatricule').show();
            erreurForm = 0;
        } else {
            $('#badMatricule').hide();
        }
        $('#nonMatricule').hide();
    }



    if ($('#nom').val() == '') {
        $('#nonNom').show();

        erreurForm = 0;
    } else {
        $('#nonNom').hide();

    }


    if ($('#prenom').val() == '') {
        $('#nonPrenom').show();

        erreurForm = 0;
    } else {
        $('#nonPrenom').hide();

    }

    if ($('#email').val() == '') {
        $('#nonEmail').show();
        erreurForm = 0;
    } else {
        $('#nonEmail').hide();
    }

    if ($('#pass').val() == '') {
        $('#nonPassword').show();
        erreurForm = 0;
    } else {
        $('#nonPassword').hide();
    }

    if ($('#re_pass').val() == '') {
        $('#nonRePassword').show();
        erreurForm = 0;
    } else {
        $('#nonRePassword').hide();
    }

    if ($('#re_pass').val() !== $('#pass').val()) {
        $('#mdpNotSame').show();
        erreurForm = 0;
    } else {
        $('#mdpNotSame').hide();
    }


    if (erreurForm === 1) {
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


//Vérifie si le matricule commence par HE et est suivis par 6 chiffres
function validateMatricule(matricule) {
    let re = /HE\d\d\d\d\d\d/;
    return re.test(matricule);
}


//connexion


//Cette fonction vérifie les différents champs input de la connexion pour vérifier si tout est remplis et conforme
//erreurForm doit valoir 1 à la fin, cela sinifie qu'il n'y a pas eu d'erreur dans le formulaire
function checkConnexion() {
    let erreurForm = 1;
    event.preventDefault();
    if ($('#your_login').val() == '') {
        $('#pseudoError').show();
        erreurForm = 0;
    } else {
        $('#pseudoError').hide();
    }

    if ($('#your_pass').val() == '') {
        $('#mdpError').show();
        erreurForm = 0;
    } else {
        $('#mdpError').hide();
    }

    if (erreurForm === 1) {
        let objectForm = { 'login': $('#your_login').val(), 'password': $('#your_pass').val() };
        //console.log(objectForm);
        $.ajax({
            url: "assets/php/connexion.php",
            type: "POST",
            data: objectForm,
            datatype: "json",
            success: function (response) {
                if (response === '"erreurConnexion"') {
                    $('#connexionError').show();
                }
                else {
                    location.reload();
                    $('#connexionError').hide();
                    profil();
                    $('.mobile-nav #lienConnexion').replaceWith('<a href="assets/php/deconnexion.php" id="lienConnexion">Déconnexion</a>');
                }
            }
        });

    }


}


//verification formulaire atelier

//Cette fonction vérifie les différents champs input de l'ajout d'atelier pour vérifier si tout est remplis et conforme
//erreurForm doit valoir 1 à la fin, cela sinifie qu'il n'y a pas eu d'erreur dans le formulaire

function ajoutAtelier() {
    let erreurForm = 1;
    let currentDate = new Date();
    event.preventDefault();
    if (($('#workshop_nom').val() == '') || ($('#workshop_nom').val().indexOf('"') != -1)) {
        $('#workshopNomError').show();
        erreurForm = 0;
    } else {
        $('#workshopNomError').hide();
    }

    if (($('#workshop_desc').val() == '') || ($('#workshop_desc').val().indexOf('"') != -1)) {
        $('#workshopDescError').show();
        erreurForm = 0;
    } else {
        $('#workshopDescError').hide();
    }


    let datefull = new Date();

    if ((datefull).getDate() < 10) {
        jours = '0' + (datefull).getDate();
    } else {
        jours = (datefull).getDate();
    }
    if (((datefull).getMonth() + 1) < 10) {
        mois = '0' + ((datefull).getMonth() + 1);
    } else {
        mois = (datefull).getMonth() + 1;
    }
    if ((datefull).getHours() < 10) {
        heure = '0' + (datefull).getHours();
    } else {
        heure = (datefull).getHours();
    }
    if ((datefull).getMinutes() < 10) {
        minutes = '0' + (datefull).getMinutes();
    } else {
        minutes = (datefull).getMinutes();
    }

    let date2 = (datefull).getFullYear() + "-" + mois + "-" + jours + "T" + heure + ':' + minutes;
    let dateRecup = new Date($('#workshop_date').val());

    if ((dateRecup).getDate() < 10) {
        jours2 = '0' + (dateRecup).getDate();
    } else {
        jours2 = (dateRecup).getDate();
    }
    if (((dateRecup).getMonth() + 1) < 10) {
        mois2 = '0' + ((dateRecup).getMonth() + 1);
    } else {
        mois2 = (dateRecup).getMonth() + 1;
    }
    if ((dateRecup).getHours() < 10) {
        heure2 = '0' + (dateRecup).getHours();
    } else {
        heure2 = (dateRecup).getHours();
    }
    if ((dateRecup).getMinutes() < 10) {
        minutes2 = '0' + (dateRecup).getMinutes();
    } else {
        minutes2 = (dateRecup).getMinutes();
    }
    let date = (dateRecup).getFullYear() + "-" + mois2 + "-" + jours2 + "T" + heure2 + ':' + minutes2;


    if ($('#workshop_date').val() == '') {

        $('#workshopDateError').show();
        erreurForm = 0;
    } else {
        if (date2 > date) {
            $('#workshopDateError').hide();
            $('#workshopDatePassee').show();
            erreurForm = 0;
        } else {
            $('#workshopDateError').hide();
            $('#workshopDatePassee').hide();
        }

    }

    if ($('#workshop_nbrPlaces').val() == '') {
        $('#WorkshopPlaceError').show();
        erreurForm = 0;
    } else {
        if ($('#workshop_nbrPlaces').val() <= 1) {
            $('#WorkshopPlaceError').hide();
            $('#WorkshopPlaceNegatif').show();
            erreurForm = 0;
        }
        else {
            $('#WorkshopPlaceError').hide();
            $('#WorkshopPlaceNegatif').hide();
        }
    }

    if ($('#workshop_duree').val() == '') {
        $('#workshopDureeError').show();
        erreurForm = 0;
    }

    if (erreurForm === 1) {
        let objectForm = { 'Nom': $('#workshop_nom').val(), 'Description': $('#workshop_desc').val(), 'Date': $('#workshop_date').val(), 'Nombre_de_places': $('#workshop_nbrPlaces').val(), 'Sujet': $('#workshop_sujet').val(), 'Duree': $('#workshop_duree').val() };
        console.log(objectForm);
        $.ajax({
            url: "assets/php/ajoutAtelier.php",
            type: "POST",
            data: objectForm,
            datatype: "json",
            success: function (response) {
                if (response === '"NomaOuMailDejaUse"') {
                    console.log("marche pas");
                }
                else {
                    console.log('inscr OK');
                }
            }
        });
    }

}


////////////////////////////////////////////////////////GESTION DE L'AFFICHAGE DES WORKSHOPS/////////////////////////////////////////////////////////
var nbAteliers;
var nbAteliers2;
var tabEnvoi = new Array();
var tabEnvoi2 = new Array();
var month = new Array();
month[0] = "janvier";
month[1] = "février";
month[2] = "mars";
month[3] = "avril";
month[4] = "mai";
month[5] = "juin";
month[6] = "juillet";
month[7] = "aout";
month[8] = "septembre";
month[9] = "octobre";
month[10] = "novembre";
month[11] = "décembre";

var tnom;
var tdesc;
var tdate2;
var tnb;
var tsujet;

function filtrerAtelier(sujet, tab) {
    $('#itemAtelier').empty();
    $('.paginationn').empty();
    nbAteliers = 1;
    nbAteliers2 = 1;
    let ret = "";
    let ret2 = "";
    tabEnvoi = new Array();
    tabEnvoi2 = new Array();
    let indexAtelier = 0;


    for (i = 0; i < tab.length; i++) {
        if (tab[i]['validation'] === '1') {
            let datefull = new Date(tab[i]['date']);
            let date = (datefull).getDate() + " " + (month[(datefull).getMonth()]) + " " + (datefull).getFullYear();
            let heure = (datefull).getHours() + 'h' + (datefull).getMinutes();

            if (tab[i]['sujet'] === sujet) {
                tabEnvoi[i] = tab[i];

            } else {
                tabEnvoi2[i] = tab[i];
            }
            let tnom = tab[i]['nom'];
            if (tab[i]['sujet'] === sujet) {
                let test;
                $.ajax({
                    async: false,
                    url: "assets/php/recupPlacesDispo.php",
                    type: "POST",
                    data: {
                        "id": tab[i]['idAtelier']
                    },
                    datatype: "json",
                    success: function (response) {
                        nbPlace = JSON.parse(response);
                        if (nbPlace[0] === undefined) {
                            test = 0;
                        } else {
                            test = nbPlace[0][0];
                        }
                    }
                });
                let nbPlacesDispos = tab[i]['nbrPlaces'] - test;
                ret += '<li class="list-group-item" id="' + tab[i]['sujet'] + '">';
                ret += '<div class="media align-items-lg-center flex-column flex-lg-row p-3">';
                ret += '<div class="media-body order-2 order-lg-1">';
                ret += '<a>';
                ret += '<h5 class="mt-0 font-weight-bold mb-2" onclick="loadWorkshop('
                    + indexAtelier + ','
                    + '\"' + tab[i]['nom'] + '\",'
                    + '\"' + tab[i]['description'] + '\",'
                    + '\"' + tab[i]['date'] + '\",'
                    + '\"' + tab[i]['nbrPlaces'] + '\",'
                    + '\"' + tab[i]['sujet'] + '\",'
                    + '\"' + tab[i]['idAtelier'] + '\",'
                    + '\"' + tab[i]['duree'] + '\");">'
                    + tab[i]['nom'] + '</h5>';
                ret += ' </a>';
                ret += '<p class="font-italic text-muted mb-0 small">' + tab[i]['description'] + '</p>';
                ret += '<div class="d-flex align-items-center justify-content-between mt-1">';
                ret += '<h6 class="font-weight-bold my-2">' + date + ' ' + heure + '</h6>';
                ret += '<h7 class="font-weight-bold my-2">' + nbPlacesDispos + '/' + tab[i]['nbrPlaces'] + ' Places disponibles</h7>';
                ret += '<h7 class="font-weight-bold my-2">Duree :' + tab[i]['duree'] + '</h7>';
                ret += '</div>';
                ret += '</div>';
                ret += '<img src="assets/img/comptabilite.jpg" class="ml-lg-5 order-lg-2">';
                ret += '</div>';
                ret += '</li>';
                nbAteliers++;

            } else {
                let test;
                $.ajax({
                    async: false,
                    url: "assets/php/recupPlacesDispo.php",
                    type: "POST",
                    data: {
                        "id": tab[i]['idAtelier']
                    },
                    datatype: "json",
                    success: function (response) {

                        nbPlace = JSON.parse(response);
                        if (nbPlace[0] === undefined) {
                            test = 0;
                        } else {
                            test = nbPlace[0][0];
                        }

                    }
                });
                let nbPlacesDispos = tab[i]['nbrPlaces'] - test;
                ret2 += '<li class="list-group-item" id="' + tab[i]['sujet'] + '">';
                ret2 += '<div class="media align-items-lg-center flex-column flex-lg-row p-3">';
                ret2 += '<div class="media-body order-2 order-lg-1">';
                ret2 += '<a>';
                ret2 += '<h5 class="mt-0 font-weight-bold mb-2" onclick="loadWorkshop('
                    + indexAtelier++ + ','
                    + '\'' + tab[i]['nom'] + '\','
                    + '\'' + tab[i]['description'] + '\','
                    + '\'' + tab[i]['date'] + '\','
                    + '\'' + tab[i]['nbrPlaces'] + '\','
                    + '\'' + tab[i]['sujet'] + '\','
                    + '\'' + tab[i]['idAtelier'] + '\','
                    + '\'' + tab[i]['duree'] + '\');">'
                    + tab[i]['nom'] + '</h5>';
                ret2 += ' </a>';
                ret2 += '<p class="font-italic text-muted mb-0 small">' + tab[i]['description'] + '</p>';
                ret2 += '<div class="d-flex align-items-center justify-content-between mt-1">';
                ret2 += '<h6 class="font-weight-bold my-2">' + date + ' ' + heure + '</h6>';
                ret2 += '<h7 class="font-weight-bold my-2">' + nbPlacesDispos + '/' + tab[i]['nbrPlaces'] + ' Places disponibles</h7>';
                ret2 += '<h7 class="font-weight-bold my-2">Duree :' + tab[i]['duree'] + '</h7>';
                ret2 += '<img src="assets/img/comptabilite.jpg" class="ml-lg-5 order-lg-2" style="max-width: 10em">';
                ret2 += '</div>';

                ret2 += '</div>';
                ret2 += '</li>';
                nbAteliers2++;
            }
        }
    }

    if ($('#sujet').val() != "") {
        $('#itemAtelier').append(ret);
        paginationAtelier(nbAteliers);
    }
    else {
        $('#itemAtelier').append(ret2);
        paginationAtelier(nbAteliers2);
    }

}


function paginationAtelier(nAt) {
    let limitePage = 4;
    let nbPages = Math.ceil(nAt / limitePage);
    removeClassActive();
    addClassActive('navWorkshops');
    $("#itemAtelier .list-group-item:gt(" + (limitePage - 1) + ")").hide();
    $(".paginationn").append("<li class='page-item active current-page'><a href='javascript:void(0)' class='page-link'>" + 1 + "</a></li>");
    for (let i = 2; i <= nbPages; i++) {
        $(".paginationn").append("<li class='page-item current-page'><a href='javascript:void(0)' class='page-link'>" + i + "</a></li>");
    }
    $(".current-page").on("click", function () {
        if ($(this).hasClass("active")) {
            return false;
        } else {
            let currentPage = ($(this).index()) + 1;
            $(".paginationn li").removeClass("active");
            $(this).addClass("active");
            $(".list-group-item").hide();
            let total = limitePage * currentPage;
            for (let i = total - limitePage; i < total; i++) {
                $("#itemAtelier .list-group-item:eq(" + i + ")").show();
            }
        }


    })

}
function loadWorkshop(i, nom, desc, date2, nb, sujet, idAtelier, duree) {
    $('#content').load("assets/inc/detailWorkshop.php?i=" + idAtelier);
    tnom = nom;
    tdesc = desc;
    tdate2 = date2;
    tnb = nb;
    tsujet = sujet;
    tduree = duree;

}

function detailsWorkshop() {
    let datefull = new Date(tdate2);
    let date = (datefull).getDate() + " " + (month[(datefull).getMonth()]) + " " + (datefull).getFullYear();
    let heure = (datefull).getHours() + 'h' + (datefull).getMinutes();
    $('#nom').text(tnom);
    $('#description').html(tdesc);
    $('#date').html(date);
    $('#heure').html(heure);
    $('#places').html(tnb);
    $('#duree').html(tduree);
}
/////////////////////////////////////////////////////////////GESTION NEW USERS DANS L'ADMIN ///////////////////////////////////////////////////////////////////
retNewUsers = "";
function afficheNewUser(tab) {
    retNewUsers = "";
    let index = 1;
    for (i = 0; i < tab.length; i++) {

        retNewUsers += '<tr class="lignes">';
        retNewUsers += '<td>' + index + '</td>';
        retNewUsers += '<td>' + tab[i]['prenom'] + ' ' + tab[i]['nom'] + '</td>';
        retNewUsers += '<td>' + tab[i]['matricule'] + '</td>';
        retNewUsers += '<td>' + tab[i]['mail'] + '</td>';
        retNewUsers += '<td><button onclick="validerInscription(' + '\'' + tab[i]['matricule'] + '\')" class="btn btn-link" title="Check" data-toggle="tooltip"><i class="material-icons" style="color:#eb5d1e">check_circle</i></button></td>';
        retNewUsers += '<td><button onclick="supprimerInscription(' + '\'' + tab[i]['matricule'] + '\')" class="btn btn-link" title="Check" data-toggle="tooltip"><i class="material-icons" style="color:#eb5d1e">remove_circle</i></button></td>';
        retNewUsers += '</tr>';
        index++;
    }
    $('#listeNewUser').append(retNewUsers);
    paginationNewUsers(index);
}

function paginationNewUsers(nAt) {
    let limitePage = 10;
    let nbPages = Math.ceil(nAt / limitePage);
    $("#listeNewUser .lignes:gt(" + (limitePage - 1) + ")").hide();
    $(".paginationn").append("<li class='page-item active current-page'><a href='javascript:void(0)' class='page-link'>" + 1 + "</a></li>");
    for (let i = 2; i <= nbPages; i++) {
        $(".paginationn").append("<li class='page-item current-page'><a href='javascript:void(0)' class='page-link'>" + i + "</a></li>");
    }
    $(".current-page").on("click", function () {
        if ($(this).hasClass("active")) {
            return false;
        } else {
            let currentPage = ($(this).index()) + 1;
            $(".paginationn li").removeClass("active");
            $(this).addClass("active");
            $(".lignes").hide();
            let total = limitePage * currentPage;
            for (let i = total - limitePage; i < total; i++) {
                $("#listeNewUser .lignes:eq(" + i + ")").show();
            }
        }
    })
}

function validerInscription(noma) {
    $.ajax({
        url: "assets/php/validerInscription.php",
        type: "POST",
        data: {
            "noma": noma
        },
        datatype: "json",
        success: function (response) {
            $('.modal-backdrop').remove();
            newUser();
        }
    });
}
    function supprimerInscription(noma) {
        $.ajax({
            url: "assets/php/supprimerInscription.php",
            type: "POST",
            data: {
                "noma": noma
            },
            datatype: "json",
            success: function (response) {
                $('.modal-backdrop').remove();
                newUser();
            }
        });
    }

/////////////////////////////////////////////////////////////GESTION DES USERS DANS L'ADMIN ///////////////////////////////////////////////////////////////////
retUsers = "";
function afficheAllUser(tab) {
    retUsers = "";
    let index = 1;
    for (i = 0; i < tab.length; i++) {

        retUsers += '<tr class="lignes">';
        retUsers += '<td>' + index + '</td>';
        retUsers += '<td>' + tab[i]['prenom'] + ' ' + tab[i]['nom'] + '</td>';
        retUsers += '<td>' + tab[i]['matricule'] + '</td>';
        retUsers += '<td>';
        retUsers += '<select name="role_user" id="role_user' + index + '">';

        let role = "";
        if (tab[i]['administration'] == 0) {
            role = "Utilisateur";
            retUsers += '<option value="0" selected>Utilisateur</option>';
            retUsers += '<option value="1">Administrateur</option>';
        }
        else {
            role = "Administrateur";
            retUsers += '<option value="1" selected>Administrateur</option>';
            retUsers += '<option value="0">Utilisateur</option>';
        }
        retUsers += '</td>';
        retUsers += '<td>';
        retUsers += '<button onclick="modifRole(' + '\'' + tab[i]['matricule'] + '\'' + ', $(\'#role_user' + index + '\').val())" class="btn btn-link" title="Check" data-toggle="tooltip"><i class="material-icons" style="color:#eb5d1e">check_circle</i></button>';
        retUsers += '</td><td>';
        retUsers += '<button onclick="popup(' + '\'' + tab[i]['matricule'] + '\')" class="btn btn-link" data-toggle="modal" data-target="#modalConfirmDelete"><i class="material-icons" style="color:#eb5d1e">remove_circle</i></button>'
        retUsers += '</td>';
        retUsers += '</tr>';
        index++;
    }
    $('#listeUser').append(retUsers);
    paginationUsers(index);
}

function paginationUsers(nAt) {
    let limitePage = 10;
    let nbPages = Math.ceil(nAt / limitePage);
    removeClassActive();
    addClassActive('navWorkshops');
    $("#listeUser .lignes:gt(" + (limitePage - 1) + ")").hide();
    $(".paginationn").append("<li class='page-item active current-page'><a href='javascript:void(0)' class='page-link'>" + 1 + "</a></li>");
    for (let i = 2; i <= nbPages; i++) {
        $(".paginationn").append("<li class='page-item current-page'><a href='javascript:void(0)' class='page-link'>" + i + "</a></li>");
    }
    $(".current-page").on("click", function () {
        if ($(this).hasClass("active")) {
            return false;
        } else {
            let currentPage = ($(this).index()) + 1;
            $(".paginationn li").removeClass("active");
            $(this).addClass("active");
            $(".lignes").hide();
            let total = limitePage * currentPage;
            for (let i = total - limitePage; i < total; i++) {
                $("#listeUser .lignes:eq(" + i + ")").show();
            }
        }
    })
}

function modifRole(noma, admin) {
    $.ajax({
        url: "assets/php/modifRole.php",
        type: "POST",
        data: {
            "noma": noma,
            "admin": admin
        },
        datatype: "json",
        success: function (response) {
        }
    });
}

function deleteUserAdmin(noma) {
    $.ajax({
        url: "assets/php/deleteUserAdmin.php",
        type: "POST",
        data: {
            "noma": noma
        },
        datatype: "json",
        success: function (response) {
            $('.modal-backdrop').remove();
            gestionDroits();
        }
    });
}


var retPopup = "";

function popup(matricule) {
    retPopup = "";
    retPopup += '<!--Modal: modalConfirmDelete-->'
    retPopup += '<div class="modal fade" id="modalConfirmDelete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'
    retPopup += '<div class="modal-dialog modal-sm modal-notify modal-danger" role="document">'
    retPopup += '<!--Content-->'
    retPopup += '<div class="modal-content text-center">'
    retPopup += '<!--Header-->'
    retPopup += '<div class="modal-header d-flex justify-content-center">'
    retPopup += '<p class="heading">Etes vous sur de vouloir supprimer ce compte ?</p>'
    retPopup += '</div>'

    retPopup += '<!--Footer-->'
    retPopup += '<div class="modal-footer flex-center">'
    retPopup += '<button onclick="deleteUserAdmin(' + '\'' + matricule + '\'' + ')" class="btn" data-dismiss="modal" style="color:#eb5d1e">Oui</button>'
    retPopup += '<button class="btn" data-dismiss="modal" style="color:#eb5d1e">Non</button>'
    retPopup += '</div>'
    retPopup += '</div>'
    retPopup += '<!--/.Content-->'
    retPopup += '</div>'
    retPopup += '</div>'

    $('#popup').append(retPopup);
}

/////////////////////////////////////////////////////GESTION ATELIERS ADMIN///////////////////////////////////////////////////////////////

retAtelier = "";
function afficheAllAteliers(tab) {
    retAtelier = "";
    let index = 1;
    for (i = 0; i < tab.length; i++) {
        retAtelier += '<tr class="lignes">';
        retAtelier += '<td>' + index + '</td>';
        retAtelier += '<td>' + tab[i]['nom'] + '</td>';
        retAtelier += '<td>' + tab[i]['sujet'] + '</td>';
        retAtelier += '<td>' + tab[i]['nomAnimateur'] + '</td>';
        retAtelier += '<td>' + tab[i]['date'] + '</td>';
        retAtelier += '<td>';
        if (tab[i]['validation'] === '0') {
            retAtelier += '<button onclick="validerAtelierAdmin(' + '\'' + tab[i]['idAtelier'] + '\'' + ')" class="btn btn-link" title="Check" data-toggle="tooltip" style="color:#eb5d1e">Valider l\'atelier</button>';
        } else if (tab[i]['validation'] === '1') {
            retAtelier += '<button onclick="devaliderAtelierAdmin(' + '\'' + tab[i]['idAtelier'] + '\'' + ')" class="btn btn-link" title="Check" data-toggle="tooltip" style="color:#eb5d1e">Dévalider l\'atelier</button>';
        }
        retAtelier += '</td><td>';
        if (tab[i]['annulation'] === '0') {
            retAtelier += '<button onclick="popupAnnulationAtelier(' + '\'' + tab[i]['idAtelier'] + '\')" class="btn btn-link" data-toggle="modal" data-target="#modalConfirmDelete" style="color:#eb5d1e">Annuler</button>'
        } else if (tab[i]['annulation'] === '1') {
            retAtelier += '<button onclick="popupAnnulationAtelier(' + '\'' + tab[i]['idAtelier'] + '\')" class="btn btn-link" data-toggle="modal" data-target="#modalConfirmDelete" style="color:#eb5d1e">Annulation demandée</button>'
        }
        retAtelier += '</td><td>';
        if (tab[i]['validation'] === '0') {
            retAtelier += '<button class="btn btn-link" title="Check" data-toggle="tooltip" style="color:#eb5d1e">PDF indisponible</button>';
        } else if (tab[i]['validation'] === '1') {
            retAtelier += '<button onclick="downloadPDF(' + '\'' + tab[i]['idAtelier'] + '\'' + ')" class="btn btn-link" title="Check" data-toggle="tooltip" style="color:#eb5d1e">Télécharger contrat</button>';
        }
        retAtelier += '</td>';
        retAtelier += '</tr>';
        index++;
    }
    $('#listeAtelier').append(retAtelier);
    paginationAteliersAdmin(index);
}

function paginationAteliersAdmin(nAt) {
    let limitePage = 10;
    let nbPages = Math.ceil(nAt / limitePage);
    removeClassActive();
    addClassActive('navWorkshops');
    $("#listeAtelier .lignes:gt(" + (limitePage - 1) + ")").hide();
    $(".paginationn").append("<li class='page-item active current-page'><a href='javascript:void(0)' class='page-link'>" + 1 + "</a></li>");
    for (let i = 2; i <= nbPages; i++) {
        $(".paginationn").append("<li class='page-item current-page'><a href='javascript:void(0)' class='page-link'>" + i + "</a></li>");
    }
    $(".current-page").on("click", function () {
        if ($(this).hasClass("active")) {
            return false;
        } else {
            let currentPage = ($(this).index()) + 1;
            $(".paginationn li").removeClass("active");
            $(this).addClass("active");
            $(".lignes").hide();
            let total = limitePage * currentPage;
            for (let i = total - limitePage; i < total; i++) {
                $("#listeAtelier .lignes:eq(" + i + ")").show();
            }
        }
    })
}

var retPopupAtelier = "";

function popupAnnulationAtelier(idAtelier) {
    retPopupAtelier = "";
    retPopupAtelier += '<!--Modal: modalConfirmDelete-->'
    retPopupAtelier += '<div class="modal fade" id="modalConfirmDelete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'
    retPopupAtelier += '<div class="modal-dialog modal-sm modal-notify modal-danger" role="document">'
    retPopupAtelier += '<!--Content-->'
    retPopupAtelier += '<div class="modal-content text-center">'
    retPopupAtelier += '<!--Header-->'
    retPopupAtelier += '<div class="modal-header d-flex justify-content-center">'
    retPopupAtelier += '<p class="heading">Etes vous sur de vouloir supprimer cet atelier ?</p>'
    retPopupAtelier += '</div>'

    retPopupAtelier += '<!--Footer-->'
    retPopupAtelier += '<div class="modal-footer flex-center">'
    retPopupAtelier += '<button onclick="annulerAtelierAdmin(' + '\'' + idAtelier + '\'' + ')" class="btn" data-dismiss="modal" style="color:#eb5d1e">Oui</button>'
    retPopupAtelier += '<button class="btn" data-dismiss="modal" style="color:#eb5d1e">Non</button>'
    retPopupAtelier += '</div>'
    retPopupAtelier += '</div>'
    retPopupAtelier += '<!--/.Content-->'
    retPopupAtelier += '</div>'
    retPopupAtelier += '</div>'

    $('#popupAtelier').append(retPopupAtelier);
}

function validerAtelierAdmin(id) {
    $.ajax({
        url: "assets/php/validerAtelierAdmin.php",
        type: "POST",
        data: {
            "id": id
        },
        datatype: "json",
        success: function (response) {
            annulationAtelier()
        }
    });
}

function devaliderAtelierAdmin(id) {
    $.ajax({
        url: "assets/php/devaliderAtelierAdmin.php",
        type: "POST",
        data: {
            "id": id
        },
        datatype: "json",
        success: function (response) {
            annulationAtelier()
        }
    });
}

function annulerAtelierAdmin(id) {
    $.ajax({
        url: "assets/php/annulerAtelierAdmin.php",
        type: "POST",
        data: {
            "id": id
        },
        datatype: "json",
        success: function (response) {
            $('.modal-backdrop').remove();
            annulationAtelier();
        }
    });
}

function downloadPDF(id) {
    $.ajax({
        url: "assets/php/pdfCreator.php?id=" + id,
        type: "POST",
        data: {
            "id": id
        },
        datatype: "json",
        success: function (response) {
            window.location.replace("http://localhost/ProjetWeb2019-2020/SITE/assets/php/pdfCreator.php?id=" + id);
        }
    });
}




/////////////////////////////////////////////////////WORKSHOP AUXQUELS JE PARTICIPE//////////////////////////////////////////////////
var nbAtelierParticipe = 1;
var tabEnvoiAtelierParticipe = new Array();
function workshopParticipe(tab) {
    $('#itemAtelierParticipe').empty();
    $('.paginationn').empty();
    nbAtelierParticipe = 1;
    let ret2 = "";
    tabEnvoiAtelierParticipe = new Array();
    let indexAtelier = 0;

    for (i = 0; i < tab.length; i++) {
        if (tab[i]['validation'] === '1') {
            let datefull = new Date(tab[i]['date']);
            let date = (datefull).getDate() + " " + (month[(datefull).getMonth()]) + " " + (datefull).getFullYear();
            let heure = (datefull).getHours() + 'h' + (datefull).getMinutes();

            tabEnvoiAtelierParticipe[i] = tab[i];

            let tnom = tab[i]['nom'];
            $.ajax({
                async: false,
                url: "assets/php/recupPlacesDispo.php",
                type: "POST",
                data: {
                    "id": tab[i]['idAtelier']
                },
                datatype: "json",
                success: function (response) {
                    nbPlace = JSON.parse(response);
                    if (nbPlace[0] === undefined) {
                        test = 0;
                    } else {
                        test = nbPlace[0][0];
                    }
                }
            });
            let nbPlacesDispos = tab[i]['nbrPlaces'] - test;
            ret2 += '<li class="list-group-item" id="' + tab[i]['sujet'] + '">';
            ret2 += '<div class="media align-items-lg-center flex-column flex-lg-row p-3">';
            ret2 += '<div class="media-body order-2 order-lg-1">';
            ret2 += '<a>';
            ret2 += '<h5 class="mt-0 font-weight-bold mb-2" onclick="loadWorkshop('
                + indexAtelier++ + ','
                + '\'' + tab[i]['nom'] + '\','
                + '\'' + tab[i]['description'] + '\','
                + '\'' + tab[i]['date'] + '\','
                + '\'' + tab[i]['nbrPlaces'] + '\','
                + '\'' + tab[i]['sujet'] + '\','
                + '\'' + tab[i]['idAtelier'] + '\','
                + '\'' + tab[i]['duree'] + '\');">'
                + tab[i]['nom'] + '</h5>';
            ret2 += ' </a>';
            ret2 += '<p class="font-italic text-muted mb-0 small">' + tab[i]['description'] + '</p>';
            ret2 += '<div class="d-flex align-items-center justify-content-between mt-1">';
            ret2 += '<h6 class="font-weight-bold my-2">' + date + ' ' + heure + '</h6>';
            ret2 += '<h7 class="font-weight-bold my-2">' + nbPlacesDispos + '/' + tab[i]['nbrPlaces'] + ' Places disponibles</h7>';
            ret2 += '<h7 class="font-weight-bold my-2">Duree :' + tab[i]['duree'] + '</h7>';
            ret2 += '</div>';
            ret2 += '</div>';
            ret2 += '</div>';
            ret2 += '</li>';
            nbAtelierParticipe++;

        }
    }
    $('#itemAtelierParticipe').append(ret2);
    paginationAtelierParticipe(nbAtelierParticipe);


}


function paginationAtelierParticipe(nAt) {
    let limitePage = 4;
    let nbPages = Math.ceil(nAt / limitePage);
    removeClassActive();
    addClassActive('navWorkshops');
    $("#itemAtelierParticipe .list-group-item:gt(" + (limitePage - 1) + ")").hide();
    $(".paginationn").append("<li class='page-item active current-page'><a href='javascript:void(0)' class='page-link'>" + 1 + "</a></li>");
    for (let i = 2; i <= nbPages; i++) {
        $(".paginationn").append("<li class='page-item current-page'><a href='javascript:void(0)' class='page-link'>" + i + "</a></li>");
    }
    $(".current-page").on("click", function () {
        if ($(this).hasClass("active")) {
            return false;
        } else {
            let currentPage = ($(this).index()) + 1;
            $(".paginationn li").removeClass("active");
            $(this).addClass("active");
            $(".list-group-item").hide();
            let total = limitePage * currentPage;
            for (let i = total - limitePage; i < total; i++) {
                $("#itemAtelierParticipe .list-group-item:eq(" + i + ")").show();
            }
        }


    })

}
function loadWorkshop(i, nom, desc, date2, nb, sujet, idAtelier, duree) {
    $('#content').load("assets/inc/detailWorkshop.php?i=" + idAtelier);
    tnom = nom;
    tdesc = desc;
    tdate2 = date2;
    tnb = nb;
    tsujet = sujet;
    tduree = duree;
}




/////////////////////////////////////////////////////MESWORKSHOPS//////////////////////////////////////////////////
var nbMesAteliers = 1;
var tabEnvoiMesAteliers = new Array();
function mesWorkshops(tab) {
    $('#itemMesAteliers').empty();
    $('.paginationn').empty();
    nbMesAteliers = 1;
    let ret2 = "";
    tabEnvoiMesAteliers = new Array();
    let indexAtelier = 0;

    for (i = 0; i < tab.length; i++) {
        let datefull = new Date(tab[i]['date']);
        let date = (datefull).getDate() + " " + (month[(datefull).getMonth()]) + " " + (datefull).getFullYear();
        let heure = (datefull).getHours() + 'h' + (datefull).getMinutes();

        tabEnvoiMesAteliers[i] = tab[i];
        $.ajax({
            async: false,
            url: "assets/php/recupPlacesDispo.php",
            type: "POST",
            data: {
                "id": tab[i]['idAtelier']
            },
            datatype: "json",
            success: function (response) {
                nbPlace = JSON.parse(response);
                if (nbPlace[0] === undefined) {
                    test = 0;
                } else {
                    test = nbPlace[0][0];
                }
            }
        });
        let nbPlacesDispos = tab[i]['nbrPlaces'] - test;
        let tnom = tab[i]['nom'];
        ret2 += '<li class="list-group-item" id="' + tab[i]['sujet'] + '">';
        ret2 += '<div class="media align-items-lg-center flex-column flex-lg-row p-3">';
        ret2 += '<div class="media-body order-2 order-lg-1">';
        ret2 += '<a>';
        ret2 += '<h5 class="mt-0 font-weight-bold mb-2" onclick="loadMesWorkshop('
            + indexAtelier++ + ','
            + '\'' + tab[i]['nom'] + '\','
            + '\'' + tab[i]['description'] + '\','
            + '\'' + tab[i]['date'] + '\','
            + '\'' + tab[i]['nbrPlaces'] + '\','
            + '\'' + tab[i]['sujet'] + '\','
            + '\'' + tab[i]['idAtelier'] + '\','
            + '\'' + tab[i]['duree'] + '\');">'
            + tab[i]['nom'] + '</h5>';
        ret2 += ' </a>';
        ret2 += '<p class="font-italic text-muted mb-0 small">' + tab[i]['description'] + '</p>';
        ret2 += '<div class="d-flex align-items-center justify-content-between mt-1">';
        ret2 += '<h6 class="font-weight-bold my-2">' + date + ' ' + heure + '</h6>';
        ret2 += '<h7 class="font-weight-bold my-2">' + nbPlacesDispos + '/' + tab[i]['nbrPlaces'] + ' Places disponibles</h7>';
        ret2 += '<h7 class="font-weight-bold my-2">Duree :' + tab[i]['duree'] + '</h7>';
        ret2 += '</div>';
        ret2 += '</div>';
        ret2 += '</div>';
        ret2 += '</li>';
        nbMesAteliers++;

    }
    $('#itemMesAteliers').append(ret2);
    paginationMesAteliers(nbMesAteliers);


}


function paginationMesAteliers(nAt) {
    let limitePage = 4;
    let nbPages = Math.ceil(nAt / limitePage);
    removeClassActive();
    addClassActive('navWorkshops');
    $("#itemMesAteliers .list-group-item:gt(" + (limitePage - 1) + ")").hide();
    $(".paginationn").append("<li class='page-item active current-page'><a href='javascript:void(0)' class='page-link'>" + 1 + "</a></li>");
    for (let i = 2; i <= nbPages; i++) {
        $(".paginationn").append("<li class='page-item current-page'><a href='javascript:void(0)' class='page-link'>" + i + "</a></li>");
    }
    $(".current-page").on("click", function () {
        if ($(this).hasClass("active")) {
            return false;
        } else {
            let currentPage = ($(this).index()) + 1;
            $(".paginationn li").removeClass("active");
            $(this).addClass("active");
            $(".list-group-item").hide();
            let total = limitePage * currentPage;
            for (let i = total - limitePage; i < total; i++) {
                $("#itemMesAteliers .list-group-item:eq(" + i + ")").show();
            }
        }


    })

}
function loadMesWorkshop(i, nom, desc, date2, nb, sujet, idAtelier, duree) {
    $('#content').load("assets/inc/detailsMesWorkshop.php?i=" + idAtelier);
    tnom = nom;
    tdesc = desc;
    tdate2 = date2;
    tnb = nb;
    tsujet = sujet;
    tduree = duree;
}




/////////////////////////////////////////MODIF MES WORKSHOPS/////////////////////////////////////////
var tnomModif;
var tdescModif;
var tdateModif;
var tnbModif;
var tsujetModif;
var tdureeModif;

function afficheModifAtelier(nom, desc, date2, nb, sujet, idAtelier, duree) {
    $('#content').load("assets/inc/modifWorkshop.php?i=" + idAtelier);
    tnomModif = nom;
    tdescModif = desc;
    tdateModif = date2;
    tnbModif = nb;
    tsujetModif = sujet;
    tdureeModif = duree;
}

function afficheInput() {
    let dateRecup = new Date(tdateModif);

    if ((dateRecup).getDate() < 10) {
        jours2 = '0' + (dateRecup).getDate();
    } else {
        jours2 = (dateRecup).getDate();
    }
    if (((dateRecup).getMonth() + 1) < 10) {
        mois2 = '0' + ((dateRecup).getMonth() + 1);
    } else {
        mois2 = (dateRecup).getMonth() + 1;
    }
    if ((dateRecup).getHours() < 10) {
        heure2 = '0' + (dateRecup).getHours();
    } else {
        heure2 = (dateRecup).getHours();
    }
    if ((dateRecup).getMinutes() < 10) {
        minutes2 = '0' + (dateRecup).getMinutes();
    } else {
        minutes2 = (dateRecup).getMinutes();
    }
    let date = (dateRecup).getFullYear() + "-" + mois2 + "-" + jours2 + "T" + heure2 + ':' + minutes2;
    nomModif = '<input id="nomModifWork" type="text" value="' + tnomModif + '"/>';
    descModif = '<input id="descModifWork" type="text" value="' + tdescModif + '"/>';
    dateModif = '<input id="dateModifWork" type="datetime-local" value="' + date + '"/>';
    nbModif = '<input id="nbPlaceModifWork" "type="text" value="' + tnbModif + '"/>';
    sujetModif = '<select name="workshop_animateur" id="sujetModifWork">';
    if (tsujetModif === "Comptabilité") {
        sujetModif += '<option value="Comptabilité" selected>Comptabilité</option>';
        sujetModif += '<option value="Marketing">Marketing</option>';
        sujetModif += '<option value="Informatique">Informatique</option>';
        sujetModif += '<option value="Electro-mécanique">Electro-mécanique</option>';
        sujetModif += '<option value="Droit">Droit</option>';
    } else if (tsujetModif === "Marketing") {
        sujetModif += '<option value="Comptabilité">Comptabilité</option>';
        sujetModif += '<option value="Marketing" selected>Marketing</option>';
        sujetModif += '<option value="Informatique">Informatique</option>';
        sujetModif += '<option value="Electro-mécanique">Electro-mécanique</option>';
        sujetModif += '<option value="Droit">Droit</option>';
    } else if (tsujetModif === "Informatique") {
        sujetModif += '<option value="Comptabilité">Comptabilité</option>';
        sujetModif += '<option value="Marketing">Marketing</option>';
        sujetModif += '<option value="Informatique" selected>Informatique</option>';
        sujetModif += '<option value="Electro-mécanique">Electro-mécanique</option>';
        sujetModif += '<option value="Droit">Droit</option>';
    } else if (tsujetModif === "Electro-mécanique") {
        sujetModif += '<option value="Comptabilité">Comptabilité</option>';
        sujetModif += '<option value="Marketing">Marketing</option>';
        sujetModif += '<option value="Informatique">Informatique</option>';
        sujetModif += '<option value="Electro-mécanique" selected>Electro-mécanique</option>';
        sujetModif += '<option value="Droit">Droit</option>';
    } else {
        sujetModif += '<option value="Comptabilité">Comptabilité</option>';
        sujetModif += '<option value="Marketing">Marketing</option>';
        sujetModif += '<option value="Informatique">Informatique</option>';
        sujetModif += '<option value="Electro-mécanique">Electro-mécanique</option>';
        sujetModif += '<option value="Droit" selected>Droit</option>';
    }
    sujetModif += '</select>';
    dureeModif = '<input id="dureeModifWork" type="time" value="' + tdureeModif + '"/>';
    $('#nom').html(nomModif);
    $('#description').html(descModif);
    $('#date').html(dateModif);
    $('#sujet').html(sujetModif);
    $('#nbPlace').html(nbModif);
    $('#duree').html(dureeModif);
}

function annulerModif(idAtelier) {
    $('#content').load("assets/inc/detailsMesWorkshop.php?i=" + idAtelier);
}

function validerModif(nom, desc, date, nb, sujet, idAtelier, duree) {

    let erreurForm = 1;
    let currentDate = new Date();
    event.preventDefault();
    if ($('#nomModifWork').val() == '') {
        $('#workshopModifNomError').show();
        erreurForm = 0;
    } else {
        $('#workshopModifNomError').hide();
    }

    if ($('#descModifWork').val() == '') {
        $('#workshopModifDescError').show();
        erreurForm = 0;
    } else {
        $('#workshopModifDescError').hide();
    }

    let datefull = new Date();

    if ((datefull).getDate() < 10) {
        jours = '0' + (datefull).getDate();
    } else {
        jours = (datefull).getDate();
    }
    if (((datefull).getMonth() + 1) < 10) {
        mois = '0' + ((datefull).getMonth() + 1);
    } else {
        mois = (datefull).getMonth() + 1;
    }
    if ((datefull).getHours() < 10) {
        heure = '0' + (datefull).getHours();
    } else {
        heure = (datefull).getHours();
    }
    if ((datefull).getMinutes() < 10) {
        minutes = '0' + (datefull).getMinutes();
    } else {
        minutes = (datefull).getMinutes();
    }

    let date2 = (datefull).getFullYear() + "-" + mois + "-" + jours + "T" + heure + ':' + minutes;
    let dateRecup = new Date($('#dateModifWork').val());

    if ((dateRecup).getDate() < 10) {
        jours2 = '0' + (dateRecup).getDate();
    } else {
        jours2 = (dateRecup).getDate();
    }
    if (((dateRecup).getMonth() + 1) < 10) {
        mois2 = '0' + ((dateRecup).getMonth() + 1);
    } else {
        mois2 = (dateRecup).getMonth() + 1;
    }
    if ((dateRecup).getHours() < 10) {
        heure2 = '0' + (dateRecup).getHours();
    } else {
        heure2 = (dateRecup).getHours();
    }
    if ((dateRecup).getMinutes() < 10) {
        minutes2 = '0' + (dateRecup).getMinutes();
    } else {
        minutes2 = (dateRecup).getMinutes();
    }
    var date = (dateRecup).getFullYear() + "-" + mois2 + "-" + jours2 + "T" + heure2 + ':' + minutes2;

    if ($('#dateModifWork').val() == '') {

        $('#workshopModifDateError').show();
        erreurForm = 0;
    } else {
        if (date2 > date) {
            $('#workshopModifDateError').hide();
            $('#workshopModifDatePassee').show();
            erreurForm = 0;
        } else {
            $('#workshopModifDateError').hide();
            $('#workshopModifDatePassee').hide();
        }
    }

    if ($('#nbPlaceModifWork').val() == '') {
        $('#WorkshopModifPlaceError').show();
        erreurForm = 0;
    } else {
        if ($('#nbPlaceModifWork').val() <= 1) {
            $('#WorkshopModifPlaceError').hide();
            $('#WorkshopModifPlaceNegatif').show();
            erreurForm = 0;
        }
        else {
            $('#WorkshopModifPlaceError').hide();
            $('#WorkshopModifPlaceNegatif').hide();
        }
    }

    if ($('#dureeModifWork').val() == '') {
        $('#WorkshopModifDureeError').show();
        erreurForm = 0;
    }

    if (erreurForm === 1) {
        console.log($('#dureeModifWork').val());
        $.ajax({
            url: "assets/php/modifAtelier.php",
            type: "POST",
            data: {
                "nom": nom,
                "desc": desc,
                "date": date,
                "nomb": nb,
                "sujet": sujet,
                "idAtelier": idAtelier,
                "duree": duree
            },
            datatype: "json",
            success: function (response) {
                if (response === '"pasBon"') {
                    alert("Ce n'est pas votre atelier !!!!");
                } else {
                    mesWorkshopsListe();
                }
            }
        });
    }
}

/////////////////////////////////////////BOITE IDEE/////////////////////////////////////////

function addIdeeEtudiant(nom, sujet, idUser) {
    $.ajax({
        url: "assets/php/ajoutIdeeEtudiant.php",
        type: "POST",
        data: {
            "nom": nom,
            "sujet": sujet,
            "idUser": idUser
        },
        datatype: "json",
        success: function (response) {
            boiteId();
        }
    });
}

function addIdeeProfesseur(nom, sujet, idUser) {
    $.ajax({
        url: "assets/php/ajoutIdeeProf.php",
        type: "POST",
        data: {
            "nom": nom,
            "sujet": sujet,
            "idUser": idUser
        },
        datatype: "json",
        success: function (response) {
            propIdee();
        }
    });
}

function paginationIdeeEtu(nAt) {
    let limitePage = 5;
    let nbPages = Math.ceil(nAt / limitePage);
    removeClassActive();
    addClassActive('navBoiteId');
    $("#listeIdeesEtudiants .lignes:gt(" + (limitePage - 1) + ")").hide();
    $(".paginationnIdeesEtudiants").append("<li class='page-item active current-page' style='list-style-type:none'><a href='javascript:void(0)' class='page-link'>" + 1 + "</a></li>");
    for (let i = 2; i <= nbPages; i++) {
        $(".paginationnIdeesEtudiants").append("<li class='page-item current-page' style='list-style-type:none'><a href='javascript:void(0)' class='page-link'>" + i + "</a></li>");
    }
    $(".current-page").on("click", function () {
        if ($(this).hasClass("active")) {
            return false;
        } else {
            let currentPage = ($(this).index()) + 1;
            $(".paginationnIdeesEtudiants li").removeClass("active");
            $(this).addClass("active");
            $(".lignes").hide();
            let total = limitePage * currentPage;
            for (let i = total - limitePage; i < total; i++) {
                $("#listeIdeesEtudiants .lignes:eq(" + i + ")").show();
            }
        }


    })

}

function paginationIdeeProf(nAt) {
    let limitePage = 5;
    let nbPages = Math.ceil(nAt / limitePage);
    removeClassActive();
    addClassActive('navBoiteId');
    $("#paginationnIdeesProfs .lignes2:gt(" + (limitePage - 1) + ")").hide();
    $(".paginationnIdeesProfs").append("<li class='page-item active current-page' style='list-style-type:none'><a href='javascript:void(0)' class='page-link'>" + 1 + "</a></li>");
    for (let i = 2; i <= nbPages; i++) {
        $(".paginationnIdeesProfs").append("<li class='page-item current-page' style='list-style-type:none'><a href='javascript:void(0)' class='page-link'>" + i + "</a></li>");
    }
    $(".current-page").on("click", function () {
        if ($(this).hasClass("active")) {
            return false;
        } else {
            let currentPage = ($(this).index()) + 1;
            $(".paginationnIdeesProfs li").removeClass("active");
            $(this).addClass("active");
            $(".lignes2").hide();
            let total = limitePage * currentPage;
            for (let i = total - limitePage; i < total; i++) {
                $("#paginationnIdeesProfs .lignes2:eq(" + i + ")").show();
            }
        }


    })

}

function deleteIdee(id) {
    $.ajax({
        url: "assets/php/supprimerIdee.php",
        type: "POST",
        data: {
            "id": id
        },
        datatype: "json",
        success: function (response) {
            $('.modal-backdrop').remove();
            propIdee();
        }
    });
}

var retPopupIdee = "";

function popupIdee(idIdee) {
    retPopupIdee = "";
    retPopupIdee += '<!--Modal: modalConfirmDelete-->'
    retPopupIdee += '<div class="modal fade" id="modalConfirmDelete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'
    retPopupIdee += '<div class="modal-dialog modal-sm modal-notify modal-danger" role="document">'
    retPopupIdee += '<!--Content-->'
    retPopupIdee += '<div class="modal-content text-center">'
    retPopupIdee += '<!--Header-->'
    retPopupIdee += '<div class="modal-header d-flex justify-content-center">'
    retPopupIdee += '<p class="heading">Etes vous sur de vouloir supprimer cette idée d\'atelier ?</p>'
    retPopupIdee += '</div>'

    retPopupIdee += '<!--Footer-->'
    retPopupIdee += '<div class="modal-footer flex-center">'
    retPopupIdee += '<button onclick="deleteIdee(' + '\'' + idIdee + '\'' + ')" class="btn" data-dismiss="modal" style="color:#eb5d1e">Oui</button>'
    retPopupIdee += '<button class="btn" data-dismiss="modal" style="color:#eb5d1e">Non</button>'
    retPopupIdee += '</div>'
    retPopupIdee += '</div>'
    retPopupIdee += '<!--/.Content-->'
    retPopupIdee += '</div>'
    retPopupIdee += '</div>'

    $('#popup').append(retPopupIdee);
}


var adminId = '0';

function afficheAllIdee(tab) {
    retIdee = "";
    retIdee2 = "";
    let index = 1;
    let index2 = 1;
    for (i = 0; i < tab.length; i++) {
        if (tab[i]['adminIdee'] === '0') {
            retIdee += '<tr class="lignes">';
            retIdee += '<td>' + index + '</td>';
            retIdee += '<td>' + tab[i]['userIdee'] + '</td>';
            retIdee += '<td>' + tab[i]['nomIdee'] + '</td>';
            retIdee += '<td>' + tab[i]['sujetIdee'] + '</td>';
            retIdee += '<td>' + '<button onclick="pourIdee(' + '\'' + tab[i]['idIdee'] + '\',\'' + '0' + '\',\'' + idUser + '\')" class="btn btn-link" title="Check" data-toggle="tooltip" style="color:#eb5d1e">Pour</button>' + '</td>';
            retIdee += '<td>' + '<button onclick="contreIdee(' + '\'' + tab[i]['idIdee'] + '\',\'' + '1' + '\',\'' + idUser + '\')" class="btn btn-link" title="Check" data-toggle="tooltip" style="color:#eb5d1e">Contre</button>' + '</td>';
            retIdee += '<td>' + statIdee(tab[i]['idIdee']) + '</td>';
            retIdee += '<td>' + totalVote(tab[i]['idIdee']) + '</td>';
            if (adminId === "0") {
            } else {
                retIdee += '<td><button onclick="popupIdee(' + '\'' + tab[i]['idIdee'] + '\')" class="btn btn-link" data-toggle="modal" data-target="#modalConfirmDelete"><i class="material-icons" style="color:#eb5d1e">remove_circle</i></button></td>';
            }
            retIdee += '</tr>';
            index++;
        }
        if (tab[i]['adminIdee'] === '1') {
            retIdee2 += '<tr class="lignes2">';
            retIdee2 += '<td>' + index2 + '</td>';
            retIdee2 += '<td>' + tab[i]['userIdee'] + '</td>';
            retIdee2 += '<td>' + tab[i]['nomIdee'] + '</td>';
            retIdee2 += '<td>' + tab[i]['sujetIdee'] + '</td>';
            retIdee2 += '<td>' + '<button onclick="pourIdee(' + '\'' + tab[i]['idIdee'] + '\',\'' + '0' + '\',\'' + idUser + '\')" class="btn btn-link" title="Check" data-toggle="tooltip" style="color:#eb5d1e">Pour</button>' + '</td>';
            retIdee2 += '<td>' + '<button onclick="contreIdee(' + '\'' + tab[i]['idIdee'] + '\',\'' + '1' + '\',\'' + idUser + '\')" class="btn btn-link" title="Check" data-toggle="tooltip" style="color:#eb5d1e">Contre</button>' + '</td>';
            retIdee2 += '<td>' + statIdee(tab[i]['idIdee']) + '</td>';
            retIdee2 += '<td>' + totalVote(tab[i]['idIdee']) + '</td>';
            if (adminId === '0') {
            } else {
                retIdee2 += '<td><button onclick="popupIdee(' + '\'' + tab[i]['idIdee'] + '\')" class="btn btn-link" data-toggle="modal" data-target="#modalConfirmDelete"><i class="material-icons" style="color:#eb5d1e">remove_circle</i></button></td>';
            }
            retIdee2 += '</tr>';
            index2++;
        }

    }
    $('#listeIdeesEtudiants').append(retIdee);
    $('#listeIdeesProfs').append(retIdee2);
    paginationIdeeEtu(index);
    paginationIdeeProf(index2);

}

function pourIdee(idIdee, etat, idUser) {
    $.ajax({
        url: "assets/php/voteIdee.php",
        type: "POST",
        data: {
            "idIdee": idIdee,
            "etat": etat,
            "idUser": idUser
        },
        datatype: "json",
        success: function (response) {
        }
    });
    if (adminId === "0") {
        boiteId();
    } else {
        propIdee();
    }
}

function contreIdee(idIdee, etat, idUser) {
    $.ajax({
        url: "assets/php/voteIdee.php",
        type: "POST",
        data: {
            "idIdee": idIdee,
            "etat": etat,
            "idUser": idUser
        },
        datatype: "json",
        success: function (response) {
        }
    });

    if (adminId === "0") {
        boiteId();
    } else {
        propIdee();
    }
}

function statIdee(idIdee) {
    let tmp;
    $.ajax({
        async: false,
        url: "assets/php/statIdee.php",
        type: "POST",
        data: {
            "idIdee": idIdee
        },
        datatype: "json",
        success: function (response) {
            tmp = response;
        }
    });
    return tmp;
}

function totalVote(idIdee) {
    let tmp;
    $.ajax({
        async: false,
        url: "assets/php/totalVote.php",
        type: "POST",
        data: {
            "idIdee": idIdee
        },
        datatype: "json",
        success: function (response) {
            console.log(response);
            tmp = response;
        }
    });
    return tmp;
}