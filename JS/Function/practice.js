function sum(a,b){
    console.log(a+b);
}

function calcAvg(a,b,c){
    let avg=(a+b+c)/3;
    console.log(avg);
}

function printTable(n){
    for (let i=n;i<=n*10;i+=n){
        console.log(i);
    }
}

calcAvg(10,20,30);
printTable(5);
sum(10,20);


//Create a functiom that return the sum of number from 1 to n 
function sumOfN(n){
    let sum=0;
    for (let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}
console.log(sumOfN(10));

// cretae a function that returns the concatenation of all string in an array 
function concatString(arr){
    let str="";
    for (let i=0;i<arr.length;i++){
        str+=arr[i];
    }
    return str;
}
console.log(concatString(["Hello_","World"]));
// create a function that returns the average of all number in an array 

// 
let num =[10,20,30,40,50];
let ans = num.every((num) => num%10 ==0)
console.log(ans);





