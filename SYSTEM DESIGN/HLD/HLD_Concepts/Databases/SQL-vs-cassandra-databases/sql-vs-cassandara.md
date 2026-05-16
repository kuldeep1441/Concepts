# 🧠 1. What (Overview)
| Aspect          | SQL (PostgreSQL) | Cassandra               |
| --------------- | ---------------- | ----------------------- |
| Type            | Relational DB    | Wide-column NoSQL DB    |
| Schema          | Fixed            | Flexible (query-driven) |
| Design approach | Data-first       | Query-first             |


# 🤔 2. Why (Core Philosophy)
SQL (PostgreSQL) → Normalize data, avoid duplication, flexible querying
Cassandra → Denormalize data, optimize for speed & scale, limited querying

# ⚙️ 3. How (Detailed Differences)
🔑 1. Data Structure
SQL (PostgreSQL)
-- Users
id | name     | email
1  | Kuldeep  | kuldeep@mail.com

-- Orders
id  | user_id | amount
101 | 1       | 500
102 | 1       | 300

Cassandra
-- user_orders
user_id | name     | order_id | amount
1       | Kuldeep  | 101      | 500
1       | Kuldeep  | 102      | 300

🔑 2. Normalization
| Feature          | SQL        | Cassandra    |
| ---------------- | ---------- | ------------ |
| Data duplication | ❌ Avoided  | ✅ Common     |
| Design           | Normalized | Denormalized |

🔑 3. Query Capability
Feature	SQL	Cassandra
JOINs	✅ Supported	❌ Not supported
Flexible queries	✅ Yes	❌ Limited

🔑 4. Scalability
| Feature     | SQL      | Cassandra  |
| ----------- | -------- | ---------- |
| Scaling     | Vertical | Horizontal |
| Distributed | Limited  | Built-in   |

🔑 5. Consistency
| Feature     | SQL           | Cassandra          |
| ----------- | ------------- | ------------------ |
| Consistency | Strong (ACID) | Eventual (tunable) |


## 🧠 Final Summary Table
| Category          | SQL (PostgreSQL) | Cassandra                   |
| ----------------- | ---------------- | --------------------------- |
| Model             | Relational       | Wide-column                 |
| Schema            | Fixed            | Flexible                    |
| Joins             | Yes              | No                          |
| Normalization     | Yes              | No                          |
| Query flexibility | High             | Low                         |
| Scaling           | Vertical         | Horizontal                  |
| Best for          | Business apps    | Massive distributed systems |
