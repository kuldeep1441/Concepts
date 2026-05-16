# Eslint Plugin
The ESLint plugin checks code for errors, enforces coding standards, and prevents bugs by analyzing code according to defined rules.


# Automatic Code Splitting in Next.js
Automatic code splitting means Next.js splits your JavaScript bundle into smaller chunks for each page so each page loads only the code it needs.

Next.js creates separate JavaScript bundles for each page automatically.
pages/
 ├── index.js
 ├── about.js
 └── contact.js

Next.js builds separate JS files:
index.js    → index.bundle.js
about.js    → about.bundle.js
contact.js  → contact.bundle.js

# Dynamic Code Splitting
Next.js also supports dynamic imports:
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("../components/Chart"));

# Memoization -> Caching
Avoid Unnecessary Re-renders

# React.memo in React
React.memo is a higher-order component (HOC) used to memoize a functional component, preventing unnecessary re-renders when props have not changed.
By default, a child component re-renders whenever its parent re-renders, even if the props are the same.
React.memo avoids this by shallowly comparing previous and new props.
# How do you memoize a component?
const MemoComponent = React.memo(function MemoComponent(props) {
  /* render using props */
});
OR;
export default React.memo(MyFunctionComponent);

# useMemo
useMemo is used to memoize expensive calculations so they are not recalculated on every render.
const result = useMemo(() => expensiveFunction(data), [data]);
React recalculates the value only when dependencies change.

# useCallback
useCallback memoizes functions so they do not get recreated on every render, preventing unnecessary child component re-renders.
useCallback(callback, dependencies)

# Lazy Loading Components
React allows loading components only when they are needed, reducing the initial bundle size.
import React, { lazy, Suspense } from "react";
const About = lazy(() => import("./About"));
<Suspense fallback={<p>Loading...</p>}>
  <About />
</Suspense>


# Image Optimization in Next.js
Next.js provides built-in image optimization using the next/image component.

Features:
automatic resizing
lazy loading
modern formats

import Image from "next/image";
<Image src="/image.png" width={500} height={300} alt="image" />


# Server-Side Rendering (SSR)
Pages are rendered on the server on each request, improving SEO and first load performance.
export async function getServerSideProps() {
  const data = await fetch("API");
  return { props: { data } };
}

# Static Site Generation (SSG)
Next.js can pre-render pages at build time, improving performance.

export async function getStaticProps() {
  const data = await fetch("API");
  return { props: { data } };
}


# Prefetching in Next.js
Next.js automatically prefetches pages in the background when using Link.
import Link from "next/link";
<Link href="/about">About</Link>


# Debouncing in React
Debouncing is a technique used to delay the execution of a function until a specified time has passed since the last event.

# AbortController
AbortController is a browser API used to cancel ongoing asynchronous operations like fetch requests.

It prevents:
unnecessary API calls
race conditions
memory leaks in React components


# Differnce between code splitting and lazy loading?
| Feature         | Code Splitting                              | Lazy Loading 

| Definition      | Technique of **splitting a large JavaScript bundle into smaller chunks**. | Technique of **loading components or resources only when they are needed**. |
| Purpose         | Reduce **initial bundle size**.                                           | Delay loading until **user actually needs the component**.                  |
| When it happens | During **build time** by bundlers (Webpack, Vite).                        | During **runtime** when component/page is requested.                        |
| Example         | Automatic splitting of page bundles in Next.js.                           | Loading components using `React.lazy()` in React.                           |


# on a single page should we do code splitting or lazy loading?
On a single page, you typically use lazy loading, which internally uses code splitting.
Explanation
Code Splitting → Splits the JavaScript bundle into smaller chunks (build-time optimization).
Lazy Loading → Loads those chunks only when needed (runtime behavior).

Code splitting divides JavaScript into smaller bundles, and lazy loading loads those bundles only when they are required.


# Vite is better than traditional React setups (Create React App) because it provides faster development and optimized builds.
Key reasons:
Native ES Modules
Vite serves files using native ES modules, so it does not bundle the entire project during development, making the dev server start almost instantly.

Faster Dependency Processing
It uses esbuild, which is extremely fast compared to traditional bundlers.

Automatic Code Splitting
During production builds, Vite uses Rollup, which performs efficient code splitting, ensuring that the browser loads only the necessary JavaScript chunks.

Fast Hot Module Replacement (HMR)
Changes update instantly in the browser without full reload.


# HMR (Hot Module Replacement)
Hot Module Replacement (HMR) updates only the changed module in the application without refreshing the entire page.


# React + Vite v/s Next.js
| Feature            | React + Vite                   | Next.js                     |
| ------------------ | ------------------------------ | --------------------------- |
| Rendering          | Client-side rendering (CSR)    | CSR + SSR + SSG             |
| SEO                | Poor for SEO                   | Good SEO (server rendering) |
| Routing            | Need library like React Router | File-based routing built-in |
| Backend APIs       | Need separate backend          | API routes built-in         |
| Image Optimization | Manual                         | Built-in optimization       |
| Performance        | Depends on setup               | Built-in optimizations      |
| Fullstack          | No                             | Yes                         |


# Monolith vs Micro Frontend

| Feature                | Monolithic Frontend                                          | Micro Frontend                                                    |
| ---------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------- |
| Definition             | Entire frontend application built as **one single codebase** | Frontend split into **multiple smaller independent applications** |
| Architecture           | Single team works on one large app                           | Multiple teams manage different frontend modules                  |
| Deployment             | Whole app must be deployed together                          | Each micro frontend can be **deployed independently**             |
| Scalability            | Harder to scale as app grows                                 | Easier to scale large applications                                |
| Technology Flexibility | Usually same framework across app                            | Different teams can use different frameworks                      |
| Complexity             | Simpler architecture                                         | More complex integration                                          |
| Example                | Single React app for entire website                          | Separate apps for **checkout, dashboard, profile, etc.**          |
