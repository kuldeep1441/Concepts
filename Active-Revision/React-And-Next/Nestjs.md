Next.js
Next.js is a React framework used to build full-stack web applications with features like server-side rendering, routing, and performance optimizations built in.
It is built on top of React.

Major Features
| Feature                          | Description                                                              |
| -------------------------------- | ------------------------------------------------------------------------ |
| **Server-Side Rendering (SSR)**  | Pages can be rendered on the server for better SEO and faster first load |
| **Static Site Generation (SSG)** | Pages can be pre-built at build time                                     |
| **File-based Routing**           | Routes are created automatically from the `pages` or `app` folder        |
| **Full Stack Applications**      | Backend APIs can be created inside the same project                      |
| **Automatic Code Splitting**     | Only necessary JavaScript is loaded per page                             |
| **Image Optimization**           | Built-in image optimization using `next/image`                           |
| **Built-in CSS Support**         | Supports CSS, Sass, and CSS Modules                                      |
| **Fast Refresh**                 | Instant updates during development                                       |
| **SEO Friendly**                 | SSR and metadata handling improve search engine visibility               |


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


# How page change happend in next without re-rendering
User on /
↓
Click /about
↓
Next.js downloads about page JS
↓
React renders About component

Next.js updates the browser URL using the History API.
history.pushState({}, "", "/about");