// let promise = new Promise(function (resolve, reject) {
//     // do something that might take a while
//     // let's just set x instead for this example

//     let x = 20;
//     if (x > 10) {
//         return resolve(Math.random()); // on success
//     } else {
//         reject("Too low"); // on error
//     }
// });

// promise.then((value) => {
//     console.log("Success:", value);
// }).catch((err) => console.log(err))



// 


let getdata = new Promise((res, rej)=>{
    let data = [1,234,45,456,3423,2342,42424]

    if(data.length>"0"){
        return res(data)
    }else{
    rej("Server error")
    }
})

getdata.then((data)=>{
    console.log(data)
    if(data.find((dataelements)=> dataelements == 344323)){
        return "The value is there"
    }else{
        
    }
}).then((value)=>{
    console.log(value)
}).catch((erro)=> console.log(erro))