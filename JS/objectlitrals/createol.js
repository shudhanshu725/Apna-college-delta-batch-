let student ={
    name:"John",
    age:21,
    marks:[85,90,78],
}
console.log(student);

//Creating item info
const item = {
    price:100,
    name:"sugar",
    discount:"90%",
}
console.log(item);

//Creating Twitter post
const post = {
    username:"shudhanshu88",
    content:"my first post",
    likes:100,
    repost:10,
    tages:["#firstpost","#hello","#myfirstpost"],
}
console.log(post);

//Get values from object
console.log(student.name);
console.log(post["likes"]);// another way to get value from object 
console.log(item.price);

//JS automatically convert objects keys to strings
//Even if the number as a key the number will be converted to string .
const obj={
    1:3,
    2:"b",
    b:3,
}
console.log(typeof(obj[1]));//number 1 is converted to string "1"


//Adding and updating object values
const person ={
    name:"shudhanshu",
    age:24,
    class:"b.tech",
    Rollno:22001303053,
}
console.log(person);
person.Rollno=22001303054;//updating value of existing key
person.marks=85;//adding new key value pair
console.log(person);

//Nested objects
const user ={
    FullName:{
        first:"shudhanshu",
        last:"mishra",
    },
    age:24,
    class:"b.tech",
    Rollno:22001303053,
    marks:{
        science:85,
        maths:90,
        english:78,
    }
}
console.log(user);
console.log(user.marks.science);

//Array of objects
const students =[
    { name:"shudhanshu",age:24},
    { name:"rahul",age:23},
    { name:"anurag",age:25},
]
console.log(students);
console.log(students[1].name);//getting name of 2nd student

//Maths object
console.log(Math.sqrt(16));//square root of 16
console.log(Math.pow(2,3));//2 raised to power 3
console.log(Math.abs(-5));//absolute value
console.log(Math.ceil(4.2));//rounding up
console.log(Math.floor(4.7));//rounding down
console.log(Math.round(4.5));//rounding to nearest integer
console.log(Math.min(3,1,4,2));//minimum value
console.log(Math.max(3,1,4,2));//maximum value

//Generate random integer 
let num=Math.random();
num=num*5; //for 1-100 random number and multiply with 10 for random integer between 1-10 and so on
num=Math.floor(num);
num=num+20; //for range 20-25 add 20 to the result .
console.log(num);
//for any range x to y use formula Math.floor(Math.random()*(y-x+1))+x
let anyNum=Math.floor(Math.random()*(30-20+1))+20;//random number between 20-30
console.log(anyNum);

//Practice Questions
let dice=Math.floor(Math.random()*(6+1-1)*1);
console.log(dice);

let car={
    name:"toyota",
    model:2007,
    color:"Red"
}
console.log(car.name);

let  persons={
    name:"shudhanshu",
    age:23,
    address:"varanasi"
}
persons.address="newyork";
persons.conuntry="united state";
console.log(persons);