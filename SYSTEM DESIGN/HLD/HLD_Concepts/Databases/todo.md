🧠 PHASE 1: Database Fundamentals (Foundation First)
1. What is a Database & Types

What

Relational (SQL): PostgreSQL, MySQL
NoSQL: MongoDB, Redis, Cassandra

Why

Interviewers expect you to choose the right DB, not just use one blindly
Every system design question starts with: “Which DB and why?”

How

Learn:
ACID vs BASE
SQL vs NoSQL trade-offs
Practice:
When to use Mongo vs PostgreSQL
2. Data Modeling Basics

What

Tables/collections
Relationships:
One-to-One
One-to-Many
Many-to-Many

Why

Bad schema = bad performance + scaling issues later
This is where most 2–3 year devs are weak

How

Design schemas for:
User system
E-commerce (orders, products)
Chat app (you already built one → perfect use case)
🏗️ PHASE 2: Schema Design (VERY IMPORTANT)

3. Schema Design Principles
What
Normalization (1NF, 2NF, 3NF)
Denormalization

Why

Interviews LOVE this:

“Will you normalize or denormalize and why?”

How

Practice:
Normalize a messy table
Then denormalize for performance


4. SQL Schema Writing
What

CREATE TABLE
Constraints:
PRIMARY KEY
FOREIGN KEY
UNIQUE
NOT NULL
INDEX

Why

You should be able to write schema without Google

How

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

Practice writing:

Users
Orders
Payments
Chat messages


5. NoSQL Schema Design (MongoDB mindset)

What

Embedded vs Referenced data

Why

Mongo is NOT SQL in JSON → different thinking required

How

Learn:
When to embed (fast reads)
When to reference (scalability)

Example:

// Embedded
{
  userId: "123",
  posts: [{ title: "A" }]
}

// Referenced
{
  userId: "123"
}
// posts collection separate
⚡ PHASE 3: Indexing (CORE FOR INTERVIEWS)

6. What is Indexing

What

Data structure (B-Tree) to speed up queries

Why

This is where you stand out in interviews

How

Understand:
Full table scan vs index scan
O(n) → O(log n)


7. Types of Indexes
What

Single index
Compound index
Unique index
Partial index
Text index

Why

Real-world queries need compound indexes

How

db.users.createIndex({ email: 1 })
db.orders.createIndex({ userId: 1, createdAt: -1 })


8. Index Optimization
What

How indexes actually affect queries

Why

Many devs “add index” blindly → hurts performance

How

Learn:
Left-most prefix rule (VERY IMPORTANT)
Index selectivity
Covered queries
🔍 PHASE 4: Query Optimization

9. Query Analysis
What

EXPLAIN / query plan

Why

Interviewers ask:

“How will you debug slow query?”

How

EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@test.com';

10. Common Performance Problems
What

N+1 queries
Missing indexes
Large joins
Unbounded queries

Why

Real production issues

How

Fix:
Use joins properly
Add indexes
Pagination
🚀 PHASE 5: Advanced Concepts (System Design Level)


11. Transactions & Isolation

What

ACID
Isolation levels:
Read Uncommitted
Read Committed
Repeatable Read
Serializable

Why

Critical for payments, bookings

How

Simulate:
Double booking problem

12. Scaling Databases
What
Vertical vs Horizontal scaling
Replication
Sharding
Why

This is where system design questions live
How
Learn:
Read replicas
Partitioning strategies


13. Caching
What

Redis, in-memory caching

Why

Reduces DB load massively

How

Implement:
Cache aside pattern