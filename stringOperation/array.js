stud1 = 'Sourabh'
stud2 = 'Omkar'
stud3 = 'Rahul'

students = []
console.log(typeof (students))


fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Papaya']
console.log(fruits[0])
console.log(fruits[1])

console.log(fruits)
fruits.push("Cherry")
console.log(fruits)


fruits.unshift("Mango")
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.shift()
console.log(fruits)

console.log("--------------")
subFruits = fruits.slice(2,4)
console.log(subFruits)

console.log(fruits)

fruits.splice(4, 0, "Kiwi", "Guava")
console.log(fruits)

fruits.splice(4, 1)
console.log(fruits)


indexNumber = fruits.indexOf('Kiwi')
console.log(indexNumber)

indexN = fruits.indexOf("Orange")
console.log(indexN)


 console.log(fruits.includes("kiwi"))
 if(! fruits.includes("Orange")){
    console.log("fruit not found")
    
 }else{
    console.log("Add to cart")
    
 }

len = fruits.length
 for(i=0; i<len; i++){
    console.log(fruits[i])   
 }
fruits[len]

console.log("-------------")


for(val of fruits){
     console.log(val)

}
console.log("-----------")

for(ind in fruits){
    console.log(ind)
     console.log(fruits[ind])
    
}
  // create a program 





  // Write a program to find the second-largest number in an array

  function findNumbers(arr) {
  
  if (arr.length < 2) {
    return "Array madhye kamit kami 2 numbers pahije!";
  }

  

  let uniqueArr = [...new Set(arr)].sort((a, b) => a - b);

  if (uniqueArr.length < 2) {
    return "Array madhil sarv numbers same ahet!";
  }

  let smallest = uniqueArr[0];
  let secondSmallest = uniqueArr[1];
  let largest = uniqueArr[uniqueArr.length - 1];
  let secondLargest = uniqueArr[uniqueArr.length - 2];

  return {
    smallest,
    secondSmallest,
    largest,
    secondLargest
  };
}


let numbers = [12, 45, 2, 67, 34, 2, 89, 67];
let result = findNumbers(numbers);

console.log("Original Array:", numbers);
console.log("Smallest Number:", result.smallest);             
console.log("Second Smallest Number:", result.secondSmallest); 
console.log("Largest Number:", result.largest);               
console.log("Second Largest Number:", result.secondLargest);   


// create a function to marge two arrays without duplicates

array1 =[13, 2, 4, 6, 2, 4, 7, 9, 6]
uniqueArray = new Set(array1)
console.log(array1)
console.log(uniqueArray)

arr1 = [11, 43, 99, 75]
arr2 = [23, 11, 95, 43]

resultArr = [11, 43, 99, 75, 23, 95]


// write a program to find the frequency of each element in an array

// 13 : 1    2 : 2     4 : 2     6 : 2. 7 :1. 9 :1
let numbers = [13, 2, 4, 6, 2, 4, 6, 7, 9];


let frequency = {};


for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];

 
  
  if (frequency[num]) {
    frequency[num] += 1;
  } else {
    frequency[num] = 1;
  }
}


console.log("Frequency of each element:");
for (let key in frequency) {
  console.log(`${key} : ${frequency[key]}`);
}









