// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.

// Create a list of people I'd like to invite to dinner
let guests: string [] = ["Subhan", "Shaheer", "Sultan","Hammad"];

// Message to each person, inviting them to dinner
let message: string  = ("I would be honored if you could join me for dinner");

//  Use the list to print a message to each person, inviting them to dinner
for (let g = 0; g <guests.length;  g++) {
   console.log(`Dear ${guests[g]}, ${message}`);
}

//  Use the list to print a message to each person, inviting them to dinner (New function method)
guests.map((items) => (console.log (`Dear ${items} ${message}`)))