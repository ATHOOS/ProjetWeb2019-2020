//layout

function removeClassActive() {
    $('#navAccueil').removeClass('active');
    $('#navWorkshops').removeClass('active');
    $('#navBoiteId').removeClass('active');
    $('#navProfil').removeClass('active');

}

function removeClassActiveAdmin() {
    $('#annulation').removeClass('active');
    $('#validation').removeClass('active');
    $('#droit').removeClass('active');
    $('#contrat').removeClass('active');
    $('#sondage').removeClass('active');

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

function workshopsListe() {
    $('#content').load("assets/inc/workshopsListe.php");

    removeClassActive("navWorkshopsListe");
    addClassActive('navWorkshops');
}

function workshopsCreation() {
    $('#content').load("assets/inc/workshopsCreation.php");

    removeClassActive();
    addClassActive('navWorkshops');
}

function mesWorkshops() {
    $('#content').load("assets/inc/mesWorkshops.php");

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



function detailWorkshop(p, tab) {
    $('#content').load("assets/inc/detailWorkshop.php");
    detailsWorkshop(tab);

}

function adminPage() {
    $('#content').load("assets/inc/admin/ezAdministration.php");
    removeClassActive();
    addClassActive('adminPage');

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

function generationContrats() {
    removeClassActiveAdmin();
    addClassActive('contrat');
    $('#contentAdminPage').load('assets/inc/admin/generationContrat.php');
}

function sondage() {
    removeClassActiveAdmin();
    addClassActive('sondage');
    $('#contentAdminPage').load('assets/inc/admin/sondage.php');
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
        location.reload();
        profil();

    }


}


//verification formulaire atelier

function ajoutAtelier() {
    let a = 1;
    event.preventDefault();
    if ($('#workshop_nom').val() == '') {
        $('#workshop_nom').attr('placeholder', 'Nom requis');
        a = 0;
    }

    if ($('#workshop_desc').val() == '') {
        $('#workshop_desc').attr('placeholder', 'Description requise');
        a = 0;
    }

    if ($('#workshop_date').val() == '') {
        $('#error_date').show();
        a = 0;
    }

    if ($('#workshop_nbrPlaces').val() == '') {
        $('#workshop_nbrPlaces').attr('placeholder', 'Nombre de places requis');
        a = 0;
    }
    if ($('#workshop_animateur').val() == '') {
        $('#workshop_animateur').attr('placeholder', 'Animateur requis');
        a = 0;
    }

    if (a === 1) {
        let objectForm = { 'Nom': $('#workshop_nom').val(), 'Description': $('#workshop_desc').val(), 'Date': $('#workshop_date').val(), 'Nombre_de_places': $('#workshop_nbrPlaces').val(), 'Animateur': $('#workshop_animateur').val(), 'Sujet': $('#workshop_sujet').val() };
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
                    console.log(response);
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
    var ret = "";
    var ret2 = "";
    tabEnvoi = new Array();
    tabEnvoi2 = new Array();
    var indexAtelier = 0;

    for (i = 0; i < tab.length; i++) {
        if (tab[i]['validation'] === '1') {
            var datefull = new Date(tab[i]['date']);
            var date = (datefull).getDate() + " " + (month[(datefull).getMonth()]) + " " + (datefull).getFullYear();
            var heure = (datefull).getHours() + 'h' + (datefull).getMinutes();

            if (tab[i]['sujet'] === sujet) {
                tabEnvoi[i] = tab[i];

            } else {
                tabEnvoi2[i] = tab[i];
            }
            var tnom = tab[i]['nom'];
            if (tab[i]['sujet'] === sujet) {
                ret += '<li class="list-group-item" id="' + tab[i]['sujet'] + '">';
                ret += '<div class="media align-items-lg-center flex-column flex-lg-row p-3">';
                ret += '<div class="media-body order-2 order-lg-1">';
                ret += '<a>';
                ret += '<h5 class="mt-0 font-weight-bold mb-2" onclick="loadWorkshop('
                    + indexAtelier + ','
                    + '\'' + tab[i]['nom'] + '\','
                    + '\'' + tab[i]['description'] + '\','
                    + '\'' + tab[i]['date'] + '\','
                    + '\'' + tab[i]['nbrPlaces'] + '\','
                    + '\'' + tab[i]['sujet'] + '\','
                    + '\'' + tab[i]['idAtelier'] + '\');">'
                    + tab[i]['nom'] + '</h5>';
                ret += ' </a>';
                ret += '<p class="font-italic text-muted mb-0 small">' + tab[i]['description'] + '</p>';
                ret += '<div class="d-flex align-items-center justify-content-between mt-1">';
                ret += '<h6 class="font-weight-bold my-2">' + date + ' ' + heure + '</h6>';
                ret += '</div>';
                ret += '</div><img src="https://res.cloudinary.com/mhmd/image/upload/v1556485076/shoes-1_gthops.jpg" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2">';
                ret += '</div>';
                ret += '</li>';
                nbAteliers++;

            } else {
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
                    + '\'' + tab[i]['idAtelier'] + '\');">'
                    + tab[i]['nom'] + '</h5>';
                ret2 += ' </a>';
                ret2 += '<p class="font-italic text-muted mb-0 small">' + tab[i]['description'] + '</p>';
                ret2 += '<div class="d-flex align-items-center justify-content-between mt-1">';
                ret2 += '<h6 class="font-weight-bold my-2">' + date + ' ' + heure + '</h6>';
                ret2 += '</div>';
                ret2 += '</div><img src="https://res.cloudinary.com/mhmd/image/upload/v1556485076/shoes-1_gthops.jpg" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2">';
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
    var limitePage = 4;
    var nbPages = Math.ceil(nAt / limitePage);
    removeClassActive();
    addClassActive('navWorkshops');
    $("#itemAtelier .list-group-item:gt(" + (limitePage - 1) + ")").hide();
    $(".paginationn").append("<li class='page-item active current-page'><a href='javascript:void(0)' class='page-link'>" + 1 + "</a></li>");
    for (var i = 2; i <= nbPages; i++) {
        $(".paginationn").append("<li class='page-item current-page'><a href='javascript:void(0)' class='page-link'>" + i + "</a></li>");
    }
    $(".current-page").on("click", function () {
        if ($(this).hasClass("active")) {
            return false;
        } else {
            var currentPage = ($(this).index()) + 1;
            $(".paginationn li").removeClass("active");
            $(this).addClass("active");
            $(".list-group-item").hide();
            var total = limitePage * currentPage;
            for (var i = total - limitePage; i < total; i++) {
                $("#itemAtelier .list-group-item:eq(" + i + ")").show();
            }
        }


    })

}
function loadWorkshop(i, nom, desc, date2, nb, sujet, idAtelier) {
    $('#content').load("assets/inc/detailWorkshop.php?i=" + idAtelier);
    tnom = nom;
    tdesc = desc;
    tdate2 = date2;
    tnb = nb;
    tsujet = sujet;

}

function detailsWorkshop() {
    var datefull = new Date(tdate2);
    var date = (datefull).getDate() + " " + (month[(datefull).getMonth()]) + " " + (datefull).getFullYear();
    var heure = (datefull).getHours() + 'h' + (datefull).getMinutes();
    $('#nom').text(tnom);
    $('#description').html(tdesc);
    $('#date').html(date);
    $('#heure').html(heure);

}


/////////////////////////////////////////////////////////////GESTION DES USERS DANS L'ADMIN ///////////////////////////////////////////////////////////////////
retUsers = "";
function afficheAllUser(tab) {
    retUsers = "";
    var index = 1;
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
    var limitePage = 10;
    var nbPages = Math.ceil(nAt / limitePage);
    removeClassActive();
    addClassActive('navWorkshops');
    $("#listeUser .lignes:gt(" + (limitePage - 1) + ")").hide();
    $(".paginationn").append("<li class='page-item active current-page'><a href='javascript:void(0)' class='page-link'>" + 1 + "</a></li>");
    for (var i = 2; i <= nbPages; i++) {
        $(".paginationn").append("<li class='page-item current-page'><a href='javascript:void(0)' class='page-link'>" + i + "</a></li>");
    }
    $(".current-page").on("click", function () {
        if ($(this).hasClass("active")) {
            return false;
        } else {
            var currentPage = ($(this).index()) + 1;
            $(".paginationn li").removeClass("active");
            $(this).addClass("active");
            $(".lignes").hide();
            var total = limitePage * currentPage;
            for (var i = total - limitePage; i < total; i++) {
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
            console.log(response);
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
    var index = 1;
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
        retAtelier += '</td>';
        retAtelier += '</tr>';
        index++;
    }
    $('#listeAtelier').append(retAtelier);
    paginationAteliersAdmin(index);
}

function paginationAteliersAdmin(nAt) {
    var limitePage = 10;
    var nbPages = Math.ceil(nAt / limitePage);
    removeClassActive();
    addClassActive('navWorkshops');
    $("#listeAtelier .lignes:gt(" + (limitePage - 1) + ")").hide();
    $(".paginationn").append("<li class='page-item active current-page'><a href='javascript:void(0)' class='page-link'>" + 1 + "</a></li>");
    for (var i = 2; i <= nbPages; i++) {
        $(".paginationn").append("<li class='page-item current-page'><a href='javascript:void(0)' class='page-link'>" + i + "</a></li>");
    }
    $(".current-page").on("click", function () {
        if ($(this).hasClass("active")) {
            return false;
        } else {
            var currentPage = ($(this).index()) + 1;
            $(".paginationn li").removeClass("active");
            $(this).addClass("active");
            $(".lignes").hide();
            var total = limitePage * currentPage;
            for (var i = total - limitePage; i < total; i++) {
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

function annulerAtelierAdmin(id){
    $.ajax({
        url: "assets/php/annulerAtelierAdmin.php",
        type: "POST",
        data: {
            "id": id
        },
        datatype: "json",
        success: function (response) {
            $('.modal-backdrop').remove();
            annulationAtelier()
        }
    });
}


