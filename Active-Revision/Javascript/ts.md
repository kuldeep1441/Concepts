## What is TypeScript?

TypeScript is a **superset of JavaScript** that adds **static typing** and then **compiles (transpiles) to plain JavaScript**.

- **TypeScript**: Statically typed, compiled.
- **JavaScript**: Dynamically typed, interpreted.

---

## Why use TypeScript instead of JavaScript?

**Key advantage**: TypeScript catches many **errors at compile time**, during development, before the code runs.

- **TypeScript**
  - Errors are found at **compile time**.
  - This usually means **fewer runtime errors** in production.
- **JavaScript**
  - Errors are found only **at runtime**, when the code actually executes.

---

## Is TypeScript a compile-time language?

**Yes – partially.**

- You write code in `.ts` files.
- The TypeScript compiler (`tsc`) checks types and **transpiles** `.ts` → `.js`.
- Type errors are reported during this compilation step.

---

## Is JavaScript a compile-time language?

**No.**

- JavaScript is typically **interpreted at runtime** by:
  - Browsers
  - Node.js

---

## How TypeScript runs (high level flow)

```text
TypeScript (.ts)
      ↓  (tsc - TypeScript compiler)
JavaScript (.js)
      ↓
Node.js / Browser executes JavaScript
```

**One-line summary**:  
TypeScript checks for errors during **compilation** before execution, while JavaScript detects errors only **when the code runs**.

---

## What is `any` in TypeScript?

`any` **disables type checking** for a variable. It tells TypeScript: “trust me, I know what I’m doing.”

```ts
let value: any = 10;
value = "hello"; // allowed
value = { foo: "bar" }; // also allowed
```

Use `any` **sparingly**, because you lose type safety.

---

## Difference between `any` and `unknown`

- **`any`**
  - You can perform **any operation** on it.
  - No type checking.
- **`unknown`**
  - Safer version of `any`.
  - You **must narrow/check the type** before using it.

```ts
let value: unknown = "hello";

// ❌ Not allowed directly
// value.toUpperCase();

// ✅ Need type guard
if (typeof value === "string") {
  value.toUpperCase();
}
```

---

## What are interfaces in TypeScript?

**Interfaces** define the **shape/structure of an object**.

```ts
interface User {
  name: string;
  age: number;
}
```

They are often used for:
- Object types.
- Class contracts (what properties/methods a class must implement).

---

## What are types in TypeScript?

A **type alias** can define **custom types**.

```ts
type User = {
  name: string;
  age: number;
};
```

Type aliases can represent:
- Objects
- Primitives
- Unions
- Intersections
- Tuples, etc.

---

## Difference between `type` and `interface`

### High-level comparison

| Feature                    | `interface`                               | `type`                                                  |
| -------------------------- | ----------------------------------------- | ------------------------------------------------------- |
| Primary use                | Object / class structure                  | Objects, primitives, unions, intersections, tuples, etc |
| Extendability              | Supports `extends`                        | Supports intersections (`&`)                            |
| Declaration merging        | ✅ Supported                              | ❌ Not supported                                        |

### Purpose

**Interface – for object structure**

```ts
interface User {
  name: string;
  age: number;
}
```

**Type – more flexible**

```ts
type User = {
  name: string;
  age: number;
};

type ID = string | number;
```

---

## Declaration Merging

**Interfaces can merge**, types cannot.

### Interface merging (Typesciript follow Declaration Merging)

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Kuldeep",
  age: 25,
};

Modules (most common in modern apps)
If a file has import or export, it becomes a module.

Then interfaces do NOT merge automatically.

file1.ts
export interface User {
  name: string;
}
file2.ts
export interface User {
  age: number;
}

Now this is two completely separate interfaces.

TypeScript will NOT merge them.

You must explicitly extend.
```

- Both `User` interfaces **merge automatically** into one.

### Type alias – no merging

```ts
type User = {
  name: string;
};

type User = {
  age: number;
}; // ❌ Error: Duplicate identifier 'User'
```

---

## Extending / Composition

### Interface – `extends`

```ts
interface Person {
  name: string;
}

interface Student extends Person {
  studentId: number;
}
```

### Type alias – intersection (`&`)

```ts
type Person = {
  name: string;
};

type Student = Person & {
  studentId: number;
};
```

- Both approaches achieve **similar results** (composition/extension), just with different syntax.

---

## What are generics in TypeScript?

**Generics** let you create **reusable components** that work with **multiple types** while preserving **type safety**.

```ts
function identity<T>(value: T): T {
  return value;
}

identity<number>(10);
identity<string>("Hello");
```

- `T` is a **type parameter**.
- The function works with any type, but still **knows** which type it is working with.

---

## What is a union type?

A **union type** allows a value to be **one of several types**.

```ts
let id: string | number;

id = "123"; // ok
id = 123;   // also ok
// id = true; // ❌ Error
```

---

## What is an enum?

**Enums** are **user-defined named constants**. They help represent a fixed set of related values.

```ts
enum Direction {
  North,
  South,
  East,
  West,
}

let move: Direction = Direction.North;
```

They make code **more readable** and **self-documenting**.