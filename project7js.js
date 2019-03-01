"use strict";
$(document).ready(function () {
    //click red
    $(".top").click(function () {
        $(this).css("text-transform", "uppercase")
    });

    //double click green
    $(".top").dblclick(function () {
        $(this).css("color", "red")
    });

    //mouseenter bold
    $(".bottom").mouseenter(function () {
        $(this).css("font-style", "italic");
    });

    //mouseleave unbolds
    $(".bottom").mouseleave(function () {
        $(this).css("font-style", "normal");
    });
});
