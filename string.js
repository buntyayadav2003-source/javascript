// 1. String Concatenation
let name1 = 'sourabh';
let name2 = "yadav !";
let name = name1 + " " + name2;
console.log(name); 

let str = `I like to learn javascript`;

// 2. Length Property (Fixed spelling to .length)
console.log(name.length); 
console.log(str.length);  

// 3. Accessing Characters
console.log(name.charAt(0)); 
console.log(name[0]);        

// 4. Case Conversion (Fixed capitalization)
console.log(name.toUpperCase()); 
console.log(name.toLowerCase());

// 5. Concatenation method (Fixed .concat spelling)
let str1 = "Hello";
let str2 = "World";
let msg = str1.concat("", str2, "!!!"); 
console.log(msg); 

// 6. Finding Substrings / Indices
let indexNumber = name.indexOf("hello");
console.log(indexNumber); 

let index1 = msg.indexOf("hello");
console.log(index1); 

let index2 = msg.indexOf("world"); 
console.log(index2); 

console.log(msg.indexOf('o'));     
console.log(msg.lastIndexOf('o')); 

// 7. Boolean Search Methods
console.log(msg.includes('Hello'));  
console.log(msg.includes('iuytre')); 

console.log(msg.startsWith("Hello")); 
console.log(msg.startsWith("hello"));

console.log(msg.endsWith('!!'));       
console.log(msg.endsWith('World!!!')); 

// 8. Extracting Substrings
let substr = msg.slice(0, 4);
console.log(substr); 

let substr1 = msg.slice(1, 7);
console.log(substr1); 

console.log("****** substring ******");
let substr3 = msg.substring(0, 4);
console.log(substr3); 

let substr4 = msg.substring(1, 7);
console.log(substr4); 

console.log("******* substr ********"); 
let substr5 = msg.substr(0, 4); 
console.log(substr5); 

let substr6 = msg.substr(1, 7);
console.log(substr6); 

// Single argument extraction (Extracts from index 5 to end)
let substr7 = msg.substr(5);
console.log(substr7); 

let substr8 = msg.substring(5);
console.log(substr8); 

let substr9 = msg.slice(5);
console.log(substr9); 

// 9. Trimming Whitespace
let msg1 = "    Hello                  ";
console.log(msg1.length);             
console.log(msg1.trim().length);      
console.log(msg1.trimStart().length); 
console.log(msg1.trimEnd().length);   

// 10. Replacing Strings
let str10 = str.replace('like', 'love');
console.log(str10); 
console.log(str);   

let msg3 = "It's you dont like computer programming It's smart people";
let msg4 = msg3.replaceAll("It's", "Its");
console.log(msg4); 

// 11. Array Splitting (Completing your cutoff at the end)
let fruitsString = 'Apple Banana Mango';
let fruitArr = fruitsString.split(' ');
console.log(fruitArr); 