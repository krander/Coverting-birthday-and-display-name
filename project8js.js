$(document).ready(function () {
    var number = (prompt("What is your lucky number?"));
    //messages
    var quote = [
                "Eat Fresh.",
                "I'm lovin it.",
                "Have it your way.",
                "Just do it.",
                "Snap! Crackle! Pop!",
                "Taste the rainbow.",
                "They're g-g-grrreat!",
                "It gives you wings.",
                "Maybe she's born with it.",
                "It keeps going, and going, and going...",
                "Can you hear me now? Good.",
            ];
    //logic for message
    if (number >= 0) {
        var end_quote = (number) % 10;
        $("#quotes").html("Your shirt company slogan is " + quote[end_quote]);
    } else {
        alert("Your lucky number must be greater than or equal to zero.");
    }
});
