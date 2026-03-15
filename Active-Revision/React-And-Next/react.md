React is a javascript library for creating single page web applications.

2. Why React is Used?

1. Component-Based Architecture
UI is broken into small reusable components.
Example:
App
 ├── Navbar
 ├── Sidebar
 ├── UserCard
 └── Footer

This improves:
Reusability
Maintainability
Scalability


2. Virtual DOM (Performance Optimization)
React uses a Virtual DOM instead of updating the real DOM directly.
State Change
     ↓
Virtual DOM Update
     ↓
Diff Algorithm
     ↓
Update only changed elements in Real DOM


3. Declarative UI
Instead of manually manipulating DOM:
document.getElementById("title").innerText = "Hello";

React lets you describe what the UI should look like.
<h1>Hello</h1>

4. JSX (JavaScript XML): A syntax extension that allows writing HTML-like code in JavaScript. JSX makes the code more readable and expressive while providing the full power of JavaScript.

5. Unidirectional Data Flow: React follows a one-way data binding model where data flows from parent to child components. This makes the code more predictable and easier to debug.


6. Key Concepts in React
| Concept     | Meaning                             |
| ----------- | ----------------------------------- |
| Components  | Reusable UI blocks                  |
| JSX         | HTML inside JavaScript              |
| Props       | Data passed to components           |
| State       | Component's internal data           |
| Hooks       | Functions to manage state/lifecycle |
| Virtual DOM | Efficient DOM update mechanism      |


# Advanced Features:

React Hooks: Introduced in React 16.8, hooks allow using state and other React features in functional components without writing classes.

Context API: Provides a way to share values between components without explicitly passing props through every level of the component tree.

Error Boundaries: Components that catch JavaScript errors anywhere in their child component tree and display fallback UI instead of crashing.

Server-Side Rendering (SSR): Enables rendering React components on the server before sending HTML to the client, improving performance and SEO.

Concurrent Mode: A set of new features (in development) that help React apps stay responsive and gracefully adjust to the user's device capabilities and network speed.

React Server Components: A new feature that allows components to be rendered entirely on the server, reducing bundle size and improving performance.

Suspense: A feature that lets your components "wait" for something before rendering, supporting code-splitting and data fetching with cleaner code.


# What are Pure Components?
A Pure Component is a React component that avoids unnecessary re-renders by shallowly comparing props.(wrapped with React.memo() )

It improves performance by preventing unnecessary re-renders of components.

HOW : In functional components, purity is achieved using React.memo(), which performs a shallow comparison of props.
const User = React.memo(function User({ name }) {
  return <h1>{name}</h1>;
});
If name does not change, the component will not re-render.

In React, React.memo() is a Higher-Order Component (HOC) that optimizes functional components by preventing unnecessary re-renders.
What it does:
It wraps a functional component.
Performs a shallow comparison of props.
Re-renders the component only when props change.


# Props
In React, props (short for properties) are inputs passed from a parent component to a child component. They allow components to receive data and render dynamic content.
Props are read-only and cannot be modified inside the component.

Props are used to:
Pass data from parent to child components
Make components reusable
Create dynamic UI

Example: A UserCard component can display different users by passing different props.
1. Passing Props (Parent Component)
<User name="Kuldeep" age={25} />

2. Receiving Props (Child Component)
function User(props) {
  return <h1>{props.name} - {props.age}</h1>;
}

# State v/s Props
| Feature    | State                              | Props                                        |
| ---------- | ---------------------------------- | -------------------------------------------- |
| Managed by | The component itself               | Parent component                             |
| Mutable    | Yes                                | No (read-only)                               |
| Scope      | Local to the component             | Passed from parent to child                  |
| Usage      | Manage dynamic data and UI changes | Configure and customize component            |
| Update     | Using `setState()` / `useState()`  | Cannot be updated by the receiving component |


# Virtual DOM in React
In React, the Virtual DOM (VDOM) is a lightweight in-memory representation of the Real DOM.

When state or props changes then instead of directly updating the browser DOM, React first updates the Virtual DOM, then compares the new Virtual DOM with the previous Virtual DOM using diffing algorithm, and then updates only the necessary parts of the Real DOM.

How Virtual DOM Works (Step-by-Step)
1. Initial Render
When a component renders for the first time, it returns JSX.
React converts this JSX into a Virtual DOM tree.
Then React uses this Virtual DOM to create the Real DOM in the browser.
JSX → Virtual DOM → Real DOM

2. State or Props Change
When a component’s state or props change, React creates a new Virtual DOM representing the updated UI.

3. Reconciliation
Reconciliation is the process React uses to determine what has changed between:

Old Virtual DOM
vs
New Virtual DOM

It includes:
Diffing Algorithm (comparing trees)
Old Virtual DOM
        vs
New Virtual DOM

Calculating minimal updates

So reconciliation is the decision-making step.

4. Efficient DOM Updates
This step is when React actually updates the Real DOM using the changes found during reconciliation.
So this is the execution step.

Before Update
<div>Hello</div>
After Update
<div>Hello Kuldeep</div>

Component Render
      ↓
Create Virtual DOM
      ↓
State/Props Change
      ↓
Create New Virtual DOM
      ↓
Reconciliation (Diffing Algorithm) -> Finding the needed updates
      ↓
Update Real DOM


| Feature       | Shadow DOM                       | Virtual DOM                      |
| ------------- | -------------------------------- | -------------------------------- |
| Purpose       | Encapsulation for Web Components | Efficient UI rendering           |
| Managed by    | Browser                          | JavaScript libraries (React)     |
| DOM Type      | Part of the real DOM             | In-memory representation         |
| Encapsulation | Yes                              | No                               |
| Use Case      | Web Components, scoped styling   | UI diffing and optimized updates |



# REACT FIBER
JSX → Virtual DOM → Fiber → Reconciliation → Commit → Real DOM


# Before Fiber :

Component Render
      ↓
Create Virtual DOM
      ↓
State/Props Change
      ↓
Component Re-render
      ↓
Create New Virtual DOM
      ↓
Stack Reconciler
      ↓
Reconciliation Process
   ├─ Diffing Algorithm
   └─ Determine minimal changes
      ↓
Update Real DOM

Key Characteristics
Stack Reconciler
Synchronous rendering
Cannot pause work
Large updates could block the main thread


# After React Fiber : After React introduced React Fiber, reconciliation became interruptible and prioritized.
Component Render
      ↓
Create Virtual DOM (Fiber Tree)
      ↓
State/Props Change
      ↓
Component Re-render
      ↓
Create New Virtual DOM (New Fiber Tree)
      ↓
Fiber Reconciler
      ↓
Render Phase (Interruptible)
   ├─ Diffing Algorithm
   ├─ Calculate minimal changes
   └─ Build Effect List
      ↓
Commit Phase (Synchronous)
   ├─ Apply changes to Real DOM
   ├─ Run lifecycle methods / hooks
   └─ Update DOM

# The Most Important Difference
Before Fiber
Reconciliation → DOM Update
(all synchronous)

After Fiber
Render Phase (prepare work)
        ↓
Commit Phase (apply DOM updates)

User typing → High priority
Background data update → Low priority

# Comparison :
| Before Fiber           | After Fiber                  |
| ---------------------- | ---------------------------- |
| Stack Reconciler       | Fiber Reconciler             |
| Synchronous            | Interruptible (Pause Re-rendering)              |
| No prioritization      | Priority scheduling (Priotize re-rendering)         |
| One big task           | Work split into small units  |
| No concurrent features | Enables Concurrent Rendering |


Before React Fiber, React used the Stack Reconciler, where after reconciliation the DOM updates were performed synchronously in a single continuous process.
After Fiber, React split the update process into two phases: the Render Phase and the Commit Phase.
In the Render Phase, React determines what needs to be updated by comparing the old and new Fiber trees, breaks work into small units, and can pause, resume, or prioritize tasks.
In the Commit Phase, React synchronously applies the calculated changes to the Real DOM and runs lifecycle methods and effects.


# Why Fiber (Concurrent Rendering) was needed

Before Fiber everything was blocking.

Example:

Large component tree update
        ↓
React blocks main thread
        ↓
User typing / scrolling becomes laggy

With concurrent rendering React can do:

Start rendering update
       ↓
User interaction happens
       ↓
Pause rendering
       ↓
Handle user interaction
       ↓
Resume rendering

So the UI stays responsive.



# Controlled Components in React
In React, a Controlled Component is a form element whose value is controlled by React state rather than the DOM.
User Input
     ↓
onChange Event
     ↓
Update React State
     ↓
UI Re-render

import { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
}
export default LoginForm;

# Uncontrolled Components in React
In React, an Uncontrolled Component is a form element where the form data is handled by the DOM itself, not by React state.

import { useRef } from "react";

function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" ref={emailRef} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" ref={passwordRef} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
export default LoginForm;



# ELEMENT V/S COMPONENT
Elements are the smallest building blocks in React—objects that describe what you want to see.
Components are functions or classes that return elements and encapsulate logic, structure, and behavior for parts of your UI.

CHILDREN PROPS :
In React, children is a special prop used to pass content inside a component’s opening and closing tags.

Example:
function Box({ children }) {
  return <div>{children}</div>;
}
<Box>Hello</Box>


# FRAGMENTS :
A Fragment in React is a feature that lets you group multiple elements without adding an extra DOM node.

Example:
import { Fragment } from "react";

function Example() {
  return (
    <Fragment>
      <h1>Hello</h1>
      <p>Welcome</p>
    </Fragment>
  );
}

You can also use the short syntax:
function Example() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome</p>
    </>
  );
}

Why fragments are better than container divs?
Below are the list of reasons to prefer fragments over container DOM elements,

Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.
Some CSS mechanisms like Flexbox and CSS Grid have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.
The DOM Inspector is less cluttered.


# Stateless Components
Components that do not manage their own state; they only receive data via props and render UI.

Stateful Components
Components that manage and update their own state using state mechanisms (like useState) in React.


# dangerouslySetInnerHTML in React
dangerouslySetInnerHTML is a React prop used to insert raw HTML into a component, similar to innerHTML in JavaScript.

Example:
function Example() {
  const html = "<h2>Hello World</h2>";
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
React will render the HTML inside the div.

Why
React normally escapes HTML to prevent security attacks (XSS).
dangerouslySetInnerHTML allows you to bypass that protection when you intentionally want to render raw HTML.

XSS is an attack where malicious scripts are injected into web pages and executed in users’ browsers.
<script>alert("Hacked")</script>


# How do you memoize a component?
const MemoComponent = React.memo(function MemoComponent(props) {
  /* render using props */
});
OR;
export default React.memo(MyFunctionComponent);

# Why should component names start with capital letter?
Component names must start with a capital letter so React can distinguish them from HTML elements.

# What is Lifting State Up in React?
When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.

# React Router Page Change Without Reload
In React apps, the browser loads only one HTML file (index.html) once.
After that, React changes components on the page instead of loading new HTML pages.

What happens internally
Intercepts the click
When you click:
<Link to="/about">About</Link>
React Router prevents the browser’s default navigation (which normally reloads the page).
Updates the URL
It changes the URL using the History API.
Internally something like
history.pushState({}, "", "/about");
The URL becomes /about without refreshing the page.

Matches the route
React Router checks your route configuration:
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
It sees that /about matches <Route path="/about" />.

Re-renders the component
React re-renders only the matching component:
<About />
The UI updates instantly.


# Redux
Redux is a centralized state management library used to manage global application state in a single store. It is commonly used with React for managing shared data across components.

Why
Avoid prop drilling
Centralized state management
Predictable state updates
Easier debugging and scalability

Core Concepts
1. Store
Central place where the entire application state is stored.
2. Actions
Plain JavaScript objects that describe what happened.
{ type: "increment" }
3. Reducers
Functions that update state based on actions.
(state, action) => newState
4. Dispatch
Method used to send actions to the store.

It provides hooks:
useSelector
useDispatch

Redux Data Flow
Component → dispatch(action) → reducer → store updates → UI re-renders
Redux follows unidirectional data flow.

# Redux Toolkit (Modern Redux)
Redux Toolkit simplifies Redux by reducing boilerplate and providing built-in utilities.
Key Utilities

configureStore
createSlice
createAsyncThunk

Slice Example
import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
Store Configuration
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

Summary
Redux manages global state in a centralized store, while Redux Toolkit simplifies Redux development by creating slices, reducers, and store configuration with minimal code.



# Redux v/s Context API
Redux is a full state management library for complex global state, while useContext is a React feature for passing data through components without prop drilling.
| Feature         | Redux                                               | React Context API                                   |
| --------------- | --------------------------------------------------- | --------------------------------------------------- |
| Purpose         | Global state management for large apps              | Share data between components without prop drilling |
| Complexity      | More setup (actions, reducers, store)               | Simple and built into React                         |
| Boilerplate     | Higher (unless using Redux Toolkit)                 | Very minimal                                        |
| Performance     | Better for large applications with frequent updates | Can cause unnecessary re-renders in large apps      |
| DevTools        | Powerful debugging with Redux DevTools              | Limited debugging tools                             |
| State Structure | Centralized store                                   | State usually managed locally in providers          |
| Async Handling  | Strong support (middleware, thunks)                 | No built-in async management                        |
| Best Use Case   | Large applications with complex state               | Small to medium apps or theme/auth sharing          |



# What is suspense component?
Suspense is a React component used to show a fallback UI (like a loading spinner) while waiting for a component or data to load.
import React, { Suspense, lazy } from "react";
const About = lazy(() => import("./About"));
function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <About />
    </Suspense>
  );
}


# DOM (Document Object Model)
The Document Object Model (DOM) is a programming interface that represents an HTML page as a tree of objects, allowing JavaScript to read and modify the page structure, content, and styles.


# Functional component Lifecycle Mapping
| Class Lifecycle                     | Functional Equivalent                           |
| ----------------------------------- | ----------------------------------------------- |
| `componentDidMount` (Mounting)      | `useEffect(() => { ... }, [])`                  |
| `componentDidUpdate` (Updating)     | `useEffect(() => { ... }, [deps])`              |
| `componentWillUnmount` (Unmounting) | `useEffect(() => { return () => { ... } }, [])` |
One useEffect can actually handle multiple lifecycle phases depending on the dependency array.