"use strict";
$(document).ready(function () {
    $(".image").css({
        opacity: 1.0
    });
    $(".image").mouseenter(function () {
        $(this).stop().animate({
            opacity: 0.05
        }, 2000);
    });
    $(".image").mouseleave(function () {
        $(this).stop().animate({
            opacity: 1.0
        }, 2000);
    });
    $(".image").mouseenter(function () {

        //Previous large image
        var old_large_image = $("#largeimage img");

        //Creating element for largeimage to reference
        var large_image = $("<img src=\"" + this.src + "\">");

        //Display settings / remove from DOM once faded
        large_image.hide();
        large_image.prop("width", this.width * 2);
        large_image.prop("height", this.height * 2);
        old_large_image.fadeOut(
            2000,

            //Callback
            function () {
                $(this).remove();
            }
        );

        //New largeimage
        $("#largeimage").append(large_image);

        //New largeimage display settings
        large_image.fadeIn(3000);
    });
    $("#gallery img:last").click();
});
