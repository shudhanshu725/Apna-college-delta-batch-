//logical operator
let marks=prompt("enter your marks out of 100");
if(marks>=33 && marks<50){ // && is and operator
    console.log("C grade")
}
else if(marks>=50 && marks<70){
    console.log("B grade")
}
else if(marks>=70 && marks<=100){
    console.log("A grade")
}
else{
    console.log("fail")
}