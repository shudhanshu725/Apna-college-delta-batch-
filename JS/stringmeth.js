//Trim methods
let msg="   hello ";
console.log(msg.trim()); // "hello" 
console.log(msg); // "   hello " it can not change the original string because strings are immutable

//toUpperCase and toLowerCase
console.log(msg.toUpperCase()); // "   HELLO "
console.log(msg.toLowerCase()); // "   hello "

//string method with arguments
let str="IlovejavaScript";
console.log(str.indexOf("java")); // 5 because it start from index 5
console.log(str.indexOf("J")); //-1 because it not found 

//Method chaining
let str2="   Hello World   ";
console.log(str2.trim().toLowerCase()); // "hello world"
console.log(str2.trim().toUpperCase()); // "HELLO WORLD"
console.log(str2.trim().indexOf("W")); // 6 because after trim "Hello

//String slicing
let str3="Hello World";
console.log(str3.slice(5)); // " World" it start from index 5 to end
console.log(str3.slice(0,5)); // "Hello" it start from index
console.log(str3.slice(-5)); // "World" end index =-1 endex

//String replacement
let str4="Hello World";
console.log(str4.replace("World","JavaScript")); // "Hello JavaScript"
console.log(str4.replace("W","t")); // "Hello Torld" it is case sensitive








