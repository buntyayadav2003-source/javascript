const person = {}
const employee = new Object()


console.log("Data type of person", typeof(person))


const student = {
    name: "Doremon",
    age:18,
    country:"japan",
    greeting:function(){
        return "Hello I AM "+ this.name
    }
}

console.log(student.country)
console.log(student["name"])

student.year = "first year"

console.log(student)

student.age = 19

console.log(student)

delete student.year

console.log(student)

student.characters = ["Nobita", "Gian", "Shizuka", "Doremi",]
console.log(student)

student.characters.map((ch)=>{
    console.log("This is special character in Doremon",ch)
    
})

student.address ={
    houseNo:420,
    city:"Tokyo",
    pincode:"4545445"
}
console.log("pincode", student.address.pincode)
console.log("City", student.address["city"])
console.log("house number", student["address"]["houseNo"])

student.isCartoon = true


console.log(student.greeting())
student.greet = function(){
    console.log("This is method of object student")
}

student.greet()

console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student))

for(let key in student){
    console.log(key)
    console.log(student[key])
}
// for(let v of student){
//     console.log(v)
// }

console.log("--------------------")
console.log(student)
console.log("--------------------")

studentObjSTR = JSON.stringify(student)
console.log(studentObjSTR)
console.log(typeof(studentObjSTR))

newObjStudent = JSON.parse(studentObjSTR)
console.log(newObjStudent)
console.log(typeof(newObjStudent))


