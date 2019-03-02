"use strict";
$(document).ready(function () {
    //When hovering, scale up
    $(".image").mouseenter(function () {
        $(this).stop().animate({
            height: "400px",
            width: "500px",
        }, 3000);
    });
    //When not hovering, scale down
    $(".image").mouseleave(function () {
        $(this).stop().animate({
            height: "200px",
            width: "250px",
        }, 3000);
    });
});
