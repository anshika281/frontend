// objects

//step-1
// create an object literal for the properties of  twitter post.

//step-2
// how access this data

// console.log(post.userName);

//or

//  console.log(post["content"]); mainly we use this when we have store that value in the form of variables.

//JS automatically converts objects keys to strings.

// Even if we made the number as a key, the no. will be converted to string.

// step-3
// how to add and update value
// console.log(post.content = "hello everyone");
// console.log(post.age = 7);
// console.log(post);
// console.log(post.age);

// stpe-4
// delete
// console.log(delete post.content);
// console.log(post);

// objects of obejcts - nesting
// array of obejcts
// math object

// Qs.1  generate a random number between 1 to 100.

// let num = 0;
// while (num != 100) {
//     num = Math.floor(Math.random()*100) + 1;
//     console.log(num);

// }

// Assignment practice question
// Qs1. create a program that genrates a random number betwwen 1 to 6 representing a dice roll.
let dice = Math.floor(Math.random() * 6) + 1;
//console.log(dice);

// switch (dice) {
//   case 1:
//     console.log("YOU GOT 1");
//     break;

//   case 2:
//     console.log("YOU GOT 2");
//     break;

//   case 3:
//     console.log("YOU GOT 3");
//     break;

//   case 4:
//     console.log("YOU GOT 4");
//     break;

//   case 5:
//     console.log("YOU GOT 5");
//     break;

//   case 6:
//     console.log(" Great! YOU GOT 6");
//     break;

//   default:
//     break;
// }

// QS.2 create an object representing a car that stores the following properties for the car : name, model, color.
// print its car name




/*let req = prompt(
  "Enter the word 'car' to make sure you want to know about it"
).toLowerCase();

let car = {
  name: "Tesla",
  model: "Model S",
  color: "Silver Metallic",
};

while (true) {
  if (req !== "car") {
    alert("As your wish!");
    break;
  } else if (req === "car") {
    let property = prompt(
      "Enter the property you want to know about (name, model, color)"
    ).toLowerCase();

    if (car.hasOwnProperty(property)) {
      alert(`The ${property} of the car is: ${car[property]}`);
    } else {
      alert("Invalid property. Please enter 'name', 'model', or 'color'.");
    }

    req = prompt(
      "Do you want to know about the car again? Enter 'car' to continue or anything else to exit."
    ).toLowerCase();
  }
}


How it works:
Initial Prompt: The user enters "car" to confirm they want to know about the car.

Loop: If the user enters "car", the loop continues, allowing them to ask for specific properties.

Check Properties: Inside the loop, the hasOwnProperty method checks if the entered property exists in the car object.

Alert User: If the property exists, the program displays its value. Otherwise, it alerts the user about the invalid input.

Exit Condition: The loop breaks if the user doesn't enter "car" again when prompted.

This setup ensures a smooth interaction and handles user input gracefully.

 */

//Qs3. Create an object person with their name, age and city. 

let person ={
    name: "Anshika Yadav",
    age: 15,
    city: "Mughalsarai"
}

console.log(person.city = "New York");
console.log(person.country = "United States");
console.log(person );


