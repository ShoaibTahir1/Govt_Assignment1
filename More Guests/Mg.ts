// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15.
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
// Add one new guest to the beginning of your array.
// Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// Print a new set of invitation messages, one for each person in your list.

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
guests.map((items) => (console.log (`Dear ${items}, ${message}.`)))
