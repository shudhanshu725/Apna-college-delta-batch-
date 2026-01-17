//Scope is the visibility of variable means Function kahan tak accesible hai, kis area tak

//Function Scope
//when variable is defined inside the function then it is function scope and It can't be accessed outside the function

function sumNo(a,b){
    let sum=a+b; // function scope 
    console.log(sum);
}
sumNo(10,20);
//console.log(a); //error

//Block scope
//Variable inside the {} is not be accesseble outside the block 
let age= 24;
if (age>=18){
    let str="adult";
    console.log(str);
}
//console.log(str);//Error because it declared outside the block 

//LAXICAL SCOPE 
// laxical scope 
function outerFunc(){
    let x = 10;
    let y = 20;
    function innerFunc(){
        console.log(x);
        console.log(y);
    }
    innerFunc();
}
 
outerFunc();