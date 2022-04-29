/**
 * Based off template
 */

$(document).ready(function () {

    /*************** Navigation *****************/

    $("#tm-main-nav").singlePageNav({
        filter: ':not(.external)'
    });

    $(".navbar-toggler").on("click", function(e) {
        $(".tm-sidebar").toggleClass("show");
        e.stopPropagation();
    });

    $("html").click(function(e) {
        var sidebar = document.getElementById("tm-sidebar");

        if (!sidebar.contains(e.target)) {
            $(".tm-sidebar").removeClass("show");
        }
    });

    $("#tm-sidebar .nav-link").click(function(e) {
        $(".tm-sidebar").removeClass("show");
    });

    /****************** Window resize ******************/

    $(window).resize(function(){
        itemsPerPage = defineItemsPerPage();
        setPagination();
        goToPage(1);
    });

    /************** "About" Carousel *****************/

    $('.tm-carousel').slick({
        dots: true,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 2500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1125,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});