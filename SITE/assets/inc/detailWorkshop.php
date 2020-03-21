<?php 
session_start();
include '../php/listeAtelier.php';
$id = $_GET['i'];
$fullDate= $recupAtelier[$id]{'date'};

?>

<script>
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
tabAteliers = <?php echo json_encode($recupAtelier)?> ;
index= <?php echo $id ?>;
var datefull = new Date(tabAteliers[index]['date']);
console.log(index);
var date = (datefull).getDate() +" "+ (month[(datefull).getMonth()]) +" "+ (datefull).getFullYear();
var heure = (datefull).getHours() +'h'+(datefull).getMinutes();
$('#nom').html(tabAteliers[index]['nom']);
$('#description').html(tabAteliers[index]['description']);
$('#date').html(date);
$('#heure').html(heure);
</script>


<main id="content" style="margin-top:6em">
<!-- Page Content -->
<div class="container">

  <!-- Portfolio Item Heading -->


  <h1 class="my-4">
    <span id="nom"></span>
  </h1>

  <!-- Portfolio Item Row -->
  <div class="row">

    <div class="col-md-8">
      <img class="img-fluid" src="http://placehold.it/750x500" alt="">
    </div>

    <div class="col-md-4">
      <h3 class="my-3">Description atelier</h3>
      <p id="description"></p>
      <h3 class="my-3">Date de l'atelier</h3>
      <ul>
        <li id="date"></li>
        <li id="heure"></li>
        
      </ul>
    </div>

  </div>

  <script>
    removeClassActive();
    addClassActive('navWorkshops');
</script>
</main>