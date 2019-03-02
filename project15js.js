"use strict";
$(document).ready(function () {
    //Sliding to right by 300px
    $(".slidingimage").click(function () {
        var imgPosition = $(this).position();
        if (imgPosition.left >= 300) {
            $(this).stop().animate({
                left: 1
            }, 2000);
        } else {
            $(this).stop().animate({
                left: 300
            }, 2000);
        }
    });
});
