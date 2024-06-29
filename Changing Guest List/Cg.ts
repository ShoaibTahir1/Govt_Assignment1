// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. 
// Add a print statement at the end of your program stating the name of the guest who can’t make it.
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// Print a second set of invitation messages, one for each person who is still in your list.

// Create Guest List
let guests: string [] = ["Subhan", "Shaheer", "Sultan", "Hammad"];

// Dsiplay Guest list
console.log (`Guest list invite for the dinner: "${guests}"`)

// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
let NotAtt: string = "Subhan"
console.log (`Guest can't make the dinner : "${NotAtt}" `)

// Create new inivitation
let NewGuest: string = "Abdul Samad"

// Modify a list of people I'd like to invite to dinner
guests [guests.indexOf(NotAtt)] = NewGuest
console.log(`Modify list: "${guests}"`)

// Message to each person, inviting them to dinner
let message: string  = ("I would be honored if you could join me for dinner");

// Use the list to print a message to each person, inviting them to dinner (New function method)
guests.map((items) => (console.log (`Dear ${items}, ${message}.`)))
