// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { concat } = require("lodash");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// 1a) Pseudo code:
// Copy and paste test code template into assignment (make sure nothing is inside initial template)
// Read problem statement and understand inputs/outputs (inputs need to be directly inserted into test code)
// Create relevant info for describe, it, expect, and toEqual methods
// Also, since the output will be random, need to include an expect.arrayContaining() statement inside .toEqual()
// Test code output to ensure it is failing red (should get a reference error saying function is not defined)

describe("mixItUp", () => {
  it("A function which takes in an array, removes the first item from the array, and shuffles the remaining content", () => {
    expect(mixItUp(["purple", "blue", "green", "yellow", "pink"])).toEqual(
      expect.arrayContaining(["yellow", "blue", "pink", "green"])
    );
    expect(
      mixItUp([
        "chartreuse",
        "indigo",
        "periwinkle",
        "ochre",
        "aquamarine",
        "saffron",
      ])
    ).toEqual(
      expect.arrayContaining([
        "saffron",
        "aquamarine",
        "periwinkle",
        "indigo",
        "ochre",
      ])
    );
  });
});

// b) Create the function that makes the test pass.

// 1b) Pseudo code:
// Declare a function and name it mixItUp (const declaration)
// Name the parameter as arr
// Declare a variable named mixArray, and initalize it to the argument arr (let declaration)
// Add .shift to mixArray
// Create a for loop which iterates through all elements of mixArray
// for loop logic:
//      Create a variable to store a random value based on the mixArray length
//      Create a while loop which checks to ensure the value stored at that random number's index is unique
//      .push the mixArray[rando] into mixArrayNew
// return mixArrayNew
// Run the test to ensure it passes green

const mixItUp = (arr) => {
  let mixArray = arr;
  mixArray.shift();
  let mixArrayNew = [];
  for (let i = 0; i < mixArray.length; i++) {
    let rando = Math.floor(Math.random() * mixArray.length);
    while (mixArrayNew.includes(mixArray[rando])) {
      rando = Math.floor(Math.random() * mixArray.length);
    }
    mixArrayNew.push(mixArray[rando]);
  }
  return mixArrayNew;
};

// Note: I ran the intital test and got a red failure. Implementing the actual code took quite a bit of troubleshooting. I was initially using the length of mixArray - 1 for generating the value for rando, which when I ran the actual jest test, never actually finished. Taking that out fixed my issue. I know there is definitely potential for refactoring. I was trying to find a method which already shuffled the array, but I didn't find anything. If that was an option I would definitely use it. Also, I didn't realize you could change how jest tests code by adding methods inside of the expect values. I definitely need to look more into this.

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

// Expected output: [-8, 90]
// Expected output: [5, 109]

// 2a) Pseudo code:
// Copy and paste test code template into assignment (make sure nothing is inside initial template)
// Read problem statement and understand inputs/outputs (inputs need to be directly inserted into test code)
// Create relevant info for describe, it, expect, and toEqual methods
// Test code output to ensure it is failing red (should get a reference error saying function is not defined)

describe("minMax", () => {
  it("A function which takes in an array of numbers and returns the min and max numbers inside a new array, in that order", () => {
    expect(minMax([3, 56, 90, -8, 0, 23, 6])).toEqual([-8, 90]);
    expect(minMax([109, 5, 9, 67, 8, 24])).toEqual([5, 109]);
  });
});

// b) Create the function that makes the test pass.

// 2b) Pseudo code:
// Create a function and name it minMax (const declaration)
// Name the parameter as array
// Inside the function, declare a variable named minMaxArray (let declaration), and initialize it as an empty array
// Create a line which evaluates the argument array with Math.min(), and have the result .push into minMaxArray
// Create another line which does the same thing, but with Math.max() instead.
// return minMaxArray
// Run the test to verify it passes green

const minMax = (array) => {
  let minMaxArray = [Math.min(...array), Math.max(...array)];
  //   minMaxArray.push(Math.min(...array));
  //   minMaxArray.push(Math.max(...array));
  return minMaxArray;
};

// Notes: I ran the test initially to ensure I got the right error message, and I did get function undefined. I then created the code, though I did initially struggle with the implementation. I didn't realize the spread operator was needed for the array argument, since Math.min/Math.max won't take in arrays as arguments. After that I got the test to pass green. I realized afterwards I could just create a one liner instead of using .push for each value. This is a nice little refactor. I don't think I'd want to refactor anymore aside from this (could maybe use sort on the argument and pick out the numbers at the smallest and largest indices). Also, I left the original two lines commented out but not deleted. Please let me know if this isn't preferred (it seems like a better way to actually show the refactoring).

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

// 3a) Pseudo code:
// Copy and paste test code template into assignment (make sure nothing is inside initial template)
// Read problem statement and understand inputs/outputs (inputs need to be directly inserted into test code)
// Create relevant info for describe, it, expect, and toEqual methods
// Test code output to ensure it is failing red (should get a reference error saying function is not defined)

describe("uniqueArray", () => {
  it("A function which takes in two arrays as arguments and returns one array with no duplicated values", () => {
    expect(uniqueArray([3, 7, 10, 5, 4, 3, 3], [7, 8, 2, 3, 1, 5, 4])).toEqual([
      3, 7, 10, 5, 4, 8, 2, 1,
    ]);
  });
});

// b) Create the function that makes the test pass.

// 3b) Pseudo code:
// Declare a function and name it as uniqueArray (const declaration)
// Name two parameters as arr1 and arr2
// Declare a variable, name it newArray, and initialize it as a concatenation of both array arguments
// Use set() to modify newArray and only return unique values (have newArray equal to itself)
// return newArray
// Run the test to verify it passes green

const uniqueArray = (arr1, arr2) => {
  let newArray = arr1.concat(arr2);
  newArray = new Set(newArray);
  newArray = [...newArray];
  return newArray;
};

// Notes: I ran the intial test and got the right red failure. While implementing the code, I had to try a few different methods for getting set to work. This is because Set() creates an object, not an array (I had some syntax issues to troubleshoot). But this definitely seems quicker than using a forloop, which is what I used last time I saw this problem. I got the code to pass green. I would make this a one liner, but I'm not really sure how. I think Ill leave this as is. Overall, it was cool learning how to use Set(). They definitely seem to have some nice applications.
