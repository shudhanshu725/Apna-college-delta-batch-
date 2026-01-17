console.log("Loop in JavaScript");
// Loop is used to execute a block of code multiple times until a certain condition is met.
//For Loop
//syntax of for loop
// for(initialization; condition; updation){
//  
// }
for(let i=0;i<5;i++){  //i=0 is a initialization, i<5 is a condition, i++ is a updation
    console.log(i);
} 

//Print even numbers from 0 to 10
for(let i=0;i<=10;i+=2){ // loop from 0 to 10
        console.log(i);//print even number
    }

//Print odd numbers from 1 to 10
for(let i=1;i<=10;i+=2){ // loop from 1 to 10
        console.log(i);//print odd number
    }

//INFINITE LOOP
// for(let i=0;i>=0;i++){ // loop from 0 to infinity
//         console.log(i);//print infinite number
//     }

//PRINT MULTIPLICATION TABLE 
//let n =prompt("Enter a number to print its multiplication table:");
//for(i=n;i<=n*10;i+n){ //multiplication table  of 5 
     //   console.log(i);
//

//NESTED LOOPS 
//
for(let i=0;i<=3;i++){ // First outer loop executed 1 times then inner loop executed 4 times
    for(let j=0;j<=3;j++){ //inner loop executed 4 times then outer loop executed 1 time 
        console.log(i,j); //print i and j 
    }
}    

//WHILE LOOP
//WHILE LOOP SYNTAX
// while(condition){
//     code to be executed
// }
let i=0;
while(i<5){ //loop from 0 to 4
    console.log(i);
   i++; //increment i by 1
}
let j=20;
while(j>=2){
    console.log(j);
    j-=2;
}

//BREAK KEYWORD
//The break statement is used to terminate the loop or switch statement and transfer execution to the statement immediately following the loop or switch.
for(let i=0;i<10;i++){
    if(i==5){
        break;
    }
    console.log(i);
}

//Lopps in Arrays 
let fruit=["banana","mango","apple","grapes"];
for ( let i=0;i<fruit.length;i++){
    console.log(i,fruit[i]);
}

//LOOPS WITH NESTED ARRAYS
let heroes=[["superman","batman","flash"],["spiderman","ironman","thor"]];
for (i=0;i<heroes.length;i++){
    console.log("List of heroes in array "+ (i+1));
    for(j=0;j<heroes[i].length;j++){
        console.log(heroes[i][j]);
    }
}

//For of LOOP
//The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.
let fruits=["banana","mango","apple","grapes"];
for (let fruit of fruits){
    console.log(fruit);
}
for (char of "apna college"){
    console.log(char);
}

//Nested for-of loop
let hero=[["superman","batman","flash"],["spiderman","ironman","thor"]];
for (let h of hero){
    for (let h1 of h){
        console.log(h1);
    }
}
