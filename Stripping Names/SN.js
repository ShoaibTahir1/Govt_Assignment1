"use strict";
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. 
// Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let PersonName = '\t\n Shoaib Tahir \n\t';
//Display Name With White Space
console.log("Orignal Name With Whitespace:", PersonName);
const StrippedName = PersonName.trim();
//Display The Stripped Name
console.log("Stripped Name:", StrippedName);
