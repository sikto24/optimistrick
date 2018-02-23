(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        $(".slider-area").owlCarousel({
            items: 1,
            autoplay: false
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	