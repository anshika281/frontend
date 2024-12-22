// practice question no. 1

// function myMom(){
//   console.log("माँ");

// console.log(" माँ की ममता का कोई मोल नहीं,");
// console.log("उसके बिना ये जीवन अनमोल नहीं।");
// console.log("उसकी ममता में छुपा है प्यार,");
// console.log("जिसके आगे हर खुशी है बेकार।");

// console.log("जब भी मैं रोता हूँ, वो गले लगाती है,");
// console.log("हर दुख-दर्द को चुपचाप सह जाती है।");
// console.log("मेरी खुशियों के लिए वो सब सहती है,");
// console.log("हर पल मुझे अपने आँचल में रखती है।");

// console.log("माँ, तेरी ममता का कर्ज़ कभी चुका न पाऊँगा,");
// console.log("तेरे बिना इस दुनिया में कभी मुस्कुरा न पाऊँगा।");
// console.log("तू है तो मैं हूँ, तू है तो जीवन में उजाला है,");
// console.log("माँ, तेरी दुआओं ने ही हर मुश्किल को टाला है।");

// }
// myMom();

// practice question no.2
// create a roll dice and generate the random number between 1 to 6
// first study the random integers topic

// practice question no.3
// create a func. to cal. average of three numbers

// function calculateAvg(a,b,c){
//   let avg = (a+b+c)/3
//   console.log(avg);
// }

// calculateAvg(34,45,596);

//practice question no.4
// create a multiplication table

// function multiplicationTable(num) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
//   }
// }
// multiplicationTable(154);

//dry run this code
// function multiplicationTable(num) {
//   for (let i = num; i <= num*10; i+=num) {
//     console.log(i);
//   }
// multiplicationTable(154);

//practice question no.5
// create a function to calculate numbers from 1 to n

// function sumCalculate(n) {
//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(sum);
// }

// sumCalculate(7);

// lEXICAL SCOPE
//a variable defined outside a function can be accessible inside another function defined after the variable declaration.

// the opposite is not true.

// high order function means taking other function as an arguement.
// practice question from high order function and of return also.

// METHODS --> action that can be performed on an object.

// THIS keyword --> refers to an object that is executing the current piece of code
// it works respect to the program.

//TRY and CATCH
// the try statement allows you to define a block of code to be stested for errros while it is being executed.

// the ctach statement allows you to define a block of code to be executed, if an error occurs in the try block.

// callback is a type of function in which one function is used as parameter for high order function.

// implicit return --> auto matice return in case when in the function only return work is there in that case we can skip writing "return" keyword. and instead of curly brackets we use normal bracket.

// explicit means extra batana ki kya karna hai opposite of implicit.

// settimeout sytax ---> setTimeout (func , count)

// setinterval syntax --> setintervale(func , count)
// this is same as settime but only difference is we store that in form of variable in case we need to stop that we can do ----> clearInterval(variable name).

//practice no. 7
// write an arrow function that returns a sqaure of n number.
// let cal = n => (n*n);
// console.log(cal(6));

// practice no.8
// write a function that prints hello world for 5 times at interval of 2 sec.
// let id = setInterval(() => {
//   console.log("hello world!");
  
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
// }, 12000);
