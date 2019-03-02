"use strict";
var clicked = false;
$(document).ready(function () {
    //True or false clicked
    $(document).mousemove(function (ev) {
        if (clicked == false) {
            clicked = false;
        } else {
            clicked = true;
            //Image follows mouse
            $("#moveimage").offset({
                top: ev.pageY,
                left: ev.pageX
            });
        }
    });
    //See if mouse was clicked
    $("html").click(function () {
        if (clicked) {
            clicked = false;
            $("#clickstatus").text("Follow mouse=" + clicked);
        } else {
            clicked = true;
            $("#clickstatus").text("Follow mouse=" + clicked);
        }
    });
    //Document x and y coordinates
    $(document).on("mousemove", function (event) {
        $("#log").html("clientX=" + event.pageX + "<br/>" + "<br/>" + "clientY=" + event.pageY);
    });
});
