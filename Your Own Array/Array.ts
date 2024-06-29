// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Think of your favorite mode of transportation, such as a motorcycle, and make a list that stores several examples 
let OwnArray: string [] = ["Honda 125", "CD-70", "Suzuki-125"];

// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle
for (let bikes of OwnArray) {
    console.log (`I would like to own ${bikes}.`);
}
