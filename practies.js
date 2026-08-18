let x = 5;
let y = 5;

console.log(x + y);

let name = "";

console.log(10 > 5);
console.log(5 == "5");
console.log(5 === "5");

let num = 10;
if (num > 5) {
    console.log("big");
} else {
    console.log("small");
}

// Data types identify kele ani print kele:
console.log(typeof "hello");
console.log(typeof "100");
console.log(typeof "true");
console.log(typeof "undefined");

let a = "5";
let b = 2;
console.log(a * b);

let value = 25;
value = +value;
console.log(typeof value); 

let age = 20;
if (age > 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

let totalamount = 120;
if (totalamount > 100) {
    let discount = totalamount * (10 / 100);
    totalamount = totalamount - discount;
}

console.log(totalamount);

// Re-assigning existing 'num' variable (let parat lihila nahi):
num = 5; 
let factorialValue = 1;

for (let i = 1; i <= num; i++) {
    factorialValue = factorialValue * i;
    console.log(i, factorialValue);
}

console.log("factorial of ", num, "is", factorialValue);

if (factorialValue < 10) {
    console.log("the factorial is small");
} else if (factorialValue >= 10 && factorialValue <= 100) {
    console.log("the factorial is moderate");
} else {
    console.log("the factorial is large");
}

let evenNumber = [];

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        evenNumber.push(i);
    }
}
console.log(evenNumber.join(","));

// String variables
let firstName = "Rahul";
let lastName  = "Patil";

console.log(firstName);
console.log(lastName);

// String Concatenation
 firstName = "Rahul";
  lastName =  "Patil";

let fullName = firstName + " "+ lastName
console.log(fullName);

//Template Literals

 studname = "Amit";
 city = "Pune";
console.log(`My name is ${studname} and i live i ${city}`);

