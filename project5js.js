"use strict";

var input = Number(prompt("What is your lucky number?"))
var myArray = ['The Beatles', 'The Rolling Stones', 'The Who', 'The Kinks', 'Led Zeppelin', 'The Byrds', 'Pink Floyd', 'Grateful Dead', 'The Doors', 'Jefferson Airplane'];

//prompt for number that's not negative
if (input < 0) {
    alert('Please enter valid number 0 or above.')
} else if (input >= 0) {
    document.write("Your shirt will have " + myArray[input % myArray.length] + " on it.")
}
