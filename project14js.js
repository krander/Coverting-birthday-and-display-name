"use strict";
$(document).ready(function () {
    //When hovering, scale up
    $(".image").mouseenter(function () {
        $(this).addClass("size");
    });
    //When not hovering, scale down
    $(".image").mouseleave(function () {
        $(this).removeClass("size");
        $(this).addClass("leave");
    });
});
