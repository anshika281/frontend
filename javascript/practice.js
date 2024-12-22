// functions --> practice
// Task: Write a function greetUser that takes a user's name as a parameter and prints a greeting message.

// let userName = prompt("enter your name");
// function greetUser(name){
//      let capitalizedUserName = name[0].toUpperCase() + name.substring(1);
//      return `hello ${capitalizedUserName} !`;
// }
// alert(greetUser(userName));

// 1. Even or Odd Checker
// Task: Write a function isEven that takes a number as an argument and returns "Even" if the number is even and "Odd" if the number is odd.
// let userNumber = prompt("Enter the number");
// let evnNumberChecker = (number)=>{
//    //let userNumber = prompt("Enter the number");
//    if(number % 2 === 0){
//      return alert(true);

//    }else{
//      return alert(false);

//    }
// }

// Note: above question is not completed
//2. Grade Calculator
// Task: Create a function getGrade that accepts a numerical score (0-100) and returns the corresponding letter grade based on the following scale:

// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F

// let getGrade = ()=>{
// let score = prompt("Enter Your Marks");
// score = Number(score)
// if(score >= 90 && score <= 100){
//  return alert("A")
// }
// else if(score >= 80 && score <= 89){
//   return alert("B")
//  }
//  else if(score >= 70 && score <= 79){
//   return alert("A")
//  }
//  else if(score >= 60 && score <= 69){
//   return alert("A")
//  }
//  else{
//   return alert("F")
//  }
// }

// getGrade()

// 3. String Reversal (Without Loops)
// Task: Write a function reverseString that takes a string as input and returns the reversed version of that string using built-in string methods.

// let reverseStr = ()=>{
//   let str = prompt("Enter anything");
//   str = str.split("").reverse().join("");
//   return alert(str);
// }
// reverseStr()

// 4. Check Last Character of String
// Task: Write a function endsWithQuestionMark that checks whether a given string ends with a question mark (?).

// let endsWithQuestionMark = ()=> {
//     let str = prompt("Enter any word");
//     if(str.endsWith("/")){
//         return alert("correct")
//     }
//     else{
//         return alert("Incorrect")
//     }
// }
// endsWithQuestionMark()
// //
// 5. String Case Converter
// Task: Develop a function toggleCase that takes a string and returns a new string with each character's case swapped (uppercase to lowercase and vice versa). Use built-in string methods only.

// let toggleCase = (str)=>{
//     //let str = prompt("Enter any word");
//     let newStr = "";

//     if(str === str.toUpperCase() ){
//         newStr = str.toLowerCase();
//      }
//       else{
//         newStr = str.toUpperCase()
//       }

//       return newStr; //alert(newStr)
// }
// console.log(toggleCase("anshika"));


// practice of all js fundamental concept

// 1. User Info Form
// Concepts: Variables, Data Types, Prompts, Conditional Statements, Alerts, String Methods
// Problem:
// Use prompt to ask the user for their name, age, and city.
// If the user's age is less than 18, show an alert that says, "You must be over 18 to access this site."
// If they’re 18 or older, display a greeting like, "Hello [Name], welcome from [City]!"
// Convert the user’s name to uppercase and city to lowercase, and log the formatted values in the console.

// 1. User Info Form
// Hint: Use prompt() to get user input and store it in variables. Remember to use if statements to check the age. Convert the string using .toUpperCase() for the name and .toLowerCase() for the city. Display the final result with alert().

// let userName = prompt("Enter your name");
// console.log(userName);

// let userAge = parseInt(prompt("Enter your age"));
// console.log(userAge);

// let userCity = prompt("Enter your city");
// console.log(userCity);

// if (userAge <= 18) {
//   alert("You must be over 18 to access this site.");
// } else {
//   alert(`Hello ${userName}, Welcome from ${userCity}`);
// }

// console.log(userName.toUpperCase());
// console.log(userCity.toLowerCase());

// 2. Simple Calculator
// Concepts: Variables, Operators, Prompts, Conditional Statements, Alerts
// Problem:
// Ask the user to enter two numbers.
// Prompt them to choose an operation (+, -, *, /).
// Use a conditional statement to perform the operation based on their choice and display the result in an alert.
// If the user chooses an invalid operator, alert them with a message like "Invalid operation."

// 2. Simple Calculator
// Hint: Use prompt() to gather inputs for two numbers and an operator. Use a switch statement or if-else blocks to handle each operation (+, -, *, /). Convert the entered numbers to integers or floats with parseInt() or parseFloat() before performing calculations.

// let num1 = parseInt(prompt("Enter the 1st number"));
// let num2 = parseInt(prompt("Enter the 2nd number"));
// let operator = prompt("Enter the operator");
// let result;
// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     alert(result);
//     break;

//   case "-":
//     result = num1 - num2;
//     alert(result);
//     break;

//   case "*":
//     result = num1 * num2;
//     alert(result);
//     break;

//   case "/":
//     result = num1 / num2;
//     alert(result);
//     break;

//   case "**":
//     result = num1 ** num2;
//     alert(result);
//     break;

//   case "%":
//     result = num1 % num2;
//     alert(result);
//     break;

//   default:
//     alert("Invalid operator");
//     break;
// }

// let  hii = () => {
//     console.log("hello evryone");

// }

// for (let i = 0; i < 67; i++) {
//     hii();

// }


//1.
// function Calculator(a, b, opeartor) {
//   switch (opeartor) {
//     case "add":
//       return a + b;

//     case "subtract":
//       return a - b;

//     case "multiply":
//       return a * b;

//     case "power":
//       return a ** b;

//     case "divide":
//       if(b !== 0){
//         return a/b;
//       }
//       else{
//         return "Error: Division by zero is not allowed";
//       }

//     default:
//         return "invalid operation"
//   }
// }

// console.log(Calculator(4, 6, "add"));
//console.log("Question number first is solved");

//2.
// let groceryList = ["milk", " 2kg apple", "eggs", "biscuits", "chocolates"];
// let req = prompt("Enter your request");
// while (true) {
//     if(req == "Quit" || req == "quit"){
//         console.log("Thanks for Shopping");
//         break;
//     }
//     else if(req == "list"){
//       for (let i = 0; i < groceryList.length; i++) {
//         console.log(i, groceryList[i]);

//     }
//     }
//     else if (req === "add") {
//         while (true) {
//             let item = prompt("Enter the item you want to add (or type 'done' to finish)").toLowerCase();
//             if (item === "done") {
//                 break;
//             }
//             groceryList.push(item);
//             console.log(`${item} has been added to your list.`);
//         }
//     }
//     else if (req == "remove"){
//         let del = prompt("Enter the index of the item you want to remove");
//         groceryList.splice(del, 1);
//     }
//     req = prompt("Enter your request");
// }

// extra features to add --> use DOM manipulation for user interface.
//console.log("Question number two is solved");

//4. issue in this solution
// let container = document.querySelector(".container");
// let div1 = document.querySelector(".item1");
// let div2 = document.querySelector(".item2");
// let div3 = document.querySelector(".item3");
// let h1 = document.createElement("h1");
// container.prepend(h1);
// h1.classList.add("heading");

// while (true) {
//   let req = prompt("Enter the signal").toLowerCase();
//   if (req == "Quit" || req == "quit") {
//     console.log("Thanks for Shopping");
//     break;
//   } else if (req === "Stop") {
//     div1.style.color = "red";
//     h1.innerHTML = "Signal is <i><u>red</u></i>";
//   } else if (req === "wait") {
//     div2.style.color = "yellow";
//     h1.innerHTML = "Signal is <i><u>yellow</u></i>";
//   } else if (req === "go") {
//     div3.style.color = "green";
//     h1.innerHTML = "Signal is <i><u>green</u></i>";
//   } else {
//     alert("Invalid signal try again");
//   }
// }

