"use strict";
$(document).ready(function () {
    $(".image").css({
        opacity: 1.0
    });
    $(".image").mouseenter(function () {
        $(this).stop().animate({
            opacity: 0.5
        }, 2000);
    });
    $(".image").mouseleave(function () {
        $(this).stop().animate({
            opacity: 1.0
        }, 2000);
    });

    $(".image").click(function () {
        //Reference to previous large image
        var old_large_image = $("#largeimage img");

        //Create image 
        var large_image = $("<img src=\"" + this.src + "\">");

        //Set to new large image
        large_image.hide();

        //Setting size
        large_image.prop("width", this.width * 2);
        large_image.prop("height", this.height * 2);

        //Image animation
        old_large_image.fadeOut(
            3000,

            function () {
                $(this).remove();
            }
        );

        //New large image into DOM
        $("#largeimage").append(large_image);

        // Start fading in the new large image.
        large_image.fadeIn(3000);

    });
    $("#gallery img:last").click();
});
