"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
// Tests using the lower case function
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// Tests using "and" and "or" operators
// Test whether an item is in a array
// Test whether an item is not in a array
let car = 'Honda City';
let age = 30;
let age1 = 25;
let isAdmin = true;
let colors = ['Green', 'White', 'Brown'];
let list = [1, 2, 3, 4, 5, 6];
let number = 3;
// Test for equality and inequality with strings
console.log("Test for Equality:", car == "Honda City");
console.log("Test for InEquality:", car != "Honda City");
// Test using the lower case function
console.log("Test using the lower case function:", car.toLowerCase() == "honda city");
console.log("Test using the lower case function:", car.toLowerCase() != "honda city");
// Numerical test involving equality and inequality
console.log("Numerical Test for Equality:", age == age1);
console.log("Numerical Test for InEquality:", age != age1);
// Numerical test using greater than and less than 
console.log("Numerical using greater than:", age > age1);
console.log("Numerical using less than:", age < age1);
// Numerical test using greater than or equal to , 
console.log('Numerical test using greater than or equal to:', age >= age1);
console.log('Numerical test less than or equal to:', age <= age1);
// Tests using "and" and "or" operators
console.log('Test using AND operators:', isAdmin && age < age1);
console.log('Test using OR operators:', isAdmin || age < age1);
// Test whether an item is in a array , Test whether an item is not in a array
console.log("Test whether an item is in a array:", colors.includes('Green'));
console.log("Test whether an item is not in a array:", colors.includes('Yellow'));
// Test whether an item is in a array , Test whether an item is not in a array
console.log("\nTest whether an item is in a array:", list.includes(number));
console.log("Test whether an item is not in a array:", !list.includes(number));
