// loops
//for(initalisation; condition; updation){
// task to perform
//}

// homework problem
// dry run for loop using different condition

// practice problem
// 1. print all the odd number from 1 to 15
// for (let index = 0; index <= 15; index++) {
//   if(index % 2 !== 0){
//     console.log(index);
//   }
// }

// 2. print all Even numbers from 2 to 10
// for (let index = 2; index <= 10; index = index + 2) {
//    console.log(index);
// }

// or

// for (let index = 2; index <= 10; index++) {
//     if(index % 2 === 0){
//             console.log(index);
//         }

// }

// multiplication table for 10
// for (let index = 10; index <= 100; index+= 10) {
//     console.log(index);

// }
// let n = prompt("Enter your number");
// n = parseInt(n)
// for (let index = n; index <= n*10; index+= n) {
//     console.log(index);

// }

// while loops

// initalize here
// while (condition) {
//     Task
//     upadation
// }

// we use break keywords with while to stop the loop in between

// let myPercentage = 82;
// let guess = prompt("Guess my percentage its above 75");
// while (myPercentage !== parseInt(guess) && guess !== "quit") {
//   alert(" Try again");
//   guess = prompt("Guess my percentage its above 75");
// }
// if (guess === "quit") {
//   alert("quit");
// } else {
//   alert("Congrats! You guessed it");
// }

// let myPercentage = 82;
// let guess = prompt("Guess my percentage, it's above 75");

// while (guess !== "quit" && myPercentage !== parseInt(guess)) {
//   alert("Try again");
//   guess = prompt("Guess my percentage, it's above 75");
// }

// if (guess === "quit") {
//   alert("You quit the game");
// } else {
//   alert("Correct");
// }

// Question:


// 1. Multiplication Table
// Write a program that asks the user for a number and prints the multiplication table of that number from 1 to 10 using a for loop.

// let user = prompt("Enter any number")
// for (let i = 1; i <= 10; i++) {
//    console.log(`${user} * ${i} = ${user*i} `);
   
// }

// 2. Sum of First N Numbers
// write a program that asks the user for a number n and prints the sum of the first n natural numbers using a while loop.

// let n = 3; //parent(prompt("Enter the number except"));
// let i = 1;
// let sum = 0;
// while (i <= n ) {
//     sum += i;
//     i++;
    
// }
// console.log(sum);


// 3. Factorial Calculation
// Write a program that asks the user for a number and calculates its factorial using a for loop.

// let num = 8;
// factorial = 1;
// for (let i = num; i >= 1; i--) {
//     factorial *= i;   
// }
// console.log(factorial);

// 4. Guessing Game
// Write a program that generates a random number between 1 and 10 and asks the user to guess the number. The user has to keep guessing until they get the correct number using a while loop.

// 5. Odd Numbers
// Write a program that prints all odd numbers between 1 and 50 using a for loop.

// 6. Reverse Countdown
// Write a program that asks the user for a number and prints a countdown from that number to 1 using a while loop.

// 7. Sum of Even Numbers
// Write a program that calculates the sum of all even numbers from 1 to 100 using a for loop.

// 8. Divisible by 3
// Write a program that prints all numbers between 1 and 30 that are divisible by 3 using a for loop.

// 9. User Input Until Quit
// Write a program that keeps asking the user to input a word until they type "quit", using a while loop.

// 10. Power of a Number
// Write a program that asks the user for a base and an exponent, then calculates the result of the base raised to the power of the exponent using a for loop.


// NETSED LOOP WITH ARRAY

// let student = [
//   ["Anshika", 82],
//   ["Anuradha", 79],
// ];

// for (let i = 0; i<student.length; i++) {
//     console.log(i);
//     for (let j = 0; j < student.length; j++) {
//         console.log( student[i][j]);
        
        
//     }
    
// }

// to-do app
 