"use strict";
var quote = [
            'Make America Great Again',
            'Change We Can Believe In',
            'Reformer With Results',
            'Don’t Stop Thinking About Tomorrow',
            'Kinder, Gentler Nation',
            'It’s Morning Again in America',
            'Not Just Peanuts',
            'He’s Making Us Proud Again',
            'For the Future',
            'The Stakes are too High for You to Stay at Home'
        ];
        
//allows for A - Z and 0 - 9 inputs, with moduelo division quote
function display_quotes() {
    var seconds = $("#seconds").val();
    var seconds = event.charCode || event.keyCode;
    var result = (seconds + 1) % quote.length;
    $("div#output").html(quote[result]);
}

//displays first element of array with keypress
$(document).ready(function () {
    $('#output').html(quote[0]);
    $("#seconds").keypress(function (e) {
        display_quotes();
    });
});
