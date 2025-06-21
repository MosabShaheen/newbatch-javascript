// for(let i = 0; i<=5; i++){
//     console.log("Hello world"+i)
// }
// let x = 4
// console.log(x++)
for(let i = 5; i>=0; i--){
    console.log("Hello world"+i)
}

// array loop

// let fruits = ["apple", "banana", "orange", "graps"]

// for (let i = 0; i<fruits.length; i++){
//     console.log("Fruit: "+fruits[i])
// }

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];

// for (var i = 0; i < firstNames.length; i++) {
// 	console.log("For first loop:"+firstNames[i])
//     for(let x = 0; x <lastNames.length; x++){
//         console.log(firstNames[i]+lastNames[x])
//     }
// }


// let name = "mosab shHEEN"

// console.log(name.length)


 function greeting(){
    console.log("Hello Mosab")
}


// let const var

// let abc = "abc"
// var def = "def"
// const hij = "hij"

// console.log(hij)
// hij = "fasdlfs"
// console.log(hij)


// global scope and local scope variables

// let name = "mosab"

// if(5==5){
//     console.log(name)
//     var myname = "shaheen"
//     console.log(myname)
// }
// console.log(myname)

// let name = "My name is Mosab SHAHEeen."

// console.log(name.toUpperCase())
// console.log(name.charAt(3))

// console.log("welcome to website")
// console.log(" welcome to website")
// console.log("Hello, welcome to website")
// console.log("Hello, welcome to website")
// console.log("Hello, welcome to website")
// console.log("Hello, welcome to website")
// console.log("Hello, welcome to website")
// console.log("Hello, welcome to website")
// console.log("Hello, welcome to website")
// console.log("Hello, welcome to website")
// console.log("Hello, welcome to website")
// console.log("Hello, welcome to website")
// console.log("Hello, welcome to website")
// console.log("Hello, welcome to website")


// function greeting(){
//     console.log(", welcome to website")
// }

// greeting()
// greeting()
// greeting()
// greeting()
// greeting()
// greeting()
// greeting()

function Loop(thisarr, arrname){
    let value;
    for(let i = 0; i<thisarr.length; i++){
      value = (thisarr[i]+" "+arrname)
    }
    return value
}

let arr = [332,234,1325,435634,14324,1324]
let newvar = Loop(arr,"1st")
console.log(newvar)

let newarr = [5362,2452345,626435,254352,4525345,342523,254]
Loop(newarr, "2nd")

let myarr = [534525,532534,52345435,4534,45234,523,5345,435]
Loop(myarr, "3rd")