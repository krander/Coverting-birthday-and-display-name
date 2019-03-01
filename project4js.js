var input = Number(prompt("What is your lucky number?"))
var myArray = ['The Beatles', 'The Rolling Stones', 'The Who', 'The Kinks', 'Led Zeppelin', 'The Byrds', 'Pink Floyd', 'Grateful Dead', 'The Doors', 'Jefferson Airplane'];
document.write("Your shirt will have " + myArray[input % myArray.length] + " on it!")
