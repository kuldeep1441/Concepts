// camelCase
// array.sort();
// return new value = > let a = arr.trim(); slice ,substr,concat ,map,filter, replace,toUpperCase


// JavaScript (JS) is inherently synchronous in its nature, especially in the context of web browsers and Node.js environments. This means that JavaScript code can handle multiple tasks simultaneously without blocking the execution of the main program.

// JavaScript supports asynchronous programming through mechanisms like callbacks, promises, and async/await. Asynchronous operations, such as fetching data from an API or reading a file, can be initiated, and the program can continue executing other tasks without waiting for the asynchronous operation to complete. When the asynchronous operation finishes, a callback function or a resolved promise is triggered to handle the result.


// let and const are mostly used

// let a = 4,b =5,c= 0;
// console.log(a,b,c);

// var a = 0;
// var a = 4;     can update and reinitialize a;
// console.log(a);

// functional scope
// {var a = 9;
//     console.log(a);
//     }
//     console.log(a);    ->> will print 9;

// let a = 9;
// a = "4";     // can't reinitialized again but can update
// console.log(a);

// box scope
// {let a = 9;
// console.log(a);
// }
// console.log(a);   // shows a is not defined

// const a = 2;
// a = 4;         // neither update nor reinitialized
// console.log(a);

// box scope
// {const a = 9;
//     console.log(a);
//     }
//     console.log(a);

// let a = 10;
// let b = "12";
// console.log(b+a);   //string + number

// let a = 10;
// let b = "12";
// console.log(b-a); // this is a bug    string - number

// console.log("pk"+"ravaa");
// console.log("pk"-"ravaa");    //give NaN (not a Number)

// console.log(true - true);    //in js true represent 1 and false represent 0;
// console.log(true+false);


// interview question -> diff bw NULL and undefined;
// var pk = null;
// console.log(pk);
// var jk;
// console.log(jk);

// let phoneNo = "kuldeep";
// let name = 34
// console.log(isNaN(phoneNo))  //-> will give true as it is not a Number
// console.log(isNaN(name))     //-> give false;

// console.log(NaN === NaN);   //give false;
// console.log(isNaN(NaN));

// use backtick `content` -->> Template Literals
// let a = 9;
// console.log(`my name is   ${a}  Reedev gunda ki gend`);

// ** Increment and Decrement Operator
// let a = 15;
// let b = a-- + 5;
// console.log(a);   //give 14
// console.log(b);   //give 20

// let a = 15;
// let b = --a + 5;
// console.log(a);  give 14
// console.log(b);  give 19


// challange *****
// console.log(3**3);   // it will give 3^3;

//swap 2 numbers without extra variable
// let a = 5;
// let b = 10;
// a = a+b;
// b = a-b;
// a = a-b;
// console.log(a,b)


// ** diff bw == and === operator
// console.log(5 == '5');
// console.log(-5 == '5');
// console.log((5 === '5'));

// falsey values in js
// 0, "", undefined,null, NaN;

// if(0){                         // argument as any falsy value
//     console.log("hello world");
// }
// else{
//     console.log("it will run for falsy statements");
// }

// * Ternary operator
// let age = 18;
// age>18 ? console.log("allowed to drive") : console.log("not allowed");


// *********functon parameter vs function argument
// function sum(a,b){         -->>>>>>>>>>>here a and b are parameters
//     return a+b;
// }
// console.log(sum(2,4));     -->>>>>>>>>>>here 2 and 4 are arguments





// modern javascript (Ecmascript 2015)

// Template Literals  -->>> Using backTick;
// const name = "kuldeep";
// console.log(`hello ${name}`);

// Default Parameter
// function sum(a,b=5){       // no let,var,const with argument a and b;
//     return a+b;
// }
// console.log(sum(4));

// Fat arrow Function
// let func = (a,b)=>{
//     return a+b;
// }
// console.log(func(3,4));



// **** ARRAY IN JS 

// var arr = ['kuldeep','male',5,true,'k'];             // no need to give size and also store more than one data-type;
// for length of array --->> arr.length; not as a function;
// console.log(arr);  ******* to print whole array in the form of array;

// ARRAYS OPERATIONS

// // toString(arr);
// let name = 'pkchutiya';
// // Array.from(name);
// console.log(name[0]);

// let arr = [1,2,3,4,"afbsdf"];
// // for-in loop
// for(let i in arr){
//     console.log(i,arr[i]);      // will print index;
// }
// // for-of loop
// for(let i of arr){
//     console.log(i);    // will print value;
// }
// for-each loop  ***********
// arr.forEach((element,index,array)=>{
//     console.log(element,index,array);        // can print index,value,array;
// })

//SORT ARRAY and reverse;
// arr.sort();
// arr.reverse();

// CRUD OPERATION ON ARRAY
// arr.push("pardhum");
// arr.push('pk','kd','reedev');
// arr.forEach((element,index)=>{
//     console.log(element);
// })
// arr.pop();

// shift and UNSHIFT
// arr.unshift("pardhum");        // add at begining
// arr.shift();                   // remove from begining

// ***SPLICE and slice -->> for adding and removal from any index

// arr.splice(2,2,56);   //start from arr.length  ,(index, no. of element to be removed , element to be added); delete element as well as space also;
// let arr2 = arr.slice(3,2);
// console.log(arr);

// DELETE Element
// delete arr[0];     //only delete Element and space remain conserved;
 

// MAP, FILTER AND REDUCER  ********************************

// let arr2 = [1,2,34,4,5,6,7];
// let arr3 = arr2.map((value,index,arr2)=>{
//     return value+2;
// })
// let arr4 = arr2.filter((value,index,arr2)=>{    //imp*************************************
//     return value>5;
// })
// let initialvalue = 3;
// let arr5 = arr2.reduce((accumulator,value,index,arr2)=>{
//     return accumulator+value;
// },initialvalue) // it's our choice can also give initial value; 
// // console.log(arr3);
// // console.log(arr4);
// console.log(typeof(arr5));

// concat method

// var arr = [2,3,4,5];
// let arr2 = [5,3,7];
// var arr = arr.concat(arr2);
// console.log((arr));




// STRING

// String str = "kuldeep";        string is not a datatype in javascript;
// let str = "kuldeep"
// console.log(str.length);
// length of string ->> str.length;

// ESCAPE CHARACTER
// let x = "my name is \"kuldeep\" tanwar";
// let y = "my name is 'kuldeep' tanwar";      // use different quotes
// console.log(x,y);

// FINDING SUBSTRING IN A STRING
// let str = "manan";
// let a = str.indexOf('n',3);          // it will start searching after index 5;
// let b = str.lastIndexOf('n',5);   // it will start searching in backward manner;
// console.log(a,b);

// METHOD 2
// let a = str.search('deep');
// console.log(a);

// SLICE AND SUBSTR
// let a= str.slice(3,5);    //starting index, then ending index; starting index included and ending not;
// console.log(a);
// let b= str.substr(3,3);
// let c= str.substr(-5);
// console.log(c);
// let str2 = str.replace('e','x');   //only first instance of substring will be replaced not all; and there will be no change in str;
// console.log(str);

// charAt method
// let a = str.charAt(5);

// UPPERCASE AND LOWERCASE

// let a = str.toUpperCase();
// str[3] = 'x';                    // STRING ARE IMMUTABLE IN JAVASCRIPT --->>> A STRING NEVER CHANGE BUT IT CAN CREATE NEW STRING WITH THAT CHANGE;
// console.log(str);

//trim
// let a = str.trim();

// DATE AND TIME
// console.log(new Date());
// console.log(new Date().toString());
// console.log(new Date().toLocaleString());
// let date = new Date();
// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getDay());


// mathematical operation in js   -->>> we have to provide Math for any operation
// console.log(Math.PI);
// console.log(Math.round(2.7));
// console.log(Math.ceil(2.7));
// console.log(Math.floor(-2.7));
// console.log(Math.trunc(-99.6));
// console.log(Math.pow(2,3));
// console.log(2**3);
// console.log(Math.sqrt(11));
// console.log(Math.abs(-34));
// console.log(Math.min(4,5,6,7,-1));
// console.log(Math.max(4,5,6,7,-1));
// console.log(Math.floor(Math.random()*10));



//**************************************** */
//  WINDOW, DOM AND BOM
// WINDOW - >> {WINDOW IS A GLOBAL OBJECT WHICH PROVIDE CONTROL TO BROWSER} **********

// dom and bom are child or object of window;
//***** document contain html */   document is an object;

// console.log(document.body.firstElementChild);
// console.log(innerWidth); 
// window.history.back();

// document.body.parentElement;
// document.body.nextSibling;
// document.body.childNodes;

// searching the DOM
// document.getElementsByClassName("name of class").style.color = "#F8B627";
// document.getElementById("id").innerHTML = "reedev sangwan";
// document.getElementsByTagName("a")[0];
// document.getElementById("kd").innerHTML = "reedev behn k l*** padh lene de";

// querry selector and querry selectorALL
// document.querySelector(".id1")
// document.querySelectorAll("#classname");


// Events and other DOM properties     (imp event ->> onChange in react);

// id.innerHTML = "pk to ******";
// class.outerHTML = "lljdlg"

// let element = document.getElementById("id");     // (1)
// element.onclick = function(){
//     alert("hello baccha");
// }

// element.addEventListener('click',clicked());    // (2)
// function clicked(){
//     alert("hey pardhum");
// }

// element.addEventListener('click',()=>{       // (3)
//     alert("hey pardhum");
// });

// mouse event(click,hover,mouseenter) ,keyboard event(keyPress)

// function checking(){
//     console.log(event);
//     console.log(event.target);
//     console.log(event.type);
// }
// element.addEventListener('click',checking());

// insert operation in js
// element.append(<div>hello</div> );
// element.prepend(<div></div>);
// element.before(<div></div>);
// element.after(<div></div>);


// *** SET TIMEOUT ,CLEAR TIMEOUT ,SET INTERVAL ,CLEAR INTERVAL

// let i = 1;
// let t = setInterval(()=>{
//     console.log(i); 
//     i++;
// },1000)
// // if(i>=6){            --->> will not work
// //     clearInterval(t);
// // }
// setTimeout(()=>{
//     clearInterval(t);
// },6000)


// OBJECT AND THIS IN JS

// let obj = {
//     myName : {
//         firstName : "kuldeep",
//         lastName : "tanwar"
//     },
//     age : 20,
//     // fnc : function(){
//     //     console.log("hello");
//     // }
//     // fnc : ()=>{
//     //     console.log("hello");
//     // }
//     fnc(){
//       console.log("hello");
//     }
// }
// obj.fnc();

// let obj2 = {
//     myName : {
//         firstName : "kuldeep",
//         lastName : "tanwar"
//     },
//     age : 20,
//     // fnc : function(){
//     //     console.log(this);
//     // }
//     fnc : ()=>{             //---->>> this will give context to window Object;
//         console.log(this);
//     }
//     // fnc(){ 
//     //   console.log(this);   //---->>> this will give context to Object;
//     // }
// }
// function f1(){
//     console.log(this);
// }
// f1();
// obj2.fnc();



// ARRAY DESTRUCTURING

// let arr = [1,2,3];
// // let id1 = arr[0];
// // let id2 = arr[1];
// // let id3 = arr[2];
// let [id1 ,id2 ,id3,id4 = 8] = arr;
// console.log(id2);

// OBJECT DESTRUCTURING

// let obj = {            
//     name : "kd",
//     age : 20,
//     roll : 172
// }
// let {name ,age ,roll} = obj;     // here variable name should be having same name as in key name in object;
// console.log(roll);


// spread operator in array -->> to copy one array into another array;

// let arr = [1,2,3,4,5,6];
// // now we have to make a new array which contains all the element of arr
// let arr1 = [...arr,7,8];
// console.log(arr1);

// spread operator in object

// let obj = {
//     name : "kd",
//     age : 20,
//     roll : 172
// }
// let object = {...obj,sex:"male"}
// console.log(object); 


// FINDING ELEMENT IN ARRAY --->> INCLUDES
// let arr = [1,2,3,4,5,6];
// let isPresent = arr.includes(7);
// console.log(isPresent);


// BIG INT        9007199254740991 is the maximum safe number after that we have to do calculations using n;
// let x = Number.MAX_SAFE_INTEGER;
// console.log(9007199254740991n+5n);
// console.log(typeof(9007199254740991n+5n)); 



// ADVANCE JAVASCRIPT

// HOISTING
// ->> HOSITING IN JAVASCRIPT IS A MECHANISM WHERE VARIABLES(var) AND FUNCTION DECLARATION (only declarations not value) ARE MOVED TO THE TOP OF THEIR SCOPE BEFORE THE CODE EXECUTE (only for *****var*****, not for let and const)

// console.log(add(2,3));
// function add (a,b){
//     return a+b;
// }

// console.log(d); //--->> will give undefined; **************
// var d = 8;

// d = 4;
// console.log(d);   // give 4;
// var d;
// d = 4;

// TEMPORAL DEATH ZONE:
// when the varibles are declared using the let and const keyboards and if they are called before initialization then they undergoes temporal death zone: ex:
// console.log(x); // ReferenceError: Cannot access 'x' before initialization
// let x = 10;



// scope chain and lexical scoping in js

// lexical scoping means the inner function can access to their parent function and VARIABLES but reverse is not true;--->> jis jis k varible use kar sakta hai

// let a = 4;
// function outerFunc(){
//     let b = 8;
//     console.log(a+b+c);
//     function innerFunc(){
//         let c = 7;
//         console.log(a+b+c);
//     }
//     second();
//     console.log(a+b+c);       // can't use c because it it made inside second;
// }
// first();



// WHAT IS CLOUSERS IN JS
//->> Clouser is a function along with its Lexical Environment

// function outerFunc(a){   -->> it is understood that innerFunc can use value of a and b because they are in its lexical environment
//     let b = 9;
//     function innerFunc(){
//         console.log(a+b);
//     }
//     innerFunc();  // when innerFunc is called it will take value from its lexical environment and get completed;
// }
// outerFunc(4);


// function outerFunc(a){   //-->> it is understood that innerFunc can use value of a and b because they are in its lexical environment
//     let b = 9;
//     function innerFunc(){
//         console.log(a+b);
//     }
//     return innerFunc;  // when innerFunc is returned it will return without using a and b; but a closure function will be formed inside it which contain a and b;
// }
// let func = outerFunc(4);
// func();                  // here func will call innerFunc which have to use a and b, now it will use a and b from clouser function;



// function currying
// function sum(a){
//     return function(b){
//         return function(c){
//             console.log(a,b,c);
//         }
//     }
// }
// const sum = (a)=>(b)=>(c)=>{console.log(a,b,c);}
// sum(4)(5)(6);


// object to JSON and vice-versa

// let obj = {
//     id : 3,
//     age : 20,
//     name : "kd"
// }
// let stringform = JSON.stringify(obj);  //-->>> Object to JSON(string);
// obj = JSON.parse(stringform);          //-->>> JSON formet to object formet



// CALLBACK FUNCTION
// ->> when a function is passed as argument in another funtion it is known as callback function
// or a callback is a function that is to be executed after another function has finished executing

// function f1(f2){
//     console.log("hello");
//     f2();
// }
// function f2(){
//     console.log("pk");
// }
// f1(f2);

// call back hell  (pyramid of doom) is using callback inside callback inside callback inside callback inside callback and continue;
// let fun = ()=>{   
//     setTimeout(()=>{console.log("hello");    call back function 1
//      setTimeout(()=>{                        call back function 2
//         console.log("hii");
//         setTimeout(()=>{                     call back function 3 and many more
//             console.log("reedev");
//         },2000)
//      },2000)
// },2000)
// }
// fun();
{
    //Callback hell, also known as the "pyramid of doom," is a situation that arises in asynchronous programming when you have multiple nested callbacks within each other.it makes the program (messy) and dificult to read and maintain.

    // (This also makes it more difficult to identify the flow of the application), which is the main obstacle to (debugging), which is the reason for the famous name of this problem: Callback Hell;

    // asyncOperation1(function(result1) {
    //     asyncOperation2(result1, function(result2) {
    //         asyncOperation3(result2, function(result3) {
    //             // Do something with result3
    //         });
    //     });
    // });

    // can resolve through promise
    // asyncOperation1()
    // .then(result1 => asyncOperation2(result1))
    // .then(result2 => asyncOperation3(result2))
    // .then(result3 => {
    //     // Do something with result3
    // })
    // .catch(error => {
    //     // Handle errors
    // });
}



// PROMISE 
// -->> promise are use to handle asynchronus operation in js. they are easy to handle with multiple asynchronus operation where callback can create callback hell leading to unmanagable code;
 
// async await , error Handling do from notebook


// callback vs higher order function

// function fun2(){
//     console.log("pk");
// }
// let fun = (fun2)=>{
//     console.log("hello");
//     fun2();
// }
// fun(fun2);


//  both callbacks and promises are used for handling asynchronous operations in JavaScript, promises offer a more structured and flexible approach with better error handling and chaining capabilities. As a result, promises are generally preferred over callbacks in modern JavaScript development

// nested callback functions (known as "callback hell") when multiple asynchronous operations are involved.



// Callbacks and promises are both techniques used in JavaScript for handling asynchronous operations, but they have different approaches and syntax.

// Callbacks:
// Callbacks are functions passed as arguments to another function, to be executed later when the asynchronous operation completes.
// They have been traditionally used for handling asynchronous code in JavaScript, but they can lead to "callback hell" or "pyramid of doom" when dealing with multiple asynchronous operations.
// Example:
// javascript
// Copy code
// function fetchData(callback) {
//     setTimeout(() => {
//         callback('Data retrieved');
//     }, 1000);
// }

// function processData(data, callback) {
//     setTimeout(() => {
//         callback('Data processed: ' + data);
//     }, 1000);
// }

// fetchData((result) => {
//     console.log(result);
//     processData(result, (processedResult) => {
//         console.log(processedResult);
//     });
// });
// Promises:
// Promises provide a more structured way to deal with asynchronous code and solve the problem of callback hell.
// A promise is an object representing the eventual completion or failure of an asynchronous operation, and it allows chaining of multiple asynchronous operations.
// Example:
// javascript
// Copy code
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Data retrieved');
//         }, 1000);
//     });
// }

// function processData(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Data processed: ' + data);
//         }, 1000);
//     });
// }

// fetchData()
//     .then((result) => {
//         console.log(result);
//         return processData(result);
//     })
//     .then((processedResult) => {
//         console.log(processedResult);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// In the example above, fetchData and processData return promises. By chaining .then() methods, you can handle the result of each asynchronous operation sequentially. The .catch() method is used to handle errors in any of the promise chains.

// Promises provide a cleaner and more maintainable way to handle asynchronous code compared to callbacks. They also make it easier to handle errors and perform operations sequentially.

// ASYNC AWAIT : 

// async
// Purpose: Declares an asynchronous function. This function always returns a Promise, regardless of what you return from it.
// Usage: Precede a function declaration, expression, or method with the async keyword.
// await
// Purpose: Pauses the execution of an async function until the Promise is resolved or rejected. It can only be used inside async functions.
// Usage: Precede any Promise with the await keyword to wait for its resolution.



// {An asynchronous function, declared with the async keyword, always returns a Promise}


// async function fetchData1() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Data 1 fetched");
//       }, 1000);
//     });
//   }
  
//   async function fetchData2() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Data 2 fetched");
//       }, 2000);
//     });
//   }
  
//   async function getAllData() {
//     console.log("Fetching data...");
//     const data1 = await fetchData1(); // Waits for fetchData1 to resolve
//     console.log(data1); // Logs "Data 1 fetched"
  
//     const data2 = await fetchData2(); // Waits for fetchData2 to resolve
//     console.log(data2); // Logs "Data 2 fetched"
//   }
  
//   getAllData();
  