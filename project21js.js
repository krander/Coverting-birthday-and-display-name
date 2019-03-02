"use strict";
//Date picker, spinner, date validation
$(function () {
    $("#datepicker").datepicker();
    $("#spinner").spinner();
    $('#signup').validate();
    $('#signup').submit(function (e) {
        //Prevents submission
        e.preventDefault();
        //Invalid form results in return
        if (!$("#signup").valid()) return;
    });
    //Display input
    var myForm = document.getElementById("signup");
    myForm.onsubmit = function () {
        var n1 = document.getElementById("name").value;
        var n2 = document.getElementById("datepicker").value;
        var n3 = document.getElementById("spinner").value;
        var n4 = document.getElementById("web").value;
        var n5 = document.getElementById("email").value;
        document.getElementById("result").innerHTML = "Your name: " + n1 + "<br />" + "Your birth date: " + n2 + "<br />" + "Your family member amount: " + n3 + "<br />" + "Your favorite website: " + n4 + "<br />" + "Your work email: " + n5;
        return false;
    }
});
