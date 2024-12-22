// chapter - 4 "Array (Data structure)"
// define --> linear collection of things
// array is a type of object.
// we can also make mixed array which have different data types value.
// arrays are mutable --> changes will be seen in that string itself.

// Visualizing Array -- ?

// let friends = ["anshika" , "anuradha" , "aastha" , "anupama"];
// console.log(typeof friends);
// friends[3] = "hello";
// console.log(friends);

//for (let index = 0; index < friends.length; index++) {
// console.log(friends[index]);

//}

//for (const friend of friends) {
/// console.log(friend.toUpperCase());
//}

/*
for (const friend of friends) {
    console.log(friend.toUpperCase());
}*/

// for a given array with marks of students -> [56, 78, 67, 45, 34, 25, 56 ,67,] find the average marks of the entire class.

// answer

/*let marks = [56, 78, 67, 45, 34, 25, 56 ,67, ]
let sum = 0;

for(let i = 0 ; i < marks.length; i++ ){
    sum += marks[i]
}

let avg = sum/marks.length
console.log(`the average is ${avg}`);*/

// Question 3 ----> for agiven array with prices of 5 items -> [any randon price you can give] all items have offer of 10% off on them. change the array to store final price after applying offer.

// answer

/*let items = [540, 546, 678, 123, 567];

let i = 0;

for (const val of items) {
    let offer = val/10;
    items[i] -= offer;
    console.log(`Original price of the item at index ${i} : ${val}`);
    console.log(`Item price after offering discount : ${items[i]}`)
    i++
}*/

/*let items = [ 560, 894, 476, 456, ];
items.splice(2, 2 , 3, 45 ,56);
console.log(items);
*/

//statement
/*let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
 
// Question no.1
// Remove first company from th array
let rem = companies.unshift();


//Question no.2
//Remove Uber and add Ola in its place
let rep = companies.splice(2, 1 , "OLA");


//Questiion no.3
//add Amazon at the end
let ad = companies.push("Amazon")

console.log(companies);*/

/*Arrays:
Array Initialization:


Question no.1-------->
Create an array called fruits containing the names of three different fruits.
Array Manipulation:

Question no.2-------->
Add a new fruit to the fruits array.
Remove the second fruit from the array.
Array Access:

Question no.3-------->
Access and print the third element of the fruits array.
Array Iteration:

Question no.4-------->
Use a for loop to iterate over the fruits array and print each fruit.

Question no.5-------->
Array Length:
Determine and print the length of the fruits array.*/

/*
// answer-1----->
const fruits = ["apple", "banana", "orange", "grapes", "mango", "kiwi"];
console.log(fruits);

//answer-2------>
//i>
fruits.push("watermelon");

//ii>
fruits.splice(1,1,);
console.log(fruits);

//answer-3------>
console.log(fruits[2]);

//answer-4------>
for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]);;
    
}

//answer-5------>
let fruitsLenght = fruits.length;
console.log(`the lenght of the fruits is ${fruitsLenght}`);
*/

/*Loops:

Even Numbers:
Write a for loop that prints all even numbers from 1 to 10.

Reverse Order:
Write a while loop that prints numbers from 10 to 1 in reverse order


Sum of Numbers:
Calculate and print the sum of all numbers from 1 to 5 using a for loop.

Factorial:
Write a function to calculate the factorial of a given number using a for loop.

Multiplication Table:
Use nested loops to print the multiplication table (up to 10) for a given number. 
*/

// answer-1 ------------>

/*for (let index = 1; index <= 10 ; index+= 2) {
    console.log(index);
    
}*/

// answer-2 ------------>

// i cannot understand why the program was not working when i use cosnt and when used let it worked!
//let num = 10;

//while (num >= 1) {
//console.log(num);
//num--;
//}

// answer-3----------->
/*let sum = 0;
for (let index = 0; index <= 5 ; index++) {
   sum += index;  
   console.log(index);
   console.log(sum);
}
console.log(`thw sum of number from 1 to 5 = ${sum}`);*/

// answer-4 ----------->

// answer-5 ----------->
/*const calculateTable = (number) =>{
   for (let index = 1; index <= 10 ; index++) {
    let table = number * index;
    console.log(`${number} * ${index} = ${table}` );
    
}
}
calculateTable(12);*/

/*Combined Arrays and Loops:
Array Sum:

Create an array of numbers and write a function that calculates and returns the sum of all elements using a loop.
Filter Odd Numbers:

Given an array of numbers, create a new array containing only the odd numbers.
Search in Array:

Write a function that takes an array and a value, and returns true if the value is present in the array, otherwise false.
Modify Array:

Given an array of numbers, square each element and store the results in a new array.
FizzBuzz:

Write a program that prints the numbers from 1 to 20. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".
 */
/*
let marks = [45, 56, 67, 89, 35, 68, ];
let sum = 0;
for (const mark of marks) {
    console.log(` students mark = ${mark}`); 
    sum += mark ;

}
console.log(`total marks = ${sum}`);
 let avgMarks = sum / marks.length;
console.log( `average marks of the student is = ${avgMarks}` );
*/

/*let itemsPrice = [459, 357, 200, 380, 100, 400, 620];
itemsPrice.splice(3,0,300,400);
console.log(itemsPrice);*/
/*let off = 10/100;
for (const price of itemsPrice) {
   let off 
}

console.log(offer); 

// solve this later chapter 4 array.


/************** Array methods ********* */

// push() = add at the end;
// unshift()=add at the start;
// pop() = delete from the end;
// shift()=  delete from the start;
// slice(startIdx, endIdx) = return apeice of aaray; --> do not change in original array
// splice(startIdx, delIdx, newEl) = chande original aaray (start, remove, replace)--> at the place of newEl the thing which is deleted will be replaced by new one and if the nothing is deleted whatever value is given in the start the newEl will be placed before that index or position. --> change in original array
// indexOf : returns the index of something --> arr.indexOf("value")
// includes : serach for value and return in true or false . true when that value is included and vice vrsa in false. --> arr.includes("value") // true or false.
// concat : merge 2 arrays --> primary.concat(secondary). --this method is immutable (there will be no change in original string). 
// reverse : reverse an arr. --> primary.reverse()
//sort : sort an aaray in alphabetical order (increasing order). --> arr.sort(). generally we use this metthod when we will have string or char in array.

//and when we pass only one value to splice then it will act as slice which will return the val after the index poition mentioned

/*************** let's practice ***************

//Create an array to store companie --> "bloomberg", "microsoft", "uber", "google", "ibm", "netflix"

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "Ibm", "Netflix"];

// a. remove the  first company from the aaray

companies.shift();
console.log(companies);

// b. remove uber and add ola in its place

companies.splice(1,1,"Ola")
console.log(companies);

// c. add amazon at the end

companies.push("Amazon");
console.log(companies);*/

// let's practice array with chatgpt

//Create another array named moreColors with items "purple" and "orange", and concatenate it with the colors array.

// let colours = ["pink", "yellow", "blue", ];
// colours.splice(0,1);
// colours.splice(1,1);
// console.log(colours);
// colours.splice(1,1, "green");
// console.log(colours)

/*let findIdx = colours.includes("green" && "pink"); // we use include method to check whether the particular value given in array or not
console.log(findIdx);
*/

/*let reverseColors = colours.slice().reverse();
console.log(reverseColors);
console.log(colours);
*/

// practice question
// let months = ["january", "july", "march", "august"];
// console.log(months.splice(0,2,"july" , "june"));
// console.log(months);


// console.log(months.shift());
// console.log(months.shift());
// console.log(months.unshift("june"));
// console.log(months.unshift("july"));
// console.log(months);
// console.log(months.indexOf("july"));
// console.log(months.splice(2,1));
// console.log(months);

// let lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
// console.log(lang.reverse().indexOf("javascript"));


// Array reference -- watch one again js part 3
// we can make teo array same by assinging their variables .
// let arrcopy = [1, 2, 3, 4];
// let arr = arrcopy;
// now they are equal.

// Constant Array  -- watch one again js part 3

// Nested arrays --> multi dimensional arrays

// practice question --> create a nested array to show the following tic-tac-toe game state.

// let game = [["X", null, "O"], [ null, "X", null], ["O", null, "X"] ];
// console.log(game);


// Assingment questions --> JS (Part 3)
// 1. write a js program to get the first n elements of an array .

// 3. write a js to check whether a string is blank or not.

// let note = prompt("enter anything");
// if (note.trim() === ""){
//     console.log("it is blank");
    
// }else{
//     console.log("not blank");
    
// }

// 4. write a js js program to test whether the characteer at the given index is lowercase

// let str = "hello";
// let idx = 4;
// if(str[idx] === str[idx].toLowerCase() ){
//     console.log("yes it is in lowercase");
    
// }else{
//     console.log("no it is not in lowercase");
// }

// 5. write a js program to strip leading and trailing spaces from a string 


// foreach function --> The .forEach() method executes a provided function once for each array element, but it does not create a new array. 

// let months = ["january", "july", "march", "august"];

// arr.forEach(some function definition or name);
// months.forEach(element => {
//     console.log(`hello ${element}`);
    
// });

//practice question
//Question no. 1
// const fruits = ['apple', 'banana', 'cherry'];
// // Output:
// // apple
// // banana
// // cherry
// fruits.forEach(fruit => {
//     console.log(fruit);
    
// });

// Question no. 2
// let oddCount = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(number => {
//     if(number%2 !== 0){
//         console.log(number);
//          oddCount++;
//     }
// });



// Map -->The .map() function creates a new array with the results of calling a provided function on every element in the calling array.

//practice question
//Question no. 1
// const numbers = [1, 2, 3, 4];
// // Output: [1, 4, 9, 16]
// let newArr = numbers.map((el) => {
//     console.log(el * el);
    
// })

// Question no.2
// const users = [
//     { id: 1, username: 'alice', age: 21 },
//     { id: 2, username: 'bob', age: 25 },
//     { id: 3, username: 'charlie', age: 30 }
//   ];
//   // Output: ['alice', 'bob', 'charlie']

//   let newArr = users.map((el) => {
//     console.log(el.username);
    
//   })

// key difference 
// map
// purpose --> transform elements
// result lenght --> same as the original array
// return values --> transformed array
// use case --> appply changes to every element

// filter
// purpose --> filters elem. based on their condition
// result lenght --> may be shorter than the original
// return values --> filtered aarray 
// use case --> select ele. based on a condition

// practice question --> filter
// Question no. 1
// const words = ["cat", "elephant", "dog", "bee", "giraffe"];
// // Output: ["elephant", "giraffe"]
 
// let newArr = words.filter(word => word.length > 3);
// console.log(newArr);

// Question no.2
// const users = [
//     { name: 'Alice', age: 22 },
//     { name: 'Bob', age: 17 },
//     { name: 'Charlie', age: 19 },
//     { name: 'David', age: 15 }
//   ];
//   // Output: [{ name: 'Alice', age: 22 }, { name: 'Charlie', age: 19 }]
// let bewAge = users.filter(user => user.age >= 18);
// console.log(bewAge);

    
  // every function --> returns true if every element of arrays gives true for some function. else rerutuns false if one element is false 

  // it works like logical operator "and"

 // its vice versa is some function which works just like logical operator " or".

 // not understood the topic reduce --> watch it again (js part 8)

 // left the js part 8 which is methods of array.