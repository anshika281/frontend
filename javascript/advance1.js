// Call Satck --> topic 1

// function hello(){
//     console.log("hello");

// }
// function demo(){
//     hello();
//     console.log("anshika");

// }

// console.log("hii");
// demo();

// visualizing the call Stack (topic 2) --> visualize it

// let one = ()=>{
//     return 1;
// }

// let two = ()=>{
//    return one() + one();
// }

// let three = ()=>{
//     let ans = two() + one();
//     console.log(ans);

// }

// three();

// Breakpoint (topic 3) -->

// let one = ()=>{
//     return 1;
// }

// let two = ()=>{
//    return one() + one();
// }

// let three = ()=>{
//     let ans = two() + one();
//     console.log(ans);

// }
// three()

// JS is single threded (topic 4// Call Stack --> topic 1

// function hello() {
//   console.log("hello");
// }

// function demo() {
//   hello();
//   console.log("anshika");
// }

// console.log("hii");
// demo();

// Visualizing the call Stack (topic 2) --> visualize it

// const one = () => {
//     return 1;
// }

// const two = () => {
//     return one() + one();
// }

// const three = () => {
//     const ans = two() + one();
//     console.log(ans);
// }

// three();

// Breakpoint (topic 3)

// const one = () => {
//     return 1;
// }

// const two = () => {
//     return one() + one();
// }

// const three = () => {
//     const ans = two() + one();
//     console.log(ans);
// }

// three();

// JS is single threaded (topic 4) ---> synchronus nature

// multi threded ---> asynchronus nature

// CallBack hell (topic 5 ) --->
let h1 = document.querySelector("h1");

// promises (topic 6)--> it represents the eventual completion (or failure) of an asynchronus operation and its resulting value.

// it is an object

// there is two thing
// resolve (success) and
// reject (failure)

// result and error the two prameters of then and catch respectively.

// another question related to callback hell
// Qs1.

// function printMessage(message, delay, nextMessage) {
//   setTimeout(() => {
//     console.log(message);
//     if (nextMessage) {
//       nextMessage();
//     }
//   }, delay);
// }

// printMessage("hello", 1000, () => {
//   printMessage("i am anshika", 1000, () => {
//     printMessage("i am studing in class 9th", 1000);
//   });
// });

// ---------------improves version using promises------------

// function printMessage(message) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(message);
//       resolve();
//     }, 1000);
//   });
// }

// printMessage("hii")
//   .then(() => {
//     return printMessage("i am anshika");
//   })
//   .then(() => {
//     return printMessage("i live in mughalsarai");
//   })
//   .then(() => {
//     return printMessage("i am studying in class 9th");
//   });

//Qs2.

// function printTask(task, nextTask) {
//   setTimeout(() => {
//     console.log(task);
//     if (nextTask) nextTask();
//   }, 1000);
// }
// printTask("task1", () => {
//   printTask("task2", () => {
//     printTask("task3", () => {
//       printTask("task4");
//     });
//   });
// });

// function printTask(task) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let req = parseInt(prompt("enter any number"));
//       if (req > 4) {
//         console.log(task);
//         resolve();
//       } else {
//         reject("task not completed");
//       }
//     }, 1000);
//   });
// }

// printTask("task1")
//   .then(() => {
//     console.log("something to perform");
//     return printTask("task2");
//   })
//   .then(() => {
//     console.log("something to perform");
//     return printTask("task3");
//   })
//   .then(() => {
//     console.log("something to perform");
    
//   })
//   .catch((error =>
//     console.error(error)
//   ));

/** **************************** JS part-12 *****************************/

// Async Keyword (topic 1) --> creates an async function
