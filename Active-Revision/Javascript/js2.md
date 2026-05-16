Relationship Between JavaScript and Node.js
What
JavaScript is a programming language used to build dynamic applications.
Originally, JavaScript was designed to run inside web browsers (like Chrome, Firefox, Safari).

Node.js is a runtime environment that allows JavaScript to run outside the browser, mainly on servers.

Why
Node.js enables developers to use JavaScript for both frontend and backend, allowing full-stack development with a single language.

How
Node.js uses the Google V8 JavaScript engine to execute JavaScript code and provides additional APIs (like file system, HTTP, and OS access) that are not available in browsers.



LET, VAR & CONST :
Defination: All three—var, let, and const—declare variables.
Declartion: var can be re-decalared while not let and const.
Assigning: var and let can be re-assigned while not const.
Scope: Var is function-scoped. Let and const are block-scoped (limited to the block, loop, or if statement they’re in).
Hoisting: Var is hoisted (moved to the top and initialized as undefined). Let and const are also hoisted, but they remain in a "temporal dead zone" until the line where they are declared.

Declaration means declaing the variable, while assigning assigns it a value for the first time.


HOISTING :
WHAT : Hoisting in JavaScript is the behavior where variable and function declarations are moved to the top of their containing scope during compilation. This means you can reference a declared variable or function earlier in your code than where you actually wrote it. However, only the declaration is hoisted—initialization or assignment stays in place.

let and const are also hoisted, but unlike var or function declarations, they aren’t initialized. They remain in a "temporal dead zone" from the start of the block until the declaration line is executed. So, you can’t access them before that point without causing a reference error.

WHY : Provide Flexibility to the developer.


SCOPE :
few types of scope: Global scope (accessible everywhere), function scope (variables limited to a function), block scope (with let and const, limited to a block like if or loops), and module scope (variables confined to a module).

SLICE V/S SPLICE :
Use slice() when you want a subarray of array without altering the original array.
Use splice() when you need to add, remove, or replace elements and want to change the original array.


NORMAL FUNCTION V/S ARROW FUNCTION :
Normal (function keyword):
Has its own this (depends on how it's called).
Can be hoisted (you can call before defining).
Has arguments object.
Good for methods, constructors, object literals.

Arrow function (=>):
No own this – inherits from outer scope (lexical).
Not hoisted – must define before use.
No arguments object.
Shorter syntax, perfect for callbacks, one-liners.


What is a first class function
In JavaScript, first-class functions(first-class citizens) mean that functions are treated like any other variable. That means:
You can assign a function to a variable.
You can pass a function as an argument to another function.
You can return a function from another function.

What is a first order function
A first-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value. i.e, It's a regular function that works with primitive or non-function values.
firstOrderFunc is also called a callback function because it is passed to and executed by another function.

What is a higher order function
A higher order function is a function that takes another function as an argument or returns a function,
used to make code reusable, modular, and cleaner.


CURRYING :
WHAT : Currying is transforming a function that takes multiple arguments into a chain of functions that each take one argument.
WHY : Improves function reusability, Enables partial application (fix some arguments early)
const add = a => b => c => a + b + c;
add(1)(2)(3); // 6


PURE FUNCTION V/S IMPURE FUNCTION
Pure Function :
A pure function is a function that:
Always returns the same output for the same input
Does not modify anything outside the function (no side effects)
WHY : Predictable, Debugging is easier
HOW : function add(a, b) {
  return a + b;
}

Impure Function :
An impure function is a function that:
May return different outputs for the same input
Modifies external state or depends on external variables
HOW :  let total = 0;
function addToTotal(num) {
  total += num;
  return total;
}


CLOUSERS :
A clouser is a function along with it's lexical environment
A closure is a function that remembers and can access variables from its lexical scope even after the outer function has finished executing.

function Welcome(name) {
  var greetingInfo = function (message) {
    console.log(message + " " + name);
  };
  return greetingInfo;
}
var myFunction = Welcome("John");
myFunction("Welcome "); //Output: Welcome John
myFunction("Hello Mr."); //output: Hello Mr. John


ASYNCHRONOUS OPERATIONS :

1. Callbacks :
WHAT :
A callback is a function that is passed as an argument to another function and is executed later, usually after a task completes.
In JavaScript, callbacks are mainly used for asynchronous operations like API calls, file reading, or timers.

function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 1000);
}

function processData() {
  console.log("Processing data");
}

fetchData(processData);

WHY :
Callbacks are used because JavaScript is single-threaded.
Without callbacks, long operations (API calls, DB queries) would block the main thread.
Callbacks allow JavaScript to:
Start a task
Continue executing other code
Run the callback when the task finishes
This enables non-blocking asynchronous programming.


CALLBACK HELL :
Callback Hell occurs when multiple nested callbacks make code difficult to read, understand, maintain and debug.

getUser(function(user) {
  getOrders(user.id, function(orders) {
    getOrderDetails(orders[0], function(details) {
      processDetails(details, function(result) {
        console.log(result);
      });
    });
  });
});

How (How it is solved)

Modern JavaScript solves callback hell using:
Promises
Async / Await


WHY NEED CALLBACK :
setTimeout(() => {
  console.log("Hello");
}, 2000);

console.log("World");


1. Event Loop in JavaScript
The Event Loop is a mechanism in JavaScript that manages asynchronous operations and decides when callbacks should be executed.
The Event Loop checks if the call stack is empty and moves callbacks from the queue to execute them.

JavaScript runtime has these components:
1️⃣ Call Stack
2️⃣ Web APIs / Node APIs
3️⃣ Callback Queue
4️⃣ Event Loop

Flow:
Code goes into Call Stack
Async tasks go to Web APIs
When completed → callback moves to Callback Queue
Event Loop checks if stack is empty
If empty → callback pushed to stack



**JavaScript Asynchronous Operations**
JavaScript is single-threaded, meaning it executes one operation at a time. However, modern applications require handling timers, API calls, file reads, and user events without blocking the program.

To achieve this, JavaScript uses asynchronous programming supported by the JavaScript runtime environment and the Event Loop.

JavaScript Runtime Components ==>>>
A JavaScript runtime (like Chrome's V8 or Node.js) provides several components that enable asynchronous execution.

The key components are:
Call Stack
Web APIs / Node APIs (Environment APIs)
Callback Queue  (Task queue (Micro Task queue (Promises, Async/Await), Macro Task Queue (callbacks)))
Event Loop


1. Call Stack
What
The Call Stack is a data structure that keeps track of function execution order.
It follows LIFO (Last In First Out).

Whenever a function is invoked:
It is pushed onto the stack
When execution finishes, it is popped from the stack

Why
It helps JavaScript manage execution context and determine which function should run next.
Since JavaScript is single-threaded, only one function executes at a time from the call stack.

How
Example
function greet() {
  console.log("Hello");
}

function start() {
  greet();
}

start();
Execution

Step 1
start() pushed to stack

Step 2
greet() pushed to stack

Step 3
console.log() executes

Output
Hello

Stack order:
Call Stack
greet()
start()

After execution, both functions are removed from the stack.

2. Web APIs / Node APIs (environment APIs)
What
Web APIs (Browser) and Node APIs (Node.js) handle asynchronous operations outside the JavaScript engine.

Browser APIs :
timer
fetch

Node APIs :
timers
database operations

Why :
The JavaScript engine cannot pause execution for long operations like network requests or timers.
Instead, these tasks are delegated to the runtime environment.
This prevents the main thread from blocking.

How
Example
console.log("Start");

setTimeout(() => {
  console.log("Timer finished");
}, 2000);

console.log("End");

Execution:
console.log("Start") runs
setTimeout moves to Web API
console.log("End") runs
After 2 seconds → callback moves to Callback Queue

Output:
Start
End
Timer finished


3. Callback Queue (Macrotask Queue)
What
The Callback Queue stores callbacks from asynchronous operations waiting to be executed.

Examples:
setTimeout
setInterval
DOM events
I/O operations

These tasks are also called Macrotasks.

Why
Async operations finish at different times.
The callback queue ensures they are executed in order (FIFO) when the call stack becomes empty.

How
Example
console.log("A");
setTimeout(() => {
  console.log("B");
}, 0);
console.log("C");

Execution:
A executes
setTimeout goes to Web API
C executes
Callback enters queue
Event loop pushes callback to stack


4. Event Loop
What
The Event Loop continuously checks whether the Call Stack is empty.
If empty, it takes tasks from the queues and pushes them to the stack.

Why
Without the event loop, asynchronous callbacks would never execute.
The event loop ensures continuous program execution.

How
Event Loop Algorithm:
1. Execute synchronous code
2. Check microtask queue
3. Execute microtasks
4. Check callback queue
5. Execute one callback
6. Repeat



Asynchornous task in JS :
JavaScript sends the async task to the environment APIs.
These APIs execute the operation outside the JS engine.
When the operation finishes, the callback is placed in a Task Queue.
The Event Loop moves it to the Call Stack when the stack becomes empty.



Promises
What

A Promise is an object that represents the eventual completion (success) or failure of an asynchronous operation.

It provides a structured way to handle asynchronous code.

Promise States

A Promise can be in one of three states:

Pending – Initial state, the operation has not completed yet.
Fulfilled – The operation completed successfully.
Rejected – The operation failed.

State Flow
Pending → Fulfilled
Pending → Rejected

Once a promise is fulfilled or rejected, its state becomes final (settled) and cannot change.

Why
Promises were introduced to solve problems associated with callbacks, such as:

Callback hell caused by deeply nested callbacks

Difficult error handling

Poor readability and maintainability

Promises provide a clean and structured approach for handling asynchronous operations.

How
A Promise is created using the Promise constructor, which takes a function with two parameters:

resolve – called when the operation succeeds

reject – called when the operation fails

Example
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched");
  }, 2000);
});

promise.then((data) => {
  console.log(data);
});
Output
Data fetched
Promise Chaining

Promises allow multiple asynchronous operations to be executed sequentially using chaining.

Example
fetchUser()
  .then(user => fetchPosts(user.id))
  .then(posts => fetchComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(err => console.error(err));
Benefits of Promises

Cleaner and more readable code

Avoids callback hell

Supports chaining of asynchronous operations

Centralized error handling using .catch()

Improves maintainability of asynchronous logic


**Promise Combinators in JavaScript**
Promise combinators are built-in methods that allow multiple asynchronous operations to be handled together. They take an iterable of promises and return a new promise based on a specific resolution strategy.

The main combinators are:

Promise.all

Promise.race

Promise.any

Promise.allSettled

These methods are commonly used when executing parallel asynchronous tasks such as API requests or database queries.

Promise.all

What
Returns a promise that resolves when all promises resolve.

Behavior

If all promises succeed → resolves with an array of results.

If any promise fails → rejects immediately.

Use Case
Used when all operations must succeed before continuing.

Promise.race

What
Returns a promise that settles as soon as the first promise settles (either resolve or reject).

Behavior

The fastest promise determines the result.

Use Case
Used for timeouts or competing asynchronous tasks.

Promise.any

What
Returns a promise that resolves when the first promise fulfills.

Behavior

Ignores rejected promises.

Rejects only if all promises fail, returning an AggregateError.

Use Case
Used when any successful result is acceptable.

Promise.allSettled

What
Returns a promise that resolves when all promises settle, regardless of success or failure.

Behavior

Provides an array describing the result of each promise.

Use Case
Used when all results are required, even if some operations fail.

| Method             | Resolves When          | Rejects When          |
| ------------------ | ---------------------- | --------------------- |
| Promise.all        | All promises succeed   | Any promise fails     |
| Promise.race       | First promise settles  | First promise rejects |
| Promise.any        | First promise succeeds | All promises fail     |
| Promise.allSettled | All promises settle    | Never rejects         |

Promise States in JavaScript

A Promise represents the eventual result of an asynchronous operation.
A promise goes through three states during its lifecycle.

Pending

What
The initial state of a promise when the asynchronous operation has not completed yet.

Behavior

The promise is waiting for the operation to finish.

No result or error is available yet.

Example Situation

Waiting for an API response

Waiting for a file to be read

Fulfilled

What
The state when the promise successfully completes.

Behavior

The promise produces a resolved value.

The .then() handler executes.

Meaning
The asynchronous task finished successfully and returned a result.

Rejected

What
The state when the promise fails.

Behavior

The promise produces an error or rejection reason.

The .catch() handler executes.

Meaning
The asynchronous task encountered an error.

Promise Methods
resolve

What
resolve is a function used to successfully complete a promise.

Behavior

Moves the promise state from Pending → Fulfilled.

Passes the resulting value to .then().

Purpose
Indicates that the asynchronous operation succeeded.

reject

What
reject is a function used to fail a promise.

Behavior

Moves the promise state from Pending → Rejected.

Passes the error to .catch().

Purpose
Indicates that the asynchronous operation failed.



**Async / Await**
What

async/await is internally use Promises that makes asynchronous code look synchronous.

Why

It improves:

readability

maintainability

error handling

How

Example:

async function fetchData() {
  const data = await Promise.resolve("Hello");
  console.log(data);
}

fetchData();

Output:

Hello
Async Await Execution Flow

Example:

console.log("Start");

async function test() {
  console.log("Inside");

  await Promise.resolve();

  console.log("After Await");
}

test();

console.log("End");

Output:

Start
Inside
End
After Await

Reason:

await pauses execution and schedules remaining code as a microtask.




**Execution Order in JavaScript**
Components
Call Stack → Executes synchronous code.
Web APIs / Node APIs → Handle asynchronous operations (timers, I/O, etc.).
Task Queues
Microtask Queue → Promises, async/await
Macrotask Queue (Callback Queue) → setTimeout, setInterval, I/O callbacks
Event Loop → Moves tasks from queues to the Call Stack when it becomes empty.

**4 task cames 1 promise, 2 callback , 3 async await, 4 console.log how they are being exceuted**
All code first enters the Call Stack. Synchronous code executes immediately, while asynchronous tasks are delegated to Environment APIs, then placed in Microtask Queue (Promises, async/await) or Macrotask Queue (callbacks), which the Event Loop processes when the Call Stack becomes empty.


Where Each Task Goes Initially

Components involved:

Call Stack

Web APIs / Node APIs

Microtask Queue

Macrotask Queue (Callback Queue)

Event Loop

Example tasks:

Promise

Callback (setTimeout)

Async/Await

console.log

Step 1 — Code Enters the Call Stack

When the program starts, all code is first executed by the Call Stack.

So initially:

console.log
setTimeout
Promise
async function

All of them enter the Call Stack first.

Step 2 — Synchronous Code Executes Immediately

console.log is synchronous.

So it executes immediately in the Call Stack.

Output → console.log
Step 3 — Async Tasks Move to Environment APIs

When JavaScript encounters async operations:

Callback (setTimeout)

Sent to Web APIs / Node APIs

After timer finishes → moved to Macrotask Queue

Call Stack → Web APIs → Macrotask Queue
Promise

When resolved, its .then() callback goes to the Microtask Queue.

Call Stack → Microtask Queue
Async/Await

async/await internally uses Promises, so its continuation also goes to the Microtask Queue.

Call Stack → Microtask Queue
Step 4 — Event Loop Handles Queues

The Event Loop waits until the Call Stack is empty.

Then it processes queues in priority order:

1️⃣ Microtask Queue (Promises, async/await)
2️⃣ Macrotask Queue (callbacks like setTimeout)

Complete Flow
1. console.log → Call Stack → Executes immediately

2. Promise → Microtask Queue

3. async/await → Microtask Queue

4. setTimeout → Web APIs → Macrotask Queue

Then execution order becomes:

Call Stack empty
      ↓
Microtask Queue executes
      ↓
Macrotask Queue executes


**Difference between Async/Await and Promises**

| Feature        | Promises            | Async/Await                 |
| -------------- | ------------------- | --------------------------- |
| Syntax         | `.then()` chaining  | `async` + `await`           |
| Readability    | Can become chained  | Looks like synchronous code |
| Error Handling | `.catch()`          | `try...catch`               |
| Code Structure | Functional chaining | Sequential style            |
| Under the Hood | Native mechanism    | Built on top of Promises    |

Promises handle asynchronous operations using .then() and .catch(), while async/await provides a cleaner syntax on top of Promises to write asynchronous code in a synchronous style.


preventDefault() → prevents the browser’s default behavior
stopPropagation() → prevents the event from propagating in the DOM


Different scopes :
| Scope Type     | Accessibility                                     |
| -------------- | ------------------------------------------------- |
| Global Scope   | Accessible everywhere                             |
| Function Scope | Accessible within the function                    |
| Block Scope    | Accessible within a block `{}`                    |
| Module Scope   | Accessible only within the module unless exported |

Module Scope in JavaScript — Example
File: math.js
const secretNumber = 42;   // module scoped (private)

export function add(a, b) {
  return a + b;
}
File: app.js
import { add } from "./math.js";

console.log(add(2, 3)); // 5
console.log(secretNumber); // ❌ Error



Removing event listeners is important to:

Prevent memory leaks (A memory leak occurs when memory that is no longer needed by the application cannot be released by the garbage collector.)
Maintain better application performance

Avoid unexpected event execution

Ensure clean resource management



CLONING IN JS:

| Feature             | Normal Clone     | structuredClone  |
| ------------------- | ---------------- | ---------------- |
| Copy Type           | Shallow copy     | Deep copy        |
| Nested Objects      | Shared reference | Independent copy |
| Circular References | Not supported    | Supported        |

const original = {
  name: "Kuldeep",
  address: { city: "Delhi" }
};

const copy = { ...original };

copy.address.city = "Mumbai";

console.log(original.address.city);

const original = {
  name: "Kuldeep",
  address: { city: "Delhi" }
};

const copy = structuredClone(original);

copy.address.city = "Mumbai";

console.log(original.address.city);




✅ Truthy values → true
!!"abc"        // true
!!"SENTRY_DSN" // true
!!123          // true
!!{}           // true
❌ Falsy values → false
!!""        // false
!!null      // false
!!undefined // false
!!0         // false
!!false     // false

prototype, inheritance
this, call, apply, bind