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

function workshopParticipeListe() {
    $('#content').load("assets/inc/workshopParticipe.php");

    removeClassActive();
    addClassActive('navWorkshops');
}

function mesWorkshopsListe() {
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
        $('#nonMatricule').show();
        a = 0;
    } else {
        let matricule = ($('#matricule').val()).toUpperCase();
        if (validateMatricule(matricule) === false) {
            $('#badMatricule').show();
            a = 0;
        } else {
            $('#badMatricule').hide();
        }
        $('#nonMatricule').hide();
    }



    if ($('#nom').val() == '') {
        $('#nonNom').show();

        a = 0;
    } else {
        $('#nonNom').hide();

    }


    if ($('#prenom').val() == '') {
        $('#nonPrenom').show();

        a = 0;
    } else {
        $('#nonPrenom').hide();

    }

    if ($('#email').val() == '') {
        $('#nonEmail').show();
        a = 0;
    } else {
        $('#nonEmail').hide();
    }

    if ($('#pass').val() == '') {
        $('#nonPassword').show();
        a = 0;
    } else {
        $('#nonPassword').hide();
    }

    if ($('#re_pass').val() == '') {
        $('#nonRePassword').show();
        a = 0;
    } else {
        $('#nonRePassword').hide();
    }

    if ($('#re_pass').val() !== $('#pass').val()) {
        $('#mdpNotSame').show();
        a = 0;
    } else {
        $('#mdpNotSame').hide();
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

function validateMatricule(matricule) {
    var re = /HE\d\d\d\d\d\d/;
    return re.test(matricule);
}


//connexion

function checkConnexion() {
    let a = 1;
    event.preventDefault();
    if ($('#your_login').val() == '') {
        $('#pseudoError').show();
        a = 0;
    } else {
        $('#pseudoError').hide();
    }

    if ($('#your_pass').val() == '') {
        $('#mdpError').show();
        a = 0;
    } else {
        $('#mdpError').hide();
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
                if (response === '"erreurConnexion"') {
                    $('#connexionError').show();
                }
                else {
                    $('#connexionError').hide();
                    location.reload();
                    profil();
                }
            }
        });


    }


}


//verification formulaire atelier

function ajoutAtelier() {
    let a = 1;
    let currentDate = new Date();
    event.preventDefault();
    if ($('#workshop_nom').val() == '') {
        $('#workshopNomError').show();
        a = 0;
    } else {
        $('#workshopNomError').hide();
    }

    if ($('#workshop_desc').val() == '') {
        $('#workshopDescError').show();
        a = 0;
    } else {
        $('#workshopDescError').hide();
    }


    var datefull = new Date();

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

    var date2 = (datefull).getFullYear() + "-" + mois + "-" + jours + "T" + heure + ':' + minutes;
    var dateRecup = new Date($('#workshop_date').val());

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
    

    if ($('#workshop_date').val() == '') {

        $('#workshopDateError').show();
        a = 0;
    } else {
        if (date2 > date) {
            $('#workshopDateError').hide();
            $('#workshopDatePassee').show();
            a = 0;
        } else {
            $('#workshopDateError').hide();
            $('#workshopDatePassee').hide();
        }

    }

    if ($('#workshop_nbrPlaces').val() == '') {
        $('#WorkshopPlaceError').show();
        a = 0;
    } else {
        if ($('#workshop_nbrPlaces').val() <= 1) {
            $('#WorkshopPlaceError').hide();
            $('#WorkshopPlaceNegatif').show();
            a = 0;
        }
        else {
            $('#WorkshopPlaceError').hide();
            $('#WorkshopPlaceNegatif').hide();
        }
    }

    if ($('#workshop_duree').val() == '') {
        $('#workshopDureeError').show();
        a = 0;
    }

    if (a === 1) {
        let objectForm = { 'Nom': $('#workshop_nom').val(), 'Description': $('#workshop_desc').val(), 'Date': $('#workshop_date').val(), 'Nombre_de_places': $('#workshop_nbrPlaces').val(), 'Sujet': $('#workshop_sujet').val(),'Duree': $('#workshop_duree').val()};
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
                var test;
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
                        if(nbPlace[0] === undefined){
                            test = 0;
                        }else{
                            test = nbPlace[0][0];
                        }
                    }
                });
                var nbPlacesDispos = tab[i]['nbrPlaces'] - test;
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
                    + '\'' + tab[i]['idAtelier'] + '\','
                    + '\'' + tab[i]['duree'] +'\');">'
                    + tab[i]['nom'] + '</h5>';
                ret += ' </a>';
                ret += '<p class="font-italic text-muted mb-0 small">' + tab[i]['description'] + '</p>';
                ret += '<div class="d-flex align-items-center justify-content-between mt-1">';
                ret += '<h6 class="font-weight-bold my-2">' + date + ' ' + heure + '</h6>';
                ret += '<h7 class="font-weight-bold my-2">' + nbPlacesDispos + '/' + tab[i]['nbrPlaces'] + ' Places disponibles</h7>'; ret += '</div>';
                ret += '<h7 class="font-weight-bold my-2">Duree :' + tab[i]['duree'] + '</h7>'; ret += '</div>';
                ret += '</div><img src="https://res.cloudinary.com/mhmd/image/upload/v1556485076/shoes-1_gthops.jpg" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2">';
                ret += '</div>';
                ret += '</li>';
                nbAteliers++;

            } else {
                var test;
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
                        if(nbPlace[0] === undefined){
                            test = 0;
                        }else{
                            test = nbPlace[0][0];
                        }

                    }
                });
                var nbPlacesDispos = tab[i]['nbrPlaces'] - test;
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
                    + '\'' + tab[i]['duree'] +'\');">'
                    + tab[i]['nom'] + '</h5>';
                ret2 += ' </a>';
                ret2 += '<p class="font-italic text-muted mb-0 small">' + tab[i]['description'] + '</p>';
                ret2 += '<div class="d-flex align-items-center justify-content-between mt-1">';
                ret2 += '<h6 class="font-weight-bold my-2">' + date + ' ' + heure + '</h6>';
                ret2 += '<h7 class="font-weight-bold my-2">' + nbPlacesDispos + '/' + tab[i]['nbrPlaces'] + ' Places disponibles</h7>';
                ret2 += '<h7 class="font-weight-bold my-2">Duree :' + tab[i]['duree'] + '</h7>'; ret += '</div>';
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
function loadWorkshop(i, nom, desc, date2, nb, sujet, idAtelier,duree) {
    $('#content').load("assets/inc/detailWorkshop.php?i=" + idAtelier);
    tnom = nom;
    tdesc = desc;
    tdate2 = date2;
    tnb = nb;
    tsujet = sujet;
    tduree = duree;

}

function detailsWorkshop() {
    var datefull = new Date(tdate2);
    var date = (datefull).getDate() + " " + (month[(datefull).getMonth()]) + " " + (datefull).getFullYear();
    var heure = (datefull).getHours() + 'h' + (datefull).getMinutes();
    $('#nom').text(tnom);
    $('#description').html(tdesc);
    $('#date').html(date);
    $('#heure').html(heure);
    $('#places').html(tnb);
    $('#duree').html(tduree);
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
            annulationAtelier()
        }
    });
}

function downloadPDF(id){
    $.ajax({
        url: "assets/php/pdfCreator.php?id=" +id,
        type: "POST",
        data: {
            "id": id
        },
        datatype: "json",
        success: function (response) {
            window.location.replace("http://localhost:8878/ProjetWeb2019-2020/SITE/assets/php/pdfCreator.php?id=" +id);
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
    var ret2 = "";
    tabEnvoiAtelierParticipe = new Array();
    var indexAtelier = 0;

    for (i = 0; i < tab.length; i++) {
        if (tab[i]['validation'] === '1') {
            var datefull = new Date(tab[i]['date']);
            var date = (datefull).getDate() + " " + (month[(datefull).getMonth()]) + " " + (datefull).getFullYear();
            var heure = (datefull).getHours() + 'h' + (datefull).getMinutes();

            tabEnvoiAtelierParticipe[i] = tab[i];

            var tnom = tab[i]['nom'];
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
                    if(nbPlace[0] === undefined){
                        test = 0;
                    }else{
                        test = nbPlace[0][0];
                    }
                }
            });
            var nbPlacesDispos = tab[i]['nbrPlaces'] - test;
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
                + '\'' + tab[i]['duree'] +'\');">'
                + tab[i]['nom'] + '</h5>';
            ret2 += ' </a>';
            ret2 += '<p class="font-italic text-muted mb-0 small">' + tab[i]['description'] + '</p>';
            ret2 += '<div class="d-flex align-items-center justify-content-between mt-1">';
            ret2 += '<h6 class="font-weight-bold my-2">' + date + ' ' + heure + '</h6>';
            ret2 += '<h7 class="font-weight-bold my-2">' + nbPlacesDispos + '/' + tab[i]['nbrPlaces'] + ' Places disponibles</h7>';
            ret2 += '<h7 class="font-weight-bold my-2">Duree :' + tab[i]['duree'] + '</h7>';
            ret2 += '</div>';
            ret2 += '</div><img src="https://res.cloudinary.com/mhmd/image/upload/v1556485076/shoes-1_gthops.jpg" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2">';
            ret2 += '</div>';
            ret2 += '</li>';
            nbAtelierParticipe++;

        }
    }
    $('#itemAtelierParticipe').append(ret2);
    paginationAtelierParticipe(nbAtelierParticipe);


}


function paginationAtelierParticipe(nAt) {
    var limitePage = 4;
    var nbPages = Math.ceil(nAt / limitePage);
    removeClassActive();
    addClassActive('navWorkshops');
    $("#itemAtelierParticipe .list-group-item:gt(" + (limitePage - 1) + ")").hide();
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
                $("#itemAtelierParticipe .list-group-item:eq(" + i + ")").show();
            }
        }


    })

}
function loadWorkshop(i, nom, desc, date2, nb, sujet, idAtelier,duree) {
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
    var ret2 = "";
    tabEnvoiMesAteliers = new Array();
    var indexAtelier = 0;

    for (i = 0; i < tab.length; i++) {
        var datefull = new Date(tab[i]['date']);
        var date = (datefull).getDate() + " " + (month[(datefull).getMonth()]) + " " + (datefull).getFullYear();
        var heure = (datefull).getHours() + 'h' + (datefull).getMinutes();

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
                if(nbPlace[0] === undefined){
                    test = 0;
                }else{
                    test = nbPlace[0][0];
                }
            }
        });
        var nbPlacesDispos = tab[i]['nbrPlaces'] - test;
        var tnom = tab[i]['nom'];
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
            + '\'' + tab[i]['duree'] +'\');">'
            + tab[i]['nom'] + '</h5>';
        ret2 += ' </a>';
        ret2 += '<p class="font-italic text-muted mb-0 small">' + tab[i]['description'] + '</p>';
        ret2 += '<div class="d-flex align-items-center justify-content-between mt-1">';
        ret2 += '<h6 class="font-weight-bold my-2">' + date + ' ' + heure + '</h6>';
        ret2 += '<h7 class="font-weight-bold my-2">' + nbPlacesDispos + '/' + tab[i]['nbrPlaces'] + ' Places disponibles</h7>';
        ret2 += '<h7 class="font-weight-bold my-2">Duree :' + tab[i]['duree'] + '</h7>';
        ret2 += '</div>';
        ret2 += '</div><img src="https://res.cloudinary.com/mhmd/image/upload/v1556485076/shoes-1_gthops.jpg" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2">';
        ret2 += '</div>';
        ret2 += '</li>';
        nbMesAteliers++;

    }
    $('#itemMesAteliers').append(ret2);
    paginationMesAteliers(nbMesAteliers);


}


function paginationMesAteliers(nAt) {
    var limitePage = 4;
    var nbPages = Math.ceil(nAt / limitePage);
    removeClassActive();
    addClassActive('navWorkshops');
    $("#itemMesAteliers .list-group-item:gt(" + (limitePage - 1) + ")").hide();
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
                $("#itemMesAteliers .list-group-item:eq(" + i + ")").show();
            }
        }


    })

}
function loadMesWorkshop(i, nom, desc, date2, nb, sujet, idAtelier,duree) {
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

function afficheModifAtelier(nom, desc, date2, nb, sujet, idAtelier,duree) {
    $('#content').load("assets/inc/modifWorkshop.php?i=" + idAtelier);
    tnomModif = nom;
    tdescModif = desc;
    tdateModif = date2;
    tnbModif = nb;
    tsujetModif = sujet;
    tdureeModif= duree;
}

function afficheInput() {
    var dateRecup = new Date(tdateModif);

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
    nomModif = '<input id="nomModifWork" type="text" value="' + tnomModif + '"/>';
    descModif = '<input id="descModifWork" type="text" value="' + tdescModif + '"/>';
    dateModif = '<input id="dateModifWork" type="datetime-local" value="' + date + '"/>';
    nbModif = '<input id="nbPlaceModifWork" "type="text" value="' + tnbModif + '"/>';
    sujetModif = '<select name="workshop_animateur" id="sujetModifWork">';
    if(tsujetModif === "Comptabilité"){
        sujetModif += '<option value="Comptabilité" selected>Comptabilité</option>';
        sujetModif += '<option value="Marketing">Marketing</option>';
        sujetModif += '<option value="Informatique">Informatique</option>';
        sujetModif += '<option value="Electro-mécanique">Electro-mécanique</option>';
        sujetModif += '<option value="Droit">Droit</option>';
    }else if(tsujetModif === "Marketing"){
        sujetModif += '<option value="Comptabilité">Comptabilité</option>';
        sujetModif += '<option value="Marketing" selected>Marketing</option>';
        sujetModif += '<option value="Informatique">Informatique</option>';
        sujetModif += '<option value="Electro-mécanique">Electro-mécanique</option>';
        sujetModif += '<option value="Droit">Droit</option>';
    }else if(tsujetModif === "Informatique"){
        sujetModif += '<option value="Comptabilité">Comptabilité</option>';
        sujetModif += '<option value="Marketing">Marketing</option>';
        sujetModif += '<option value="Informatique" selected>Informatique</option>';
        sujetModif += '<option value="Electro-mécanique">Electro-mécanique</option>';
        sujetModif += '<option value="Droit">Droit</option>';
    }else if(tsujetModif === "Electro-mécanique"){
        sujetModif += '<option value="Comptabilité">Comptabilité</option>';
        sujetModif += '<option value="Marketing">Marketing</option>';
        sujetModif += '<option value="Informatique">Informatique</option>';
        sujetModif += '<option value="Electro-mécanique" selected>Electro-mécanique</option>';
        sujetModif += '<option value="Droit">Droit</option>';
    }else{
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

function validerModif(nom, desc, date, nb, sujet, idAtelier,duree) {

    let a = 1;
    let currentDate = new Date();
    event.preventDefault();
    if ($('#nomModifWork').val() == '') {
        $('#workshopModifNomError').show();
        a = 0;
    } else {
        $('#workshopModifNomError').hide();
    }

    if ($('#descModifWork').val() == '') {
        $('#workshopModifDescError').show();
        a = 0;
    } else {
        $('#workshopModifDescError').hide();
    }

    var datefull = new Date();

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

    var date2 = (datefull).getFullYear() + "-" + mois + "-" + jours + "T" + heure + ':' + minutes;
    var dateRecup = new Date($('#dateModifWork').val());

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
        a = 0;
    } else {
        if (date2 > date) {
            $('#workshopModifDateError').hide();
            $('#workshopModifDatePassee').show();
            a = 0;
        } else {
            $('#workshopModifDateError').hide();
            $('#workshopModifDatePassee').hide();
        }
    }

    if ($('#nbPlaceModifWork').val() == '') {
        $('#WorkshopModifPlaceError').show();
        a = 0;
    } else {
        if ($('#nbPlaceModifWork').val() <= 1) {
            $('#WorkshopModifPlaceError').hide();
            $('#WorkshopModifPlaceNegatif').show();
            a = 0;
        }
        else {
            $('#WorkshopModifPlaceError').hide();
            $('#WorkshopModifPlaceNegatif').hide();
        }
    }

    if ($('#dureeModifWork').val() == '') {
        $('#WorkshopModifDureeError').show();
        a = 0;
    }

    if (a === 1) {
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
                "duree" : duree
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