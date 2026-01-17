// //function ka matlab hai koi specific kam karna .koi bhi vauable hoga usko koi function da sakte hai woh wahi kam karke dega return 
// //Hello World Function 
// function funcName(){
//     console.log("This is function");
//     console.log("Hello World");
// }
// //function calling (using function name followed by parenthesis)
// funcName();

// function name(){
//     let age=24;
//     if(age>=18){
//         console.log("You can vote");
//     }
//     else{
//         console.log("You can not vote");
//     }
// }
// name();

// function dice(){
//     let num=Math.floor(Math.random()*(6+1-1)+1);
//     console.log(num);
// }
// dice();

// //FUNCTION WITH ARGUMENTS
// function add(a,b){
//     let sum=a+b;
//     console.log("Sum is: "+sum);
// }
// add(5,10);
// add(20,30);
// add(100,200);

// function avg(num1,num2,num3){
//     let avg=(num1+num2+num3)/3;
//     console.log("Average is: "+avg);
// }
// avg(10,20,30);

// //RETURN KEYWORD
// function sum(a,b){
//     return a+b;
// }
// let ans=sum(sum(10,20),20); // sum under sum
// console.log(ans);


// //FUNCTION EXPRESSION 
// //use of fuction inside variable with agurment
// let sums = function(a,b){
//     return a+b;
// }
// // if we write sum(3,4) in console it will give 7

// // Higher order function 
// // take a multiple function as a argumnet and  ruturn a function 
// function multipleGreeet(func, count){ //higher order function
//     for (let i=1;i<=count;i++){
//         func();
//     }
// }
// let greet = function(){
//     console.log("hello");
// }

// multipleGreeet(greet, count);

// Returns a function
// function oddOrEvenFactory(request){
//     if (request=="odd"){
//         let odd =function(n){
//            console.log(!(n%2==0 ));
//              } 
//              return odd;
//     }
//     else if(request=="even"){
//         let even=function(n){
//             console.log(n%2==0);
//         }
//         return even;
//     } else {
//         console.log("wrong request");
//     }

// }
// in console let oddFunc= oddOrEvenFactory("odd");
// oddFunc(5); // true
// oddFunc(4); // false


//METHODS
// function inside object is called method
// const calculator ={
//     add: function(a,b){
//         return a+ b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
// };


// //THIS KEYWORD 
// // this keyword refers to the current object 
// const person ={ // person object using this keyword
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function(){
//         return this.firstName + " " + this.lastName; // this refers to person object and we can't access firstName and lastName directly
//     }
// }
// function printFullName(){
//     console.log(this); // this refers to global object (window in browser, global in nodejs) 
// }

// // try & catch
// // try statement allows you to test a block of code for errors
// // catch statement allows you to handle the error
// // finally statement allows you to execute code after try and catch, regardless of the result
// console.log("Start of try-catch example");
// try {
//     // code that may throw an error
//     console.log(Inside);
// }
// catch (error) {
//     // code to handle the error
//     console.log("there is an error :","inside is not defined"); // error message show in console
// }

// // MISCELLANEOUS TOPICS
// // ARROW FUNCTION
// // shorter syntax for writing function expressions
// const func = (a,b)=>{ // arrow function with two parameters
//     console.log(a+b);
// }
// const mul = (a,b)=> (
//     a*b
// ); // implicit return


// //SET TIMEOUT
// // executes a function after a specified delay
// setTimeout(()=>{
//     console.log("This message is shown after 9 seconds");
// },9000); // 9000 milliseconds = 9 seconds

// //SET INTERVAL
// // repeatedly executes a function at specified intervals
// let id = setInterval(()=>{
//     console.log("This message is shown every 5 seconds");
// },5000); // 5000 milliseconds = 5 seconds
// console.log(id);

// const student ={
//     name: "Alice",
//     age: 20,
//     prop: this,
//     getDetails: function(){
//         return `${this.name} is ${this.age} years old.`;
//     },
// };

//ARRAY METHODS
// forEach
// let arr = [{name: "Alice",marks:85,}, {name: "Bob",marks:98,}, {name: "Charlie",marks:78,}];
// arr.forEach((student)=>{
//     console.log(student.marks);
// });// prints each element in the array

// map
// creates a new array by applying a function to each element of the original array
// let numbers = [1,2,3,4,5];
// let squaredNumbers = numbers.map((num)=>{
//     return num * num; // squares each number and returns a new array
// });

// filter
// creates a new array with elements that pass a test
// let marks = [65,70,85,90,55,40];
// let passedMarks = marks.filter((mark)=>{ // to see the array we write passedMarks in console
//     return mark >= 50; // returns a new array with marks greater than or equal to 50
// });

//EVERY
// tests whether all elements in the array pass a test
// let marks = [65,70,85,90,55,40];
// let allPassed = marks.every((mark)=>{
//     return mark >= 50; // returns false if any mark is less than 50
// });

//REDUCE
// reduces the array to a single value by applying a function
// let nums = [1,2,3,4,5];
// let finalVal = nums.reduce((rel, el)=> {
//     console.log("rel:", rel, "el:", el);
//     return rel + el;    
// }); // sums all numbers in the array, starting with an initial value of 0

//DEFAULT PARAMETERS
// GIVING DEFAULT VALUE TO PARAMETERS IF NO VALUE IS PASSED
function sum (a,b=6){
    return a + b;
}
console.log(sum(4)); // b will take default value 6
console.log(sum(4,)); // b will take value 10

//SPREAD OPERATOR
// allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let combinedArr = [...arr1, ...arr2]; // combines arr1 and arr2 into a new array
console.log(combinedArr); // [1,2,3,4,5,6]

//REST PARAMETER
// allows a function to accept an indefinite number of arguments as an array
function sum(...args){
    for (let i=0; i<args.length; i++){
        console.log("you passed:", args[i]);
    }
}

//Destructuring
//storing values of array or object into multiple variables
//ARRAY DESTRUCTURING 
let names = ["Alice", "Bob", "Charlie", "David", "Eve"];//
let[winner,runerUp,secondRunnerUp]= names; // winner="Alice", runnerUp="Bob", secondRunnerUp="Charlie"        
//OBJECT DESTRUCTURING
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};
let {firstName, lastName, age} = person; // firstName="John", lastName="Doe", age=30




