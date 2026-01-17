// Remove all occurrences of a specific number from an array
let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr)

// Count the number of digits in a number
let number=287152;
let count=0;
let copy=number;
while(copy>0){
    count++;
    copy=Math.floor(copy/10);
}
console.log(count);

// Calculate the sum of the digits of a number
let nums=287152;
sum=0;
let copys = nums;

while(copys>0){
    let digit=copys%10;
    sum+=digit;
    copys=Math.floor(copys/10);
}
console.log(sum);

//Calculate factorial of given number
let n=5;
let factorial = 1;
for(i=1;i<=n;i++ ){
    factorial*=i;
}
console.log(factorial);








