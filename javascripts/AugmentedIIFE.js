// In the file named AugmentedIIFE.js, augment FruitMaker with a function named slices() that accepts two arguments:
// the name of the fruit, and the number of slices to make.
// It should return an array containing the name of the fruit duplicated how ever many slices was requested.

// For example: slices("apples", 2) should return ["apples", "apples"]




var FruitMaker = (function(fruit) {
  fruit.slices = function(name, number) {
    var fruitSlices=[];
    for (var i=0; i<number; i++) {
      fruitSlices.push(name);
    }
    return fruitSlices;
  };
  return fruit;
})(FruitMaker);

// console.log(function(apples, 2));

