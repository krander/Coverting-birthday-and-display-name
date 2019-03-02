"use strict";
$(document).ready(function () {
    $("#togglePullQuote").click(function () {
        if ($(this).text() == "Highlight") {
            $('span.pq').each(function () {
                $(this).toggleClass('pullquote');
                $("#togglePullQuote").text("Unhighlight");
            }); // end each		
        } else {
            $('span.pq').each(function () {
                $(this).toggleClass('pullquote');
            }); // end each		
            $("#togglePullQuote").text("Highlight");
        }
    });
});
