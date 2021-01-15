
// Changing case

// Task # 1

var inputStr = prompt("Input any string: ");
var caseUpper = inputStr.toUpperCase();
document.write("Upper Case: " + caseUpper);

// Task # 2


var firstValue = userInput.slice(0, 1);
var title = userInput.slice(1, );
document.write("Title case: " + firstValue.toUpperCase() + title.toLowerCase());
document.write("<br/><br/><br/><br/>");

// Strings: measuring length and extracting parts

// Task 1// 

var mobile = prompt("Enter your favorite Mobile Phone Model");
var lenght = mobile.length;
document.write(" My favorite mobile phone model is : " + mobile);
document.write("Number : " + number + " <br>Result : " + result);
document.write("<br/><br/><br/><br/>");


// Task # 2 //

var inputStr= prompt("Enter a String: ");
document.write("User Input: " + inputStr);
var lastValue = inputStr[inputStr.length - 1];
document.write("User input: " + inputStr + "<br>Last character of input: " + lastValue);
document.write("<br/><br/><br/><br/>");


// Strings: finding segments//

// Task # 2//
// Part #1//

var country = "Pakistan";
var index = country.indexOf("n");
document.write("String " + country + "<br/>");
document.write("Index of 'n' is: " + index); 
document.write("Index of 'n' is: " + index);
document.write("<br/><br/><br/><br/>");

// Part # 2//



// Part# 3//

var str = "The quick brown fox jumps over the lazy dog ";
var strLength = str.toLowerCase();
var counting = (strLength.match(/the/g)).length;
document.write("Text: " + strLength + "<br>There are " + counting + " occurance(s) of word 'the'");
document.write("<br/><br/><br/><br/>");

// Strings: finding a character at a location

// Task # 1//


var nationality = "Pakistani";
var charValue = nationality.charAt(3);
document.write("String: " + nationality + "<br/>");
document.write("Character at index 3: " + charValue);
document.write("<br/><br/>");

// Strings: replacing characters

//  Task # 1 //


var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("City: " + city + "<br>");
document.write("After replacement: " + newCity);
document.write("<br/><br/>");


// Task # 2


var text = "Ali and Sami are best friends.They play cricket and football together.";
text = text.replace(/and/g, "&");
document.write(text);
document.write("<br/><br/>");


// Rounding Number //


// Task # 1 //

var number = prompt("Enter a positive number: ");
var dispayNumber = parseFloat(number);

    document.write("<br/>Number: " + displayNumber);
    document.write("<br/>round off value: " + Math.round(displayNumber));
    document.write("<br/>floor value: " + Math.floor(displayNumber));
    document.write("<br/>ceil value: " + Math.ceil(displayNumber));
    document.write("<br/><br/><br/><br/>");

// Taks # 2 //


var negNumber = prompt("Enter a negative number: ");
var numberDisp = parseFloat(negNumber);
   
    document.write("<br/>Number: " +numberDisp );
    document.write("<br/>round off value: " + Math.round(numberDisp));
    document.write("<br/>floor value: " + Math.floor(numberDisp));
    document.write("<br/>ceil value: " + Math.ceil(numberDisp));
    document.write("<br/><br/><br/><br/>");

    // Generating random numbers //

    // Task # 1//

document.write("Random dice value: " + Math.ceil(Math.random() * 6));

// Task # 2 //

if (Math.ceil(Math.random() * 2) === 1)
    document.write("Random coin value: Tails");g
else
    document.write("Random coin value: Heads");
    document.write("<br/><br/><br/><br/>");

    // Task # 3 

    var randNumber = Math.floor(Math.random() * 10);
    var guessNum = parseInt(prompt("Enter a number between 1 to 10"));
    if (guessNum == randNumber) {
        alert("Congratulation  guess is correct");
    } else {
        alert("Try again ");
    }

  


    // Converting strings to integers and decimals

    // Task # 1

    document.write("<br/><br/><br/><br/>");
var weight = prompt("Enter your weight in kilograms");
var weightConv = parseFloat(weight);
document.write("Th weight of user is " + weightConv + " kilograms");
document.write("<br/><br/><br/><br/>");


    // Converting strings to numbers, numbers to strings

//   Task # 1 //

var value = "472";
document.write("Value: " + value);
document.write("<br/>Type: " + typeof value);
var convValue = parseInt(value);
document.write("<br/>Value: " + convValue);
document.write("<br/>Type: " + typeof convValue);
document.write("<br/><br/><br/><br/>");

// Task # 2

var number = 35.36;
var result = parseInt(number.toString().replace('', ''));
document.write("Lenght of string :" + lenght);
document.write("Number : " + number + " <br>Result : " + result);

        
  