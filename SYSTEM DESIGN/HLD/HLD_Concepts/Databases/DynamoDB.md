# 🧠 What is DynamoDB?
Fully managed by AWS👉 Fully managed NoSQL database by AWS

Key characteristics:
Key-Value + Document DB
Serverless (no infra management)
Auto scaling
Extremely fast (single-digit ms latency ⚡)


# Why DynamoDB exists?

Traditional DB problems at scale:

Scaling SQL is hard 😵
Managing servers, sharding, replication
Performance bottlenecks

👉 DynamoDB solves:

Infinite scaling
No server management
High availability (multi-AZ by default)


⚙️ How DynamoDB Works
1. Data Model

Instead of tables like SQL:

Table
Item (row)
Attributes (columns)
Core concept:

👉 Primary Key

Two types:

(a) Partition Key
Determines where data is stored
(b) Composite Key
Partition key + Sort key

👉 Example:

PK: userId
SK: orderId
2. Indexing
Primary index (default)
GSI (Global Secondary Index) ← VERY IMPORTANT

👉 Used to query data in different ways

3. Querying

DynamoDB is NOT like SQL:

❌ No joins
❌ No complex queries

👉 You must:

Design queries first, then design schema

4. Scaling
Automatically partitions data
Handles millions of requests/sec
No manual sharding needed
🔥 When to Use DynamoDB
✅ Best Use Cases
High traffic systems
Real-time apps
Event-driven systems
Serverless architectures

👉 Examples:

Gaming leaderboards
Session storage
IoT data
Chat applications
❌ When NOT to Use
Complex joins required
Heavy relational data
Ad-hoc queries

👉 Then use:

PostgreSQL


⚖️ DynamoDB vs Other DBs
| Feature     | DynamoDB    | PostgreSQL | MongoDB  |
| ----------- | ----------- | ---------- | -------- |
| Type        | Key-Value   | Relational | Document |
| Scaling     | Automatic   | Manual     | Moderate |
| Joins       | ❌           | ✅          | ❌        |
| Schema      | Flexible    | Fixed      | Flexible |
| Performance | ⚡ Very High | High       | High     |
