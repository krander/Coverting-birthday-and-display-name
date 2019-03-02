"use strict";
//function to hold # of clicks
$(document).ready(function () {
    var extraData = 0;
    $('#output').bind("click", extraData, function (e) {
        $('#receiver').text("I was clicked = " + ++extraData + " times")
    });
    //clears input & brings back to zero
    $('#clear').click(function () {
        $('#receiver').empty();
        extraData = 0;
    });
});

$(document).ready(function () {
    console.log("Here");
    $(document).click(function (e) {
        //$('#output').append("clentX="+e.clientX);
        $('#message1').prepend("<br>" + " Mouse click placement: " + e.clientX + "," + e.clientY);
        console.log("clientX=" + e.clientX);
        console.log("clientY=" + e.clientY);
        console.log("e parameters=" + e.toString());
    });
    //stop event from propagation up
    $('button').click(function (evt) {
        evt.stopPropagation();
    });
    //clears all
    $('#clear').click(function () {
        $('#message1').empty();
        extraData = 0;
    });
});
