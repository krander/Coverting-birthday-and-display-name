var scores = [];

//favorite word prompt
var score = (prompt("Please enter your favorite word and stop when finished."));

//stop triggers termination of loop
while (score != 'stop') {
    scores.push(score);
    score = (prompt("Please enter your favorite word and stop when finished."));
}
var total_score = 0;
for (var index = 0; index < scores.length; index++) {
    total_score += scores[index];
}

//alphabetize words
document.write("<h1>Your favorite words are " + scores.sort().join(", ") + "</h1>");
