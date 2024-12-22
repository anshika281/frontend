// DOM ( document obejct model)
// it represent a document with a logical tree
// it allows us to manipulate/ change webpage content(HTML elements).

//Question no.1
/*let heading = document.querySelector("h2");
console.log(heading.innerText);
heading.innerText = heading.innerText + " From apna college student";
*/

// Question no.2
// let boxes = document.querySelectorAll(".box");
// let i = 1;
// for (const box of boxes) {
//     box.innerHTML = `hello everyone`
//     i++
// }

//boxes[0].style.color = "red";
//boxes[1].innerHTML = "<i>hello</i>"
//boxes[2].innerText = "welcome"


// dom manipulation
//getAttribute (attr) --> to get the value to attr
//setAttribute (attr, value) --> to set the value of attr
// attributes are additional information in our tags.

/*let div = document.querySelectorAll("div");
console.log(div); 
let className = div[0].classList;
className[0] = "new";
console.log(className);
 */

// till now we are able to access the element and can change it value now we will see how we can create and elemnet within it and add in html file or remove it from html file.

// first create -->
// how to create ?
// let el = document.createElement("div");

// then give some value to it

// then insert elements in file
//node.append(element)--> add at the end of node (inside)

//node.prepend(element)--> add at the start of node (inside)

//node.before(element)--> add before the node (outside)

//node.after(element)--> add after the node (outside)

// to remove any element
// first get access of it 
// then el.remove()

// for example 

// let para = document.queryselector("p");
// para.remove();

// homework
// go and study about --> appenChild() and removeChild( )


/*********** let's practice ****************/

// Question no.1
// create a new button element. Give it a text " click me " , background color of red and text color of white

// insert a button as the first element inside the body tag.

/*
let btn = document.createElement("button");
btn.innerText = " click me ";
btn.style.backgroundColor = "red";
btn.style.color = "white";
document.querySelector("body").prepend(btn);
*/

// Question no.2
// create a p tag in html , give it a class and some styling.

// now create a new class in css and try to apend this class this class to the p element 

// did you notice , how you overwrite the class name when you add a new one ?
//Solve this problem using classlist.


// Practice questions - DOM
// add the following elements to the container using only javascript and the DOM Methods

// 1. a p tag with red text that says "hey im red"
//2. an hs tag with blue text that says i am blue h3
//3. a div with a black border and pink bg color 
/// another h1 that says i am in a div
// a p that says me too!

// let container = document.querySelector(".container")
// let para1 = document.createElement("p");
// para1.innerText = "hey i'm red!";
// para1.classList.add("red")
// container.appendChild(para1);

// let h3 = document.createElement("h3");
// h3.innerText = "hey i'm blue!";
// h3.classList.add("blue")
// container.appendChild(h3);

// let div = document.createElement("div");
// div.classList.add("black")
// container.appendChild(div);

// let h1 = document.createElement("h1");
// h1.innerText = "i am in div!"
// div.appendChild(h1);

// let para2 = document.createElement("p");
// para2.innerText = "me too!";
// div.appendChild(para2);

// ASingment - Practice questions
// Qs.1 create a new input and button element on the page using javascript onlt. set the text of button tp "click me";

// let input = document.createElement("input");
// let body = document.querySelector("body")
// body.appendChild(input);
// let btn = document.createElement("button");
// body.appendChild(btn);
// btn.innerText = "Click me!";



//Qs.2 add following attributes to the element:
// -> change placeholder value of input to "username"
// -> chnage the id of button to "btn"

// input.setAttribute("placeholder", "username");
// btn.setAttribute("id", "button")

// //Qs.3 Access the btn using the qeryselctor and button id. Change the button background color to blue and text clor to white.

// btn.style.backgroundColor = "blue";
// btn.style.color = "white";

// //Qs.4 create an h1 element on the page and set its text to "DOM practice" underlined. Change its color to purple.

// let h1 = document.createElement("h1");
// h1.innerText = "DOM practice";
// body.append(h1);
// h1.classList.add("heading");

// //Qs.5 create a p tag on the page and set its text to "Apna College Delta Practice", where Delta is bold.

// let para = document.createElement("p");
// para.innerHTML = "Apna College <b>Delta</b> Practice";
// body.prepend(para);
// para.style.fontSize = "20px"