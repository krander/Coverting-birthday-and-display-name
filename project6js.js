    //get numbers
    var numbers = [];
    var product = Number(prompt("Please enter a number or -1 to stop entering numbers"));
    while (product != -1) {
        numbers.push(product);
        product = Number(prompt("Please enter a number or -1 to stop entering numbers"));
    }

    //sum up numbers
    var total_product = 1;
    for (var index = 0; index < numbers.length; index++) {
        total_product *= numbers[index];
    }

    var multiply = total_product *= product * (-1);
    document.write("<p>Your numbers are " + numbers.join(", ") + "</p>");
    document.write("<p>The product of these numbers is " + multiply + ".</p>");
