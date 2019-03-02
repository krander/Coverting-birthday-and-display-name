"use strict";

$(function () {
    //Clicking removes default text
    $(':text').focus(function () {
        //console.log('got focus');
        var field = $(this);
        //Default text loading		
        if (field.val() == field.prop('defaultValue')) {
            field.val('');
        }
    });
    $(':text').blur(function () {
        var field = $(this);
        //Default text loading part 2
        if (field.val() == '') {
            field.val(field.prop('defaultValue'));
        }
    });
    $("#signup").submit(function () {
        var field = $("#getinput");
        var field1 = $("#getinput1");
        var field2 = $("#getinput2");
        //Invalid does not navigate away
        if (field.val() == '' || field.val() == field.prop('defaultValue')) {
            alert("Please fill out every field and submit again");
            //
            return false;
        } else if (field1.val() == '' || field1.val() == field1.prop('defaultValue')) {
            alert("Please fill out every field and submit again");
            return false;
        } else if (field2.val() == '' || field2.val() == field2.prop('defaultValue')) {
            alert("Please fill out every field and submit again");
            return false;
        } else {
            //Valid displays new form
            alert('Your name is ' + $("#getinput").val() + ' you live in ' + $("#getinput1").val() + ' you are ' + $("#getinput2").val() + ' years old');
        }
    });
});
