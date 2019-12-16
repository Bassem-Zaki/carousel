/*global $ */

$(function () {
    "use strict";

    // start Sidebar with event click

    $(".side-nav li span").on("click", function () {
        var side_nav_id = $(this).attr("data-id");
        
        $(this)
            .parent("li")
            .addClass("active")
            .siblings()
            .removeClass("active");
        

        $(".project").each(function () {
            var project_id = $(this).attr("data-id");
            if (project_id === side_nav_id) {
                $(this)
                    .addClass("animateProjects active")
                    .siblings()
                    .removeClass("animateProjects active");
            }
        });
        $(".projects .bg-img-pro").each(function () {
            var bg_img_id = $(this).attr("data-id");
            if (bg_img_id === side_nav_id) {
                $(this)
                    .addClass("bg-animate active")
                    .siblings()
                    .removeClass("bg-animate active");
            }
        });
        $(".porducts-carousel ul").each(function () {
            var carousel_id = $(this).attr("data-id");
            if (carousel_id === side_nav_id) {
                $(this)
                    .addClass("animateCarousel active")
                    .siblings()
                    .removeClass("animateCarousel active");
            }
        });
    });
    
    // End Sidebar with event click
    
    // Start Carousel

    $(".porducts-carousel .owl-carousel").owlCarousel({
        rtl: true,
        loop: false,
        margin: 10,
        responsiveClass: true,
        navText: [
            '<span class="btn-arrow carousel-arrow-right">&lt;</span>',
            '<span class="btn-arrow carousel-arrow-left">&gt;</span>'
        ],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            },
            1500: {
                items: 2
            }
        }
    });

    // End Carousel

    // Start auto carousel

    (function autoAnimate() {
        
        $(".side-nav ul .active, .projects .project.active, .projects .bg-img-box .active, .porducts-carousel .active").each(function () {
            var sideNav = $(".side-nav ul .active"),
                porjectsActive = $(".projects .project.active"),
                bgImgPro = $(".projects .bg-img-box .active"),
                porductsCarousel = $(".porducts-carousel .active"),
                hoverAll = $(".side-nav, .projects, .porducts-carousel"),
                selectAll = $(".side-nav ul .active, .projects .project.active, .porducts-carousel .active, .projects .bg-img-box .active");
            
            if (!$(this).is(":last-child")) {

                selectAll.delay(3000).queue(function () {
                    sideNav
                        .removeClass("active")
                        .next()
                        .addClass("active");
                    porjectsActive
                        .removeClass("animateProjects active")
                        .next()
                        .addClass("animateProjects active");
                    bgImgPro
                        .removeClass("bg-animate active")
                        .next()
                        .addClass("bg-animate active");
                    porductsCarousel
                        .removeClass("animateCarousel active")
                        .next()
                        .addClass("animateCarousel active");
                    $(this).clearQueue();
                    autoAnimate();
                });

            } else {
                
                selectAll.delay(3000).queue(function () {
                    sideNav.removeClass("active");
                    $(".side-nav ul li").eq(0).addClass("active");
                    porjectsActive.removeClass("animateProjects active");
                    $(".projects .project").eq(0).addClass("animateProjects active");
                    bgImgPro.removeClass("bg-animate active");
                    $(".projects .bg-img-box .bg-img-pro").eq(0).addClass("bg-animate active");
                    porductsCarousel.removeClass("animateCarousel active");
                    $(".porducts-carousel ul").eq(0).addClass("animateCarousel active");
                    $(this).clearQueue();
                    autoAnimate();
                });
            }
            hoverAll.hover(function () {
                selectAll.clearQueue();
            }, function () {
                selectAll.delay(2000).queue(function () {
                    $(this).clearQueue();
                    autoAnimate();
                });
            });
            
        });
    }());

  // End auto carousel
});
