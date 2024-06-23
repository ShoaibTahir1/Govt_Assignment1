// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// Store the person's name in a variable
let personName: string = 'Shoaib Tahir';
console.log('PersonName:', personName);
// Print the name in lowercase
let lowerCase: string = personName.toLowerCase();
console.log('LowerCase:', lowerCase)
// Print the name in uppercase
let upperCase: string = personName.toUpperCase();
console.log('UpperCase:', upperCase);
// Print the name in titlecase
console.log('TitleCase:', personName.replace(/\b\w/g, c=> c.toUpperCase()));
