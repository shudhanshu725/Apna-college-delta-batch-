// function hello(){
//     console.log("Hello, world!");
//     console.log("This is a test function.");
// }

// function demo(){
//     console.log("Demo function executing.");
//     hello();
// }

// console.log("Starting the demo...");
// demo();
// console.log("Demo finished.");
// // This code demonstrates a simple call stack with nested function calls.
// // When executed, it will log messages to the console indicating the order of execution.
// // The call stack will show how the functions are called and returned in sequence.


// //Visualize the call stack 
// function one(){ 
//     return 1; // <- call stack returns here -5, when one() is called -4 and -6
// }
// function two(){ //<- call stack continues here -3
//     return one() + one();// <- one() is called here-4
// }
// function three(){  // <- call stack starts here -1
//     return two() + one();// <- two() is called here -2, and one() is called here -6
//     console.log("ans"); // <- this line is never reached because the function returns before this point means the call stack ends here -7
// }
// three();// <- call stack ends here -0

//Javascript is single threaded
// setTimeout(function timeout(){  // <- this function is registered to be called after 2000 milliseconds and added to the Web APIs environment
//     console.log("Timeout executed");
// },2000);  

// console.log("End of script"); // <- this line is executed first because setTimeout is asynchronous and non-blocking 

//Callback hell example
// h1 = document.querySelector("h1")
// function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         h1.style.color = color;
//             resolve("Color changed to ");
//         }, delay);
//     });
// }
// changeColor("red", 1000)
// .then(() => changeColor("orange", 1000))
// .then(() => changeColor("yellow", 1000))
//Callback hell means nested callbacks making code hard to read and maintain
// changeColor("red", 1000, function(){
//     changeColor("orange", 1000, function(){
//         changeColor("yellow", 1000, function(){
//             console.log("All colors changed!");
//         });
//     });
// });

//PROMISES to avoid callback hell
// function saveToDatabase(data){
//     return new Promise(function(resolve, reject){
//     let internetspeed = Math.floor(Math.random() * 10) + 1; //simulate internet speed 
    
//         if(internetspeed > 4){
//             resolve("Succes:Data saved successfully!");
//         } else {
//             reject("failure:Error saving data.");
//         }
//     });
//     }
// //then and catch methods to handle promise result
//     saveToDatabase("myData")
//     .then((successMessage)=>{
//         console.log(successMessage);  
//         console.log(successMessage)
//         return saveToDatabase("moreData")
//         .then((successMessage)=>{
//             console.log(successMessage);
//         })
//         .then((successMessage)=>{
//             console.log("success:All data saved successfully!");
//         })
//         .catch((moreErrorMessage)=>{
//             console.log(moreErrorMessage);
//         });
//     })
//     .catch((errorMessage)=>{
//         console.log(errorMessage);
//     });

// async syntax to handle promises
async function greet(){
    throw "something went wrong!";  
    return "Hello!";
}
greet()
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log("Error caught: " + error);
});

// Await syntax to handle promises
function getNum() {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
        let num= Math.floor(Math.random() * 10) + 1;
        console.log(num);
        resolve();
    },1000);
});
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}
