<?php
session_start();
$_SESSION['pageActuel']='workshopsListe.php';
echo $_SESSION['pageActuel'];
include '../php/listeAtelier.php';
?>
<script>
nbPages = <?= $nbPages=ceil((sizeof($recupAtelier) + 1) / 4); ?> ;
console.log(nbPages);
</script>


<main id="content">
    <div class="container py-5" id="listeAteliers">

        <!-- For demo purpose -->
        <div class="row text-center mb-5">
            <div class="col-lg-7 mx-auto">
                <h1>Listes des workshops</h1>
            </div>
        </div>
        <!-- End -->

        <div class="row">
            <div class="col-lg-8 mx-auto">

                <!-- List group-->
                <ul class="list-group shadow">
                    <?php foreach($recupAtelier as $item):?>
                    <!-- list group item-->
                    <li class="list-group-item">
                        <!-- Custom content-->
                        <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                            <div class="media-body order-2 order-lg-1">
                                <a>
                                    <h5 class="mt-0 font-weight-bold mb-2" onclick="detailWorkshop()">
                                        <?= $item{'nom'}; ?></h5>
                                </a>
                                <p class="font-italic text-muted mb-0 small"><?= $item{'description'}; ?></p>
                                <div class="d-flex align-items-center justify-content-between mt-1">
                                    <h6 class="font-weight-bold my-2"><?= date("d-m-Y", strtotime($item{'date'})); ?></h6>
                                    <ul class="list-inline small">
                                        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                        <li class="list-inline-item m-0"><i class="fa fa-star-o text-gray"></i></li>
                                    </ul>
                                </div>
                            </div><img src="https://res.cloudinary.com/mhmd/image/upload/v1556485076/shoes-1_gthops.jpg"
                                alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2">
                        </div>
                        <!-- End -->
                    </li>
                    <!-- End -->
                    <?php endforeach;?>
                </ul>
                <!-- End -->
            </div>
        </div>
        <div class="row text-center mb-7">
            <div class="col-lg-1 mx-auto">
                <br>
            <div class="paginationn">
        <?php for($i=1; $i<= $nbPages; $i++){ ?>
                    <li class="page-item"><a href="#" class="page-link"><?= $i ?></a></li>
                <?php } ?>
        </div>
            </div>
        </div>
    </div>
    <script>
    removeClassActive();
    addClassActive('navWorkshops');
    </script>
</main>