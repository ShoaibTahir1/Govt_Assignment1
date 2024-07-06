// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface Employees {
    Name: string;
    Age: number;
    Contactno: string;
    Address: string;
}

// Create an object for a employees
const Employees1: Employees = {
     Name: "Ahmed",
     Age: 20,
     Contactno: "0311-1232345",
     Address: 'House # 30, Gulshan-e-Iqbal',
};

// Print the Employees Object
console.log("Here are the Employees objects:");
console.log(Employees1);
