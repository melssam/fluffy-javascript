console.log("hi");


//create a variable
let flower;

//store a value in that variable
flower = 6;

//console log the variable 
console.log(flower);


//create and assign to a variable
let pudding = 3;

//console log that variable
console.log(3);

//assign a new value to that variable
  pudding = 10;

//console log that variable

console.log(pudding);
let isLoggedIn = false
let isActive = false
let day = new Date().getDay()
console.log(day)

if (isLoggedIn && isActive){
    console.log ("The logged-in user has an active subscription")
} else if (isLoggedIn && !isActive){
    console.log("The logged-in user does not have an active subsription")
} else {
    console.log("Please log in. WE are a lonley computer!")
}