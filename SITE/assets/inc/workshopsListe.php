<?php
session_start();
$_SESSION['pageActuel']='workshopsListe.php';
include '../php/listeAtelier.php';
$indexAtelier=0;
?>
<script>
nbAteliers= <?= $nbAteliers = (sizeof($recupAtelier)); ?>;
console.log(nbAteliers);
limitePage = 4;
nbPages = Math.ceil(nbAteliers/limitePage) ;
tabAteliers = <?= json_encode($recupAtelier);?> ;


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
                <ul class="list-group shadow" id="itemAtelier">
                <?php foreach($recupAtelier as $item):?>
                    <!-- list group item-->
                    <li class="list-group-item">
                        <!-- Custom content-->
                        <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                            <div class="media-body order-2 order-lg-1">
                                <a>
                                    <h5 class="mt-0 font-weight-bold mb-2" onclick="detailWorkshop(<?= $indexAtelier++ ?>)">
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
                        
                </div>
            </div>
        </div>
    </div>
    <script>
    removeClassActive();
    addClassActive('navWorkshops');
    $("#itemAtelier .list-group-item:gt("+ (limitePage - 1) +")").hide();
    $(".paginationn").append("<li class='page-item active current-page'><a href='javascript:void(0)' class='page-link'>"+ 1 +"</a></li>");
    for(var i=2; i <= nbPages; i++){
        $(".paginationn").append("<li class='page-item current-page'><a href='javascript:void(0)' class='page-link'>"+ i +"</a></li>");
    }
    $(".current-page").on("click", function(){
        if($(this).hasClass("active")){
            return false;
        }
        else{
            var currentPage = ($(this).index())+1;
            $(".paginationn li").removeClass("active");
            $(this).addClass("active");
            $(".list-group-item").hide();
            var total = limitePage*currentPage;
            for(var i = total-limitePage; i < total; i++){
                $("#itemAtelier .list-group-item:eq("+ i +")").show();
            }
        }
        

    })
    </script>
</main>