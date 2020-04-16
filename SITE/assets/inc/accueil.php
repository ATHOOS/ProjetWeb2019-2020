<?php
session_start();
$_SESSION['pageActuel']='accueil.php';
?>
<div id="content">
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">

        <div class="container">
            <div class="row">
                <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
                    <h1>Ephec Workshops</h1>
                    <h2>Partagez votre expérience, assistez à des ateliers, donnez votre avis !</h2>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 hero-img">
                    <img src="assets/img/ephec.png"  alt="logoEphec">
                </div>
            </div>
        </div>

    </section><!-- End Hero -->

    <main id="main">

        <!-- ======= About Section ======= -->
        <section id="about" class="about">
            <div class="container">

                <div class="row justify-content-between">
                    <div class="col-lg-5 d-flex align-items-center justify-content-center about-img">
                        <img src="assets/img/shutterstock_421087330.jpg" class="img-fluid" alt="" data-aos="zoom-in">
                    </div>
                    <div class="col-lg-6 pt-5 pt-lg-0">
                        <h3 data-aos="fade-up">Qu'est ce que c'est ?</h3>
                        <p data-aos="fade-up" data-aos-delay="100">
                            Ephec Workshop est une plateforme d'échange entre étudiants désireux de partager leurs expériences. 
                        </p>
                        <div class="row">
                            <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <i class="bx bx-receipt"></i>
                                <h4>Animation</h4>
                                <p>Des étudiants peuvent proposer des ateliers qu'ils animeront eux-mêmes.
                                </p>
                            </div>
                            <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <i class="bx bx-cube-alt"></i>
                                <h4>Participation</h4>
                                <p>Et d'autres étudiants peuvent s'inscrirent à ces ateliers et y participer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <script>
                removeClassActive();
                addClassActive('navAccueil');
                </script>
            </div>
</div>