
let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr)

let number=287152;
let count=0;
let copy=number;
while(copy>0){
    count++;
    copy=Math.floor(copy/10);
}
console.log(count);


let nums=287152;
sum=0;
let copys = nums;

while(copys>0){
    let digit=copys%10;
    sum+=digit;
    copys=Math.floor(copys/10);
}
console.log(sum);



const squa = (num) => {
    return num * num;
}