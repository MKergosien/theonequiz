// Write a function named modulus that takes two arguments.
//  The function should use the modulo operator to return the remainder between the first and second arguments.
//   e.g. modulus(10, 3) // Should return 1.
function modulus (number1,number2){
  var answer = number1 % number2;
  console.log("myanswer", answer);
};
  modulus(10,4);
  
// Write a function named doMath. This function takes three arguments.
//  The first two will contain integer values. The third argument will be a function reference.
function doMath (number1,number2,reference){
  return reference(number1, number2)
};

// Write two more functions named add and subtract. 
// Execute the doMath function to add two numbers together. 
// Then execute the doMath function to subtract the two numbers.
function add(number1,number2){
  var add = number1 + number2;
  console.log("adding", add);
  return add;
};
doMath(10,4,add);

function subtract(number1,number2){
  var subtract = number1 - number2;
  console.log("subtracting", subtract);
  return subtract;
};
  doMath(10,4,subtract);



var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

// Write a function named sortedPlanets that returns an array of the planet names sorted alphabetically.
function sortedPlanets(){
  var sort = Planets.sort();
  console.log ("Sorted planets", sort);
};
sortedPlanets();


// Write a function named reversedPlanets that returns an array of planet names that are reversed (i.e. "htraE").
function reversedPlanets(Planets){
 var newReversed = [];
 for (var i=0; i<Planets.length; i++){
   newReversed.push(Planets[i].split("").reverse().join(""));
 };
 return newReversed;
};
console.log("Reversed Planets", reversedPlanets(Planets));

// Write a function named longPlanets that returns an array containing only the planet names that are 7 characters long, or longer.
function longPlanets(Planets) {
  var longArray = [];
  for (var i=0; i<Planets.length; i++) {
    if (Planets[i].length >=7) {
      longArray.push(Planets[i]);
    }
  };
  return longArray;
};
console.log("7 Char Planet", longPlanets(Planets));

// Write a function named getAnimals that uses the jQuery ajax method to retrieve the data/animals.json file.
// When you execute the functions, it should just log just the array of animals to the console when the async is complete.
// Make sure you provide a prompt of "animals" when logging the array.
function getAnimals() {
  $.ajax({
    method: 'GET',
    url: '../data/animals.json'
  }).done(function(data) {
    console.log("animals", data.animals);
  });
};
