// console.log("I am ansh");
// console.log("EN21CS301117");
// age = 24;
// age + 1;


// let name = "ansh kumar"
// age = 24
// price = 99;
// x = null
// y = undefined
// isfollow = "true"
// console.log(name)


// let age = 25
// age = 21
// age = 20
// console.log(age)

// const pi = 3.14
// console.log(pi);

// const student = {
//     Fullname: "ansh",
//     age: 21,
//     cgpa: 8.2,
//     year: 2024,
//     isPass: "true"
//     }

// student[Fullname] = "Ansh Kumar";
//     console.log(student["Fullname"]);
//      //or
//      console.log(student.Fullname);


// Que1. create a const object called"product" to store information as shown in picture.

// const product = {
//     name: "Parker Jotter Standard CT Ball Pen",
//     color: "black",
//     price: 270,
//     rating: 4,
// }

// console.log(product);

// const Lectureroom = {
//     section: B,
//     room: 104,
// }

// FOR LOOP

// for (let i=1; i<=5; i++){
//     console.log("i =", i)
// }
// console.log("ended");



// let sum = 0;
// let n = 70;
// for (let i=1; i<=n; i++)
// {
//     sum = sum + i;
// }
// console.log("sum:", sum)
// console.log("loop has ended");

// WHILE LOOP

// let i = 1;
// while (i<=10){
// console.log("ansh");
// i++;  
// }


// DO WHILE LOOP

// let i = 10
// do {
//     console.log("ansh")
//     i++;
// }

// FOR OF LOOP


// let str = "ansh";
// let size = 0;
// for (let val of str){
//     console.log("val = ", val);
//     size++;
// }
// console.log("String Size = ", size);


// FOR IN LOOP

// let student = {
//     name: "ansh",
//     age: 21,
//     branch: "CS",
// };

// for ( let key in  student){
// console.log("key = ", key, "value=", student[key])
// }


// PRINT ALL EVEN NUMBER 0 TO 100

// for(let num = 0; num<=100; num++) {
// if (num%2 == 0)
// {
//     console.log("num are ", num)
// }
// }

// QUES 2 guess the number


// let gamenum = 25;

// let usernum = prompt("Guess the num:");

// while(usernum != gamenum){
//     usernum = prompt("Guess the another num");
// }
// console.log("correct number");


// String


// let str = "ansh";
// console.log(str[3], str[1]);

// template literals

// let specialstring = `I am Ansh Kumar ${1+2+2}`;
// console.log(specialstring);

// // escape character 
// // \n FOR NEXT LINE 
// // \t FOR TAB SPACE
// console.log("Ansh\nkumar")
// console.log("Ansh\tkumar")


// ANOTHER EXAMPLE
// let item = {
//     name: "pen",
//     price: 10,
// };

// //  is also called string interpolation
// let output = `THE COST OF ${item.name} is ${item.price} rupees`;
// console.log(output);

// console.log("the cost of ", item.name, "is", item.price, "rupees")


// STR METHOD 

// to uppercase
// to lowercase
// trim
// str.slice(start,end?) returns part of string
// str1.concat(str2)
// str.replace(searchVal, newVal)
// str.charAt(idx)

// let str = "     ansh kumar      ";
// let newstr = str.toUpperCase();
// let newstr1 = str.toLocaleLowerCase();
// let newstr2 = str.trim();
// console.log(str);
// console.log(newstr);
// console.log(newstr1);
// console.log(newstr2);

// ARRAYS 
// COLLECTION OF ITEMS  i.e LINEAR WAY

// let marks = [97, 32,24,56,67]
// console.log(marks)
// console.log(marks.length)
// console.log(typeof marks)

// let std_name = ["ansh", "ankush", "alex"]
// console.log(std_name)
// console.log(typeof std_name)

// str are immutuable can not be change

// array are mutuable

// LOOPING OVER AN ARRAY 

// using for loop

// let std_name = ["ansh", "ankush", "alex", "anamika", "anshadha"]

// // for (let i = 0; i<std_name.length; i++){
// //     console.log(std_name[i]);
// // }

// // for of loop
// for (let name of std_name)
// {
//     console.log(name)
// }

// let cities = ["delhi", "noida", "indore", "bhopal"]
// for(let city of cities){
//     console.log(city.toUpperCase())
// }


// let marks = [85, 97, 44, 37, 76, 60]

// let sum = 0;

// for(let val of marks){
//     sum = sum + val;
// }
// let avg = sum/marks.length
// console.log(`the avg of the array is ${avg}`)

// let price = [250, 645, 300, 900, 50]
// // let i = 0;
// // for(let val of price){
// //  console.log(`the value at index ${i} = ${val}`)
// //  let offer = val/10;
// //  price[i] = price[i] - offer;
// //  console.log(`value after offer = ${price[i]}`);
// //  i++;
// // }

// for (let i=0; i<price.length; i++){
//     let offer = price[i]/10;
//     price[i] -= offer;
// }
// console.log(price)
 

// FUNCTION IN JS
// redundacy minimized

// function myfunction() {
//     console.log("hello")
//     console.log("I am Ansh")
// }

// myfunction();

// function sum(a, b){
//     console.log(a+b);
// }

// function sum(a,b){
//     s = a + b;
//     return s;
    
// }

// let val = sum(5, 5);
// console.log("sum = ", val);


// ARROW Function

// function sum (a,b) {
//     return a + b;
// }

// const arrowSum = (a,b) =>{
//     console.log(a+b)
// };

// function mul (a,b){
//     return a*b;
// }

// const mult = (a,b) => {
//     console.log(a*b);

// };

// QUES 1

// function countvowels(str){
//     let count = 0;
//     for ( const char of str){
//         if(
//             char == "a"||
//             char == "e"||
//             char == "i"||
//             char == "o"||
//             char == "u"
//         ) {
//             count++;
//         }
//     }
//     return count;
// }

// QUES2


// const countvow = (str) =>{
//         let count = 0;
//         for ( const char of str){
//         if(
//             char == "a"||
//             char == "e"||
//             char == "i"||
//             char == "o"||
//             char == "u"
//         ) {
//             count++;
//         }
//     }
//     return count;
// };


// for each loop in ARRAY

// let arr = [1,2,3,4,5];

// arr.forEach(function printval(val){
//     console.log(val);

// }
// );

// main foreach to use
// let arr= [ "ansh", "ankush", "anamika"]

// arr.forEach((val, idx, arr) => {
//     console.log(val, idx, arr);
// });


// higher order func kya hote 
// those who another func as a parameter
// or either return another function. forEach is a higher order func 

// ques for a given arr of number print the square of each val using the forEach loop

// let num = [1,2,3,4,5];

// num.forEach((num) =>{
//     console.log(" Square of the number is" ,num*num);
// }) 

// MAP METHOD 

// let num = [1,2,3,4,5];

// let newarr = num.map((val) => {
// return val *2;
// }
// )

// console.log(newarr)


// FILTER METHOD

// let arr = [12,22,3,34,5,56,34]
// let newarr = arr.filter((val) => {
//     return val % 2 == 0;
// });
// console.log(newarr);

// REDUCE METHOD

let arr = [1,2,3,4,5];

const newarr = arr.reduce((res, curr) => {
    return res+curr;
});

console.log(newarr)