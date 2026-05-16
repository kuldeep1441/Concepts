# 📚 Database Indexing & B-Tree / B+ Tree — Complete Notes

1️⃣ B-Tree vs B+ Tree
| Feature      | B-Tree                | B+ Tree           |
| ------------ | --------------------- | ----------------- |
| Data storage | Internal + Leaf nodes | Only Leaf nodes   |
| Keys         | Stored everywhere     | Stored everywhere |
| Leaf linkage | ❌ No                  | ✅ Yes             |


🤔 Why
B-Tree mixes index + data
B+ Tree separates index (internal nodes) and data (leaf nodes)

⚙️ How (Structure)
B-Tree
        [10,20]
       /   |   \
 [5,8] [12,15] [22,30]

👉 Each node contains:

[key + data]
B+ Tree
        [10,20]
       /   |   \
 [5,8] [12,15] [22,30]

Leaf (linked):
[5,8] ⇄ [12,15] ⇄ [22,30]

👉 Internal:

[key + pointer]

👉 Leaf:

[key + data OR pointer]
🚀 Key Insight

B+ Tree is preferred in databases due to range query efficiency + better disk usage

2️⃣ B+ Tree Storage Model (Very Important)
📌 Core Truth
B+ Tree = collection of disk pages (nodes)

Each node contains:

keys + values + child pointers


🧠 Node Types
| Node Type            | Contains                 |
| -------------------- | ------------------------ |
| Internal node        | key + child page pointer |
| Leaf (clustered)     | full data                |
| Leaf (non-clustered) | pointer/reference        |


3️⃣ Clustered vs Non-Clustered Index
📌 What
Clustered Index

Data is stored inside the B+ tree leaf nodes

Non-Clustered Index

Tree stores (key → reference to data)

⚙️ Structure
Clustered Index
Leaf:
[ (10, A), (12, B) ]

👉 Leaf = actual data

Non-Clustered Index
Leaf:
[ (email → id) ]

👉 Needs second lookup

🔍 Query Flow
Clustered
Tree → Data found ✅
Non-Clustered
Tree → get PK → go to main tree → fetch data

👉 Double lookup

⚡ Differences
| Feature    | Clustered | Non-Clustered |
| ---------- | --------- | ------------- |
| Leaf nodes | Data      | Pointer       |
| Lookup     | 1 step    | 2 steps       |
| Count      | One       | Many          |


💡 Memory Trick
Clustered → Data IS the index
Non-clustered → Index points to data


4️⃣ Primary Key vs Secondary Index
📌 What happens internally
PRIMARY KEY (id)
INDEX (email)

👉 Creates:

1 B+ Tree → primary key (clustered)
1 B+ Tree → email index (non-clustered)
🌳 Primary Key Tree
Leaf:
[ (id, full row data) ]
🌳 Secondary Index Tree
Leaf:
[ (email → id) ]
🔥 Important (MySQL InnoDB)

Secondary index stores primary key, not direct pointer

5️⃣ Composite Index (Multi-field Index)
📌 Example
INDEX (email, phone)
⚙️ Behavior
(email, phone)
🔥 Left-most Prefix Rule

Works for:

email ✅
email + phone ✅

Does NOT work for:

phone ❌
6️⃣ What if No Index?
📌 Behavior
Full Table Scan
⚙️ Example
SELECT * FROM users WHERE email = 'x';

Without index:

Check every row → O(n)

With index:

Tree traversal → O(log n)
🚀 Impact
Slow queries
High CPU usage
Poor scalability
7️⃣ Insert Behavior
🌳 Clustered Index (SQL)
Insert → goes INTO leaf node

If full:

Page split occurs
🌳 Non-Clustered (MongoDB style)
Step 1: Store document
Step 2: Update index (key → pointer)
8️⃣ MongoDB Indexing Model
📌 Default Behavior

In MongoDB:

_id → automatically indexed
All indexes → non-clustered
⚙️ Structure
Index:
(_id → document_address)

Data:
stored separately
🔥 Important

MongoDB = non-clustered by default

⚠️ Exception

MongoDB supports:

Clustered collections (rarely used)
9️⃣ _id vs Other Index in MongoDB
📌 Similarity

Both:

B+ Tree
Store (key → pointer)


⚠️ Difference
| Feature  | `_id`    | Other Index |
| -------- | -------- | ----------- |
| Default  | ✅ Yes    | ❌ No        |
| Unique   | ✅ Always | Optional    |
| Required | ✅ Yes    | ❌ No        |


🧠 Key Insight
_id → identity
other index → query optimization
🔟 Final Mental Model
🌳 SQL (MySQL InnoDB)
Clustered:
Tree = Data

Secondary:
Tree → PK → Data
🌳 MongoDB
Index:
Tree → pointer

Data:
stored separately
🚀 Final Summary
Core Concepts
B+ Tree = database indexing backbone
Clustered index = data stored in tree
Non-clustered = pointer to data
Primary key = usually clustered (SQL)
MongoDB = mostly non-clustered
⚡ One-line Takeaways
B+ Tree → optimized for databases
Clustered → no pointer, data inside
Non-clustered → extra lookup needed
MongoDB → non-clustered by default
Index missing → full scan (slow)



# 🔍 What is “Double Lookup” in Databases? (Simple Explanation)

If you’ve worked with indexes in SQL or NoSQL, you’ve probably heard this term:

> **“Double lookup”**

Let’s break it down in a clean, practical way 👇

---

## 📌 What is Double Lookup?

> **Double lookup means the database needs TWO steps to fetch your data**

This happens when using a **non-clustered (secondary) index**.

---

## 🤔 Why does it happen?

Because a secondary index does NOT store full data.

Instead, it stores:

```
key → primary key
```

So the database:

1. Finds the primary key using the index
2. Then uses the primary key to fetch the actual row

---

## ⚙️ How it works (Step-by-step)

### 🧾 Example Table

| id | email  | name |
| -- | ------ | ---- |
| 10 | a@mail | A    |
| 12 | b@mail | B    |

---

### 🌳 Indexes

**Primary (clustered index):**

```
(id → full row)
```

**Secondary (email index):**

```
(email → id)
```

---

### 🔍 Query

```sql
SELECT * FROM users WHERE email = 'a@mail';
```

---

### 🔄 Execution Flow

#### Step 1: Search secondary index

```
(a@mail → 10)
```

#### Step 2: Search primary index

```
(10 → full row)
```

---

### 🔥 Final Flow

```
Secondary Index → Primary Index → Data
```

👉 That’s **double lookup**

---

## ⚡ Compare with Primary Key Query

```sql
SELECT * FROM users WHERE id = 10;
```

Execution:

```
Primary Index → Data
```

👉 Only **one lookup** (faster)

---

## 🚀 Performance Impact

| Query Type      | Steps | Speed           |
| --------------- | ----- | --------------- |
| Primary Key     | 1     | Fastest 🚀      |
| Secondary Index | 2     | Slightly slower |

---

## 💡 Pro Tip: Avoid Double Lookup (Covering Index)

If your query only needs indexed fields:

```sql
SELECT email FROM users WHERE email = 'a@mail';
```

👉 The DB can return result directly from index
👉 No second lookup needed ✅

---

## 🧠 Final Takeaway

> **Double lookup = secondary index → primary index → data**

---

## ⚡ One-line Memory Trick

* Primary key → **1 jump**
* Secondary index → **2 jumps**

---

If you’re building backend systems (Node/NestJS/Mongo/SQL), understanding this will help you:

* Design better indexes
* Optimize queries
* Reduce latency