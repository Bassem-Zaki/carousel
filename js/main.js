/*global $ */

$(function () {
    "use strict";

    // start carousel with event click setInterval

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
                    .animate(
                        {
                            left: "0"
                        },
                        600
                    )
                    .siblings()
                    .removeClass("animateProjects active");
            }
        });
        $(".projects .bg-img-pro").each(function () {
            var bg_img_id = $(this).attr("data-id");
            if (bg_img_id === side_nav_id) {
                $(this)
                    .addClass("bg-animate active")
                    .animate(
                        {
                            opacity: "1"
                        },
                        600
                    )
                    .siblings()
                    .removeClass("bg-animate active");
            }
        });
        $(".porducts-carousel ul").each(function () {
            var carousel_id = $(this).attr("data-id");
            if (carousel_id === side_nav_id) {
                $(this)
                    .addClass("animateCarousel active")
                    .animate(
                        {
                            top: "0"
                        },
                        600
                    )
                    .siblings()
                    .removeClass("animateCarousel active");
            }
        });
    });

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

    // End carousel with event click

    // Start auto carousel
   

    (function autoAnimate() {
        
        
        $(
            ".side-nav ul .active, .projects .project.active, .porducts-carousel .active, .projects .bg-img-box .active"
        ).each(function () {
            var sideNav = $(".side-nav ul .active"),
                porjectsActive = $(".projects .project.active"),
                porductsCarousel = $(".porducts-carousel .active"),
                bgImgPro = $(".projects .bg-img-box .active"),
                allHover = $(".side-nav, .projects, .porducts-carousel"),
                allSelect = $(".side-nav ul .active, .projects .project.active, .porducts-carousel .active, .projects .bg-img-box .active");
            
            if (!$(this).is(":last-child")) {
                sideNav.delay(3000).queue(function () {
                    sideNav
                        .removeClass("active")
                        .next()
                        .addClass("active");
                    $(this).clearQueue();
                    autoAnimate();
                });

                porjectsActive.delay(3000).queue(function () {
                    $(this)
                        .removeClass("animateProjects active")
                        .next()
                        .addClass("animateProjects active");
                    autoAnimate();
                    $(this).clearQueue();
                });

                bgImgPro.delay(3000).queue(function () {
                    $(this)
                        .removeClass("bg-animate active")
                        .next()
                        .addClass("bg-animate active");
                    autoAnimate();
                    $(this).clearQueue();
                });

                porductsCarousel.delay(3000).queue(function () {
                    $(this)
                        .removeClass("animateCarousel active")
                        .next()
                        .addClass("animateCarousel active");
                    autoAnimate();
                    $(this).clearQueue();
                });
                
                
            } else {
                
                $(this).delay(3000).queue(function () {
                    sideNav.removeClass("active");
                    $(".side-nav ul li")
                        .eq(0)
                        .addClass("active");
                    $(this).clearQueue();
                    autoAnimate();
                });

                porjectsActive.delay(3000).queue(function () {
                    $(this).removeClass("animateProjects active");

                    $(".projects .project")
                        .eq(0)
                        .addClass("animateProjects active");
                    autoAnimate();
                    $(this).clearQueue();
                });

                bgImgPro.delay(3000).queue(function () {
                    $(this).removeClass("bg-animate active");

                    $(".projects .bg-img-box .bg-img-pro")
                        .eq(0)
                        .addClass("bg-animate active");
                    autoAnimate();
                    $(this).clearQueue();
                });

                porductsCarousel.delay(3000).queue(function () {
                    $(this).removeClass("animateCarousel active");

                    $(".porducts-carousel ul")
                        .eq(0)
                        .addClass("animateCarousel active");
                    autoAnimate();
                    $(this).clearQueue();
                });
            }
            allHover.mouseenter(function () {
                allSelect.stop(true, true);
            });
            allHover.mouseleave(function () {
                autoAnimate();
            });
        });
        

        
    }());
  // End auto carousel
});
