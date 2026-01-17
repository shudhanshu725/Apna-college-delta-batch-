let student1 ="Shudhanshu";
let student2 ="Ravi";
let student3 ="Ayush";
let student4 ="Ankit";
let student5 ="Sarvesh";
let student=[student1,student2,student3,student4,student5];
console.log(student);

//Creating array 
let info=["Shudhanshu",21,true];
console.log(info);
console.log(info.length);
console.log(info[0]);
console.log(info[0][0]); //means first character of first element
console.log(info[0].length); //length of first element

let newArr=[];//empty array
console.log(newArr);
console.log(newArr.length);

//Array are Mutable 
let arr=["hello","world"];
arr[0]="Shudhanshu";
arr[10]="ayush";// it will create empty items from index 2 to 9
console.log(arr);
console.log(arr.length);

//Array Methods
let fruits=["apple","banana","grapes"];
//push method
fruits.push("mango");//it will return new length of array
console.log(fruits);
//pop method
fruits.pop();//it will remove last element
console.log(fruits);
//Unshift method
fruits.unshift("orange");//it will add element at first
console.log(fruits);
//Shift method 
fruits.shift();//it will remove first element
console.log(fruits);
//indexOf method
console.log(fruits.indexOf("apple"));//it will return index of element
//includes Method
console.log(fruits.includes("mango"));//it will return true or false thats mean element is present or not
//Concatenation method
let veg=["carrot","potato"];
let nonveg=["egg","fish"];
console.log(veg.concat(nonveg));
//reverse method
console.log(fruits.reverse());

//Slice method
let citrus=["lemon","orange","mango","grapes","banana"];
console.log(citrus.slice(1,4));//it will return elements from index 1 to 4-1 index
console.log(citrus.slice(-2));//it willl return elements from last 2 index
console.log(citrus.slice(2));//it will return elements from index 2 to end

//Splice method
let months=["jan","march","april","june"];
months.splice(0,1,"feb");//it will remove 1 element from index 0 and add "feb" at index 0
console.log(months);
months.splice(3,0,"may");//it will add "may" at index 3 and remove 0 element
console.log(months);

//Sort Method 
let word=["shudhanshu","ravi","ayush","ankit"];
word.sort();//it will sort array in ascending order
console.log(word);
let number=[10,5,20,15,30];
console.log(number.sort());//it will sort array in ascending order but as string by default

//Array reference
let array1=[1,2,3,4,5];
let array2=array1;//it will copy reference of array1 to array2
array2.push(6);
console.log(array1);//it will also change array1 because both are pointing to same reference
//but when
let array3=[1,2,3,4,5];//it will create array of elements at  address
let array4=[1,2,3,4,5];//it will create new array of same elements at new address, same element but different address
array4.push(6);
console.log(array3);
console.log(array4);

//Constant array
const arr1=["item1","item2"];
arr1.push("item3");
console.log(arr1);
//arr1=["item4","item5"];it will give error because we cant change reference of constant array
//console.log(arr1);

//Nested array
let matrix=[[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix);//it will print whole matrix
console.log(matrix[0]);//it will print first array
console.log(matrix[0][0]);//it will print first element of first array
console.log(matrix[1][1]);//it will print second element of second array




