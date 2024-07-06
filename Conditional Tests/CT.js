"use strict";
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. 
// Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// Look closely at your results, and make sure you understand why each line evaluates to True or False.
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let Bike = "Suzuki";
//True statement
console.log("is Bike == Suzuki? i predict True");
console.log(Bike == 'Suzuki');
console.log("is Bike type string? i predict True:");
console.log(typeof (Bike) == "string");
console.log("is Bike != Honda? i predict True:");
console.log(Bike != "Honda");
console.log("is Bike length less than and equal to 10? i predict True:");
console.log(Bike.length <= 10);
console.log("is Bike length  is greater than and equal to 5? i predict True:");
console.log(Bike.length >= 5);
// Now False statement
console.log("is Bike == Honda? i predict False:");
console.log(Bike == "Honda");
console.log("is Bike type number? i predict False:");
console.log(typeof (Bike) == "number");
console.log("is Bike type == SUZUKI? i predict False:");
console.log(Bike == "SUZUKI");
console.log("is Bike length less than 5? i predict False:");
console.log(Bike.length < 5);
console.log("is Bike length greater than 10? i predict False:");
console.log(Bike.length > 10);
