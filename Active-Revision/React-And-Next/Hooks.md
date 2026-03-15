Hooks in React
What

Hooks are special functions that allow functional components to use state, lifecycle features, and other React capabilities without writing class components.

Why Hooks are Used
Manage state in functional components
Handle side effects (API calls, subscriptions)
Reuse logic across components
Simplify component code

Rules of Hooks :
Hooks must be called at the top level of a component.
Hooks must be used only inside React functional components or custom hooks.

Commonly Used Hooks
1️⃣ useState
Used to add state to functional components.
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

2️⃣ useEffect
Used to handle side effects like API calls, subscriptions, and timers.
import { useEffect } from "react";
useEffect(() => {
  console.log("Component mounted");
}, []);

3️⃣ useContext
Used to access data from Context without prop drilling.
const user = useContext(UserContext);

4️⃣ useRef
Used to store mutable values or access DOM elements.
const inputRef = useRef(null);

5️⃣ useMemo
useMemo is used to memoize expensive calculations so they are not recalculated on every render.
const value = useMemo(() => expensiveFunction(data), [data]);

6️⃣ useCallback
Used to memoize functions to prevent unnecessary re-renders.
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);

7️⃣ useReducer
Used for complex state logic similar to Redux reducer pattern.
const [state, dispatch] = useReducer(reducer, initialState);

Custom Hooks
isMobile (based on screen width)

Summary
Hooks allow React functional components to manage state, handle lifecycle behavior, reuse logic, and interact with the DOM without using class components.

# useState vs useReducer in React
| Feature         | `useState`                                    | `useReducer`                                             |
| --------------- | --------------------------------------------- | -------------------------------------------------------- |
| Purpose         | Manage **simple state**                       | Manage **complex state logic**                           |
| State Updates   | Directly update state using setter            | Update state using **dispatch and reducer function**     |
| Best Use Case   | Small components with **few state variables** | Large components with **multiple related state updates** |
| Logic Handling  | Logic written inside component                | Logic centralized in **reducer function**                |
| Similar Concept | Basic state management                        | Similar to **Redux pattern**                             |

useState is used for simple state management, while
useReducer is used for complex state logic with multiple state transitions.

# useState=>
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>Increment</button>

# useReducer=>
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });
<button onClick={() => dispatch({ type: "increment" })}>
  Increment
</button>