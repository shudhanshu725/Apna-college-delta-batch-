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
h1 = document.querySelector("h1")
function changeColor(color, delay, callback){
    setTimeout(function(){
        h1.style.color = color;
        if(callback){
            callback();
        }
    }, delay);
}
//Callback hell means nested callbacks making code hard to read and maintain
changeColor("red", 1000, function(){
    changeColor("orange", 1000, function(){
        changeColor("yellow", 1000, function(){
            console.log("All colors changed!");
        });
    });
});