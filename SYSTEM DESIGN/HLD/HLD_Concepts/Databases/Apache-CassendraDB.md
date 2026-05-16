Apache Cassandra is a:

👉 Distributed, masterless, peer-to-peer NoSQL database

Key Characteristics:
No single point of failure ❌
Highly scalable (horizontal scaling) 🚀
Designed for high write throughput
Tunable consistency

🔹 Distributed & Masterless
What
All nodes are equal (no master/slave)
Any node can handle read/write requests
Why
No bottleneck
No single failure point

🔹 Data Partitioning (Consistent Hashing)
What
Data is distributed using consistent hashing
Each node owns a range of tokens
How
Partition key → hashed
Hash determines node location
Data stored in that node


🔹 Key Concepts
Partition Key
Decides where data is stored
Clustering Key
Decides how data is sorted inside partition
CREATE TABLE orders (
  user_id UUID,
  order_id UUID,
  created_at TIMESTAMP,
  amount DECIMAL,
  PRIMARY KEY (user_id, created_at)
);

👉 Here:
user_id → Partition Key
created_at → Clustering Key


💡 Rule (IMPORTANT)
“One query = One table”

🗣️ Cassandra Query Language (CQL)
What
SQL-like language for Cassandra
INSERT INTO orders (user_id, order_id, amount) VALUES (...);
SELECT * FROM orders WHERE user_id = ?;
CREATE TABLE users (...);

Key Differences from SQL:
No joins ❌
No complex aggregations ❌
Query must include partition key ✅


🔁 Replication & Consistency
🔹 Replication
What
Data is copied across multiple nodes
Replication Factor (RF)
RF = 3 → data stored in 3 nodes


🔹 Consistency Levels (VERY IMPORTANT)  (Tuning Consistency)
What
Defines how many nodes must respond
| Level  | Consistency         |
| ------ | --------------- |
| ONE    | wait for 1 replica - fastest, but weakest |
| QUORUM | Wait for majority - a balanced middle ground |
| ALL    | Wait for every replica - strongest, but slowest   |

💡 Key Idea

👉 Cassandra gives tunable consistency
You choose between:
Fast ⚡ (low consistency)
Accurate 🎯 (high consistency)


🔹 Eventual Consistency
Why Cassandra uses it:
To achieve high availability + scalability

👉 Data sync happens asynchronously

🚀 Performance Tuning
🔹 Compaction
What
Merges small files into larger ones
Why
Improves read performance
🔹 Tombstones
What
Marks deleted data
Why important
Too many tombstones = slow queries 😵
🔹 Query Optimization
Rules:
Always query by partition key
Avoid large partitions
Avoid full table scans