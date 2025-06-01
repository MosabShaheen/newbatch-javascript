// const num1 = 12
// const num2 = 15

// console.log(num1==="12"&&num2=="15") // false

// console.log(num1=="12"&&num2=="15")// true

// console.log(num1==="12"&&num2==="15") //false

// console.log(num1==="12"||num2=="15") // true

// console.log(num1=="12"||num2=="15") //true

// console.log(num1==="12"||num2==="15") //false

// console.log((num1==="12"||num2==="15")||num2>num1) 


// let city = "lahore"
// let accesscity = "Lahore"

// if (accesscity==city) {
//     console.log("you can access this website")
// } else {
//     console.log("you can not access this website")
// }


// Ticketing system
// let country = prompt("Where do you live?")
// // Number() function is used to convert the string to number
// let age = Number(prompt("What's your age?"))

// if (country === "pakistan") {
//     if (age >= 18) {
//         console.log("Here is your ticket")
//     } else {
//         console.error("Age restriction")
//     }
// } else {
//     console.log("Invalid country")
// }


// let fruits = ["apple", "mango",1,3,4,5,6,9,["me", "ab"]]
// // let fruit1 = "apple"


// // let fruits = []

// fruits.unshift("banana")

// // console.log(arrlen)
// console.log(fruits)


// let num1 = prompt("Please add first number")
// let num2 = prompt("please add second number")
// num1 = Number(num1)
// num2= Number(num2)

// console.log(num1+num2)

// let country = ["pakistan", "usa"]

// let usercountry = prompt("please enter your country")

// if (country[0]==usercountry){
    
//     console.log("Pakistan, you can access this website")
// } else if (country[1]==usercountry){
//     console.log("Usa, you can access this website")
// } else{
//     console.log("you can not access")
// }

// let operator = ["+","-","*"]


// console.log(operator.length)
// let num1 = Number(prompt("First Number:"))
// let num2 = Number(prompt("Second Number:"))
// let userop = prompt("Enter your operator")

// if(userop==operator[0]){
//     console.log(num1+num2)
// } else if (userop==operator[1]){
//     console.log(num1-num2)
// }


// let fruits = ["apple", "mango", "banana", "orange", "dfadf"]

// fruits.splice(0,2,"kiwi","lemon","egg")

// console.log(fruits)
// let newarr = fruits.slice(1,3)

// console.log(newarr)


// let studentsData = ["mosab","234545636","mail@.com","maaz","2345235","maaz@.com","ubaid",]


// let student = {
//     name:"mosab",
//     number: 23435345,
//     mail: "mail.com"
// }

// console.log(student.name)


let students = [
    {
        name:"mosab",
        mail:"mail.com",
        number: 234235
    },
    {
        name:"maaaz",
        mail:"maisdl.com",
        number: 235464235
    }
]

console.log(students[1].name)