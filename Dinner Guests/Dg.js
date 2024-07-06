"use strict";
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.
// Create a list of people I'd like to invite to dinner
let guests = ["Subhan", "Shaheer", "Sultan", "Hammad"];
// Message to each person, inviting them to dinner
let message = ("I would be honored if you could join me for dinner");
//  Use the list to print a message to each person, inviting them to dinner
for (let g = 0; g < guests.length; g++) {
    console.log(`Dear ${guests[g]}, ${message}`);
}
// print a message indicating the number of people you are inviting to dinner.
console.log(`\nI am Inviting ${guests.length} people to dinner`);
