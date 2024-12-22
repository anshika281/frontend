/********* Event ***********/

// The change in state of an object is known as an event.

// events are fired to notify code of "interesting changes" that may affect code execution.

// some events are -->
//mouse events (click, double click etc.)
//keyboard events (keypress, keyup, keydown)
// form events (submit etc.)
// print event and many more

// Event Handling in JS

// example
//node(element).event =() => {
//  handle here
// }

// let btn = document.querySelector("button");
// btn.onclick = ()=> {
//     console.log("button was clicked");
//   if(btn.style.color != "blue"){
//     btn.style.color = "blue"
//   } else {
//     btn.style.color = "black"
//   }
    
// }

// two exercises to do this is topic;
// 1. create a button that changes color on click
// 2. interesting using keyboard events.

// form event -> event.prevenddefault()
// to prevent from default activity
// more events --> change and input

// let btn = document.querySelector(".btn");
// let h3 = document.querySelector("h3");
// let div = document.querySelector("div");

// btn.addEventListener("dblclick", ()=> {
//    alert("hello");
//    div.innerText = "hello"
    
// })

// let randomColor = ()=> {
    
// }

// let input = document.querySelector("input");
// let btn = document.querySelector(".btn")
// let h1 = document.querySelector("h1")
// input.addEventListener("input", ()=>{
//     h1.innerText = input.value;
// })

// ent bubbling --> to stop it use event.stopPropagtion -> mathod inside the func.
// event delegation --> it is phenomena in programming which uses event bubbling