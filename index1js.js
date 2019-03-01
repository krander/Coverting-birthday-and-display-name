var userBirthday = prompt("When is your birthday?", "mm/dd/yyy")
var userBirthdayAsDate = new Date(userBirthday)
var userBirthdayAsNumber = userBirthdayAsDate.getFullYear()
var currentDate = new Date()
var currentDateAsNumber = currentDate.getFullYear()
var approximateBirthdayNumber = currentDateAsNumber - userBirthdayAsNumber
document.writeln("Your age is " + approximateBirthdayNumber + ".")
