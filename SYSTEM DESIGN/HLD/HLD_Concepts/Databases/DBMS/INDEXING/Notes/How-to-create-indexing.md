# 📚 Indexing in Databases — Creation & Criteria Guide

---

# 1️⃣ How to Create an Index

## 📌 What

Creating an index means:

> **Building a B+ Tree on one or more fields to enable fast data retrieval**

---

## ⚙️ SQL (MySQL / PostgreSQL)

### ✅ Basic Index

```sql
CREATE INDEX idx_email ON users(email);
```

👉 Creates a B+ Tree:

```text
(email → row reference)
```

---

### ✅ Unique Index

```sql
CREATE UNIQUE INDEX idx_email ON users(email);
```

👉 Ensures:

* No duplicate values

---

### ✅ Composite Index

```sql
CREATE INDEX idx_user ON users(email, status);
```

👉 Used for:

```sql
WHERE email = ? AND status = ?
```

---

### ✅ Primary Key (Auto Index)

```sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);
```

👉 Automatically creates:

* Clustered index (in MySQL InnoDB)

---

### ✅ Drop Index

```sql
DROP INDEX idx_email ON users;
```

---

## ⚙️ MongoDB

### ✅ Basic Index

```js
db.users.createIndex({ email: 1 });
```

👉 `1` = ascending, `-1` = descending

---

### ✅ Unique Index

```js
db.users.createIndex({ email: 1 }, { unique: true });
```

---

### ✅ Compound Index

```js
db.users.createIndex({ email: 1, status: 1 });
```

---

### ✅ Text Index

```js
db.users.createIndex({ name: "text" });
```

---

### ✅ TTL Index

```js
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });
```

---

### ✅ Drop Index

```js
db.users.dropIndex("email_1");
```

---

## 🔥 What Happens Internally

When an index is created:

```text
1. Database scans all rows/documents
2. Extracts indexed field values
3. Sorts them
4. Builds a B+ Tree structure
```

---

## ⚠️ Important Notes

* Index creation is **expensive** on large datasets
* Inserts/updates become **slower** (index maintenance)
* Composite index order matters (**left-most prefix rule**)

---

# 2️⃣ Criteria for Indexing (When to Add Index)

---

## 📌 Core Principle

> **Index based on queries, not schema**

---

## ⚙️ Practical Criteria

---

## 1️⃣ Fields used in `WHERE`

```sql
SELECT * FROM users WHERE email = ?;
```

👉 Add index on `email`

---

## 2️⃣ Fields used in `JOIN`

```sql
SELECT * FROM orders o
JOIN users u ON o.user_id = u.id;
```

👉 Index:

* `orders.user_id`
* `users.id`

---

## 3️⃣ Fields used in `ORDER BY`

```sql
SELECT * FROM users ORDER BY created_at DESC;
```

👉 Index:

* `created_at`

---

## 4️⃣ Fields used in `GROUP BY`

```sql
SELECT COUNT(*) FROM users GROUP BY city;
```

👉 Index:

* `city`

---

## 5️⃣ High Selectivity Fields (Important)

### ✅ Good candidates:

* email (unique)
* user_id

### ❌ Avoid:

* boolean fields
* gender (low variation)

👉 Reason:

```text
Low selectivity → many rows match → index not useful
```

---

## 6️⃣ Frequently Queried Fields

👉 Index fields that appear often in queries

---

## 7️⃣ Composite Queries

```sql
WHERE email = ? AND status = ?
```

👉 Use:

```sql
INDEX(email, status)
```

---

### 🔥 Left-most Prefix Rule

Index `(A, B)` works for:

* A ✅
* A + B ✅

Does NOT work for:

* B ❌

---

## 8️⃣ Range Queries

```sql
WHERE created_at BETWEEN X AND Y
```

👉 Index works well

---

## 9️⃣ Avoid Over-Indexing

Too many indexes:

* Slows writes
* Increases storage
* Adds maintenance overhead

---

## 🔟 Small Tables

👉 Avoid indexing:

* Small datasets (< few thousand rows)

---

# 🟩 MongoDB-Specific Criteria

In MongoDB:

---

## ✅ Index when:

* Used in `.find()`
* Used in `.sort()`
* Used in aggregation `$match`

---

## ❌ Avoid:

* Indexing every field
* Low-cardinality fields

---

## 🔥 Common MongoDB Index Types

* Compound index:

```js
{ email: 1, status: 1 }
```

* Text index (search)
* TTL index (auto-expiry)

---

# 🧠 Real Backend Strategy

---

## Step-by-step

1. List all queries
2. Identify:

   * WHERE
   * JOIN
   * SORT
3. Add indexes only for those fields

---

# 🚀 Final Takeaways

---

## Core Concepts

* Index = B+ Tree for fast lookup
* Improves read performance
* Slows write performance
* Must be used selectively

---

## ⚡ One-line Memory

> **Index what you query, not what you store**

---

## ✅ Quick Checklist

Before adding index, ask:

* Is it used in WHERE?
* Is it frequently queried?
* Is it selective?
* Is dataset large?

👉 If YES → add index

---

# 📌 Summary

| Aspect    | Key Point                        |
| --------- | -------------------------------- |
| Creation  | `CREATE INDEX` / `createIndex()` |
| Structure | B+ Tree                          |
| Use       | Faster queries                   |
| Cost      | Slower writes                    |
| Strategy  | Query-driven                     |

---

This document covers both:

* ✅ How to create indexes
* ✅ When to create indexes

---
