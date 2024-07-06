// You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// Print a message to each of the two people still on your list, letting them know they’re still invited.
// Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.

// Create Guest List
let guests: string [] = ["Subhan", "Shaheer", "Sultan", "Hammad"];

// Dsiplay Guest list
console.log (`Guest list invite for the dinner: "${guests}"`);

// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
let NotAtt: string = "Subhan";
console.log (`Guest can't make the dinner : "${NotAtt}" `);

// Create new inivitation
let NewGuest: string = "Abdul Samad";

// Modify a list of people I'd like to invite to dinner
guests [guests.indexOf(NotAtt)] = NewGuest;
console.log(`Modify list: "${ guests}"`);

// Add one new guest to the beginning of your array
guests.unshift('Tahir');
console.log (`Modify New guest to the beginning of Arary:"${guests}"`);

// Add one new guest to the middle of your array
guests.splice(2,0,"Shahbaz");
console.log (`New guest to the middle of Arary: "${guests}"`);

// Use append() to add one new guest to the end of list
guests.push("Shoaib");
console.log (`New guest to the end of Arary: "${guests}"`);

// Message to each person, inviting them to dinner
let message: string  = ("Good news! We found a bigger dinner table so  I am invited more peoples");

// Use the list to print a message to each person, inviting them to dinner (New function method)
guests.map((items) => (console.log (`Dear ${items}, ${message}.`)));

// Add a new line that prints a message saying that you can invite only two people for dinner
console.log ("Sorry due to limited space, i can invite only two peole for dinner");

// Remove guests from your list one at a time until only two names remain in your list
// Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guests.length>2) {
    const removeGuest = guests.pop();
    console.log(`Sorry, ${removeGuest}, you are no longer invited for dinner`);
}

// Print a message to each of the two people still on your list, letting them know they’re still invited.
guests.forEach((guests) => console.log (`Dear ${guests} You are invited for dinner`));

// Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program
guests.splice(0,guests.length)

console.log(`Final list: [${guests}]`)

