/************************** Topic-1 ***************************/
/* console.log("radhe radhe");
 
// variables
const accountEmail = "anshika.mg001@gmail.com";
let password = "anshika281";


// prefer not to use var
// because of issue in block scope and functional scope
var username = "anshika__yadav_281";

// we can also make a variable withou using let or const keyword but it is not suitable way to define the variable
cityname = "mughalsarai";

// if we only initialize the varible and don't assign value to it , then in console it will show undefined as a value.
let accountstate;


console.table([accountEmail , password , username, accountstate]); */





/**************************** Topic-2 ****************************/
/* // topic --> datatypes


"use strict"; // treat all js code as newer versiono.

//although we don't have to write this word ("use strict") in a file as js has already advanced without telling also it can understand but it will be good practice to write it if you are using old methods and syntax. 

// we cannot use (alert(any thing of your choice)) this syntax in node js , there is different synatx is available for it.

// you can prefer documention from mdn or if you are larning different lang. best way is to read their documentation.

// data types 

// primitive data types meaning ---> A primitive type is predefined by the language and is named by a reserved keyword. Primitive values do not share state with other primitive values. The eight primitive data types supported by the Java programming language are: byte: The byte data type is an 8-bit signed two's complement integer.

//object (non-primitive)-->

// primitive data types are-
// number ---> limitation 2 to the power of 53
// if you have large numbers tham you can use "bigint"

// example
/*let num = BigInt();
console.log(num);
*/

// string --> ""
// string is a sequence of one or more characters that may consist of letters, numbers, or symbols. Strings in JavaScript are primitive data types and immutable, which means they are unchanging.

// boolean --> results in true or false
//null--> stand alone value (haviing empty va;ue)
//undefined--> which is not defined yet
//symbol--> unique





//Summary on datatypes

// they are divided into two parts --> primitive and non-primitive.

// difference --> they are different on the basis of " how to store it in a memory and how to acess the data " (officially)


// primitve (they are call by value) --> there are 7 types in it (string, number, boolean, null, undefined, symbol and bigint)

// reference type or non primitive ---> arrays, objects and function

// is js is dynamic or static ?

// in js you dont have to declare what datatypes it is but in typesrcipt you need

// ----> const scrore:number = 100; */





/**************************** Topic-3 ****************************/
/* // topic --> datatype conversion confusion

let score = "56";
 
// there are two ways to find the typeof any datatype
//1
console.log(typeof score);
//2
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);

// suppose if there is alphabets aur any symbols with number (not only numbers ) than the type  will be converted into number type but value will come (NaN).

// For example --->

//conversion in number 
let value = "25nhi";
let numberValue = Number(value);
console.log(numberValue); // value is NaN (What is NaN)
console.log(typeof numberValue); // value is number

//NaN --> NOT A NUMBER

//results
// "56" = 56
// "25nhi" = NaN
// true = 1 ; false = 0
// string = NaN
// undefined =NaN

//conversion in number of boolean type
let valueof = true;
let leanValue = Number(valueof);
console.log (leanValue); // value is NaN (What is NaN)
console.log(typeof leanValue);

// conversion in number of undefined type
let valueof1 = undefined;
let leanValue1 = Number(valueof1);
console.log (leanValue1); // value is NaN (What is NaN)
console.log(typeof leanValue1);

// by this we can convert any datatype into another  */






/**************************** Topic-4 ****************************/
/* */





/**************************** Topic-5 ****************************/
/* /******************Camparision****************/
//instruction---> do not compare the value of different data types otherwise the result will be confusing.

// console.log(10 > "10")--> number > string (do not do like this)

// comparison and equality are two different things in javascript

// where we use (===)--> means strict check , this will only result in true when the value and data type both are same

console.log("4" === 4); // false

// (==) only check the value ,not its datatype

console.log(4 == "4"); // true


// do not do these types of comparison given below or you will be in confusion (avoid it)

/*console.log( null > 0);
console.log( null == 0);
console.log( null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


//console.log(undefined == null); --> true
//console.log(undefined === null); --> false
*/ 