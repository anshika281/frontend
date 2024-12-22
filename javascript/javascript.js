console.log("radhe radhe!");

// calculate area of a rectangle
// let length = prompt("Enter the length of a rectangle");
// let breadth = prompt("Enter the breadth of a rectangle");
// let area = length * breadth;
// console.log("Area of given rectangle = " + area);

// const year = 22;
// //year = 2024;
// console.log(year);

// practice qs
// 1. declare your name as string and prints its lenght in js.
// 2. declare your first name as string and display its character.
// 3. print last character of your name

//1.
// let naam = "Anshika Yadav"
// console.log(naam.length);

//2.
// let firstName = "Anshika"
// console.log(firstName[0]);

//3.
// console.log(firstName[firstName.length-1]);

// let n = " "
// console.log(n.length);

// practice Question
// create a traffic light system based on color that shows what to do.

// let color = "green";
// if(color === "red"){
//     console.log("Stop");
// }
// if(color === "yellow"){
//     console.log("Slow down");
// }
// if(color === "green"){
//     console.log("Go!");
// }

// calculate the price of popcorn based on their size
// XL-250
// L-200
// M-100
// S-50

// let size = "XL"
// if (size === "XL") {
//     console.log("Price of your popcorn is rupees 250");
// }
// else if (size === "L") {
//     console.log("Price of your popcorn is rupees 200");
// }
// else if (size === "M") {
//     console.log("Price of your popcorn is rupees 100");
// }
// else if (size === "S") {
//     console.log("Price of your popcorn is rupees 50");
// }

// A "GOOD STRING" is a string that that starts with the letter "a" and has a length of > 3.

// let str = "apple";
// if (str[0] === "a" && str.length > 3) {
//     console.log(`${str}  is a good string`);

// }
// else{
//     console.log(`${str}  is a bad string`);

// }

// use switch statement to print the day of week a number variable "day"

// let day = 5;
// switch (day) {
//   case 1:
//     console.log("Today is Sunday");
//     break;
//   case 2:
//     console.log("Today is Monday");
//     break;
//   case 3:
//     console.log("Today is Tuesday");
//     break;
//   case 4:
//     console.log("Today is Wednesday");
//     break;
//   case 5:
//     console.log("Today is Thursday");
//     break;
//   case 6:
//     console.log("Today is Friday");
//     break;
//   case 7:
//     console.log("Today is Saturday");
//     break;
//   default:
//     console.log("wrong day");

// }

// ternary operator -->

//Question 5: Use the ternary operator to check if a number num is positive, negative, or zero and log the result.

// let int = 6;
// let result = int < 0? "negative": int > 0? "positive" : "zero" ;
// console.log(result);

/********************************************** loops ******************************************************/

// for loop
/*let sum = 5;
for (let index = 0; index <= 5; index++) {
     sum += index;
}

console.log(sum);


for (let index = 1; index < 6; index++) {
    console.log(index);;
    
}*/

// while loop
/*let i = 4;
while (i <= 5) {
    console.log(i);
    i++
}
*/

// for-of loop
/*let num = [1, 2, 3, 4, 5];
for (const val of num) {
    console.log(val);
}*/

// for-in loop
/*let bioData = {
    name: "Anshika Yadav",
    age: 14,
    class: "9th",
}

for (const key in bioData) {
    console.log(key);
}*/

/******************* practice question of topic loops**********************/

// print odd numbers using for loop
/*for (let index = 0; index <= 100;  index++) {
   if(index % 2 !== 0){
    console.log(index);
   }
    
}*/

// Question2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value

/*let num1 = 56;
let userTnput = prompt("Guess the number");
while (userTnput != num1) {
    userTnput = prompt("you guess the wrong, try again!") // prompt always return strings
}
console.log("you won the game");
*/

//Write a for loop that calculates the sum of the first 100 numbers (1 to 100) and prints the result.

/*let sum = 0;
for (let index = 0; index <= 100 ; index++) {
   sum += index;
   //console.log(index);
    
}
console.log(sum);
*/

//Given an array [1, 2, 3, 4, 5], write a for loop that prints the elements in reverse order.

/*let arr = [1, 2, 3, 4, 5];
let num = 100
for (let index = num - 1; index >= 0; index--){
    console.log(index);
} */ // confussion in this

//Write a do while loop that prints the numbers from 1 to 10.

/*let i = 1;
do {
    console.log(i);
    i++
} while (i <= 10);
*/

//Write a while loop that calculates the sum of the first 100 numbers (1 to 100) and prints the result.

/*let sum = 0;
let i = 1;
while (i <= 100) {
    sum += i;
    i++;
}
console.log(sum);*/

//or

/*let sum = 0;
let i = 1;
do {
   sum += i;
   i++; 
} while (i <= 100);
console.log(sum);*/

/*const person = {
    name: 'John',
    age: 30,
    occupation: 'Engineer'
};*/

//const hobbies = ['Reading', 'Traveling', 'Swimming'];

/*for (const key in person) {
      console.log( key + " = " + person[key]);
        
    }*/

/*  for (const val of hobbies) {
        console.log(val);
    }
 console.log(hobbies[1]);*/

// prompt the user to enter their full name. generate a username for them based on the input. start username with @, followed by their full name and ending with the fullname length

/*let userName = prompt("Enter your full name :");
let userName1 = userName.split(' ').join('');
let symbol = "@";
let size = userName.length;
let mail = symbol.concat(userName1, size);
console.log(mail);*/

/*********************************************************************************************************/

// javascript - part2
// Assignment question

// Qs1. create a number variable num with some value.
// Now, print "good" if the number is divisible by 10 andf print "bad" if it is not.

// let num = 23;
// if (num % 10 == 0) {
//   console.log("good");
// } else {
//   console.log("bad");
// }

// Qs2. take the users name and age as input prompts.
// then return back the following statement to the user as an alert
// use template literals

// let userName = prompt("Enter your name");
// let userAge = prompt("Enter your age");
// alert(`${userName} is ${userAge} years old`);

// Qs3. write a switch statement to print the months in a quarter

// let quarter = 8;
// switch(quarter){
//     case 1:
//         console.log("January, February, March");
//         break;
//     case 2:
//         console.log("April, May, June");
//         break;
//     case 3:
//         console.log("July, August, September");
//         break;
//     case 4:
//         console.log("October, November, December");
//     default:
//         console.log("not a quarter");

//     }

// Qs4.
//a string is a golden string if it starts with the character "A" or "a" and has a total length greater than 5.
// for a given string print if it is dolden or not.

// let str = "Radhe";
// if (str[0] === "R" || (str[0] === "r" && str.length == 5)) {
//   console.log("it is a `Golden String`");
// } else {
//   console.log("it is not a `Golden String`");
// }

// TWO QUESTIONS ARE LEFT FROM THIS ASSIGNMENT.

/************************************************JAVASCRIPT PART-3****************************************** */
// string methods
// 1. str.trim() --> trim whitespace from both the side and return a new one.
// let str = "      heloo  "
// console.log(str.trim());
// console.log(str);
// 2. str.toUpperCase()
// 3. str.toLowerCase()

// srting are immutable in js --> no changes can be made to strings.
// whenever we do try to make a change, a new string is created and old one remains same.

// string methods with arguements --> arguement is a some value that we pass to the method 
//stringName.method(arg)
// 4. str.indexOf("any char of string") --> returns the first index for occurance4 of some value in string . or gives -1 it it is not found.
// 5. slice --> returns a part of the original string as a new string. str.slice(starting, ending).
// 6. str.replace("old value", "new value") --> returns a new string with the value replaced.
// 7. str.repaeat(3 times) --> returns the str with the num of copies of a str.

// let str2 = "hello everyone"
// let newString = str2.slice(4, 9);
// console.log(newString);


// Method chaining --> using ome method after another. order of execution will be left to right

// question --> use trim ,uppercase. index

// let str1 = "    radhe radhe      "
// console.log(str1.toUpperCase().trim());

