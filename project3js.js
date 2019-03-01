var numOne = prompt("What is your first favorite number?","")
var numOneNumber = Number(numOne)
var numTwo = prompt("What is your second favorite number?","")
var numTwoNumber = Number (numTwo)
var numThree = prompt("What is your third favorite number?","")
var numThreeNumber = Number (numThree)
var average = (numOneNumber + numTwoNumber + numThreeNumber) / 3
document.writeln("The average of your three favorite numbers is " + average + ".")
