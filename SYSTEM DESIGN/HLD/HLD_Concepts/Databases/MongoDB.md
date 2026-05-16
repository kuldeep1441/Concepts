Open source database (Mongodb now supports ACID property)


(
Connection Pool in MongoDB :
Our (Driver) maintains a TCP/TLS pool (connection pool to avoid 3 way handshake + tear-down work)
Authentication (username/password, SSL).
)

(
Delete V/S Soft Delete :
Delete : causes the B+ tree to rebalance and the the deleted thing can't be re-accessed
Soft Delete : adding a key of isDeleted which show the data is soft deleted.
)

**What is a MongoDB Cluster?**
A MongoDB Cluster is a group of MongoDB servers (nodes) working together to provide scalability, availability, and fault tolerance for large-scale applications.


MongoDB supports two major types of clusters:

1. Replica Set (Replication Cluster)
A replica set is a cluster of MongoDB servers that store the same data.
Used for high availability and redundancy.

Components:
Primary Node: Handles all write operations.
Secondary Nodes: Replicate data from the primary and can serve read requests.
Arbiter (Optional): Helps in election during failover.
Goal: If the primary fails, a secondary becomes primary (automatic failover).

      Client
        ↓
     Primary
    /       \
Secondary   Secondary


2. Shraded Cluster
A sharded cluster is used to distribute data across multiple servers for horizontal scalability.
Components:
Shards: Each shard stores a subset of data.
Config Servers: Store metadata about the cluster (which shard has which data).
mongos (Query Router): Routes client queries to the correct shard(s).
Goal: Handle huge datasets and high write throughput by splitting data.

Client → mongos → [Shard1, Shard2, Shard3]


{
**ObjectID in Mongodb: (unique identifier in MongoDB).**
MongoDB, ObjectId is the default data type for the _id field in a document. It serves as a unique identifier for each document in a collection.

✅ Key Characteristics of ObjectId
Uniqueness
Every ObjectId is unique within a collection, ensuring no two documents share the same _id.

Size
It’s a 12-byte (96-bit) value, which makes it more compact than a typical UUID (16 bytes).

Structure (12 bytes)
4 bytes → Timestamp (number of seconds since the Unix epoch)(on the left most to create large gap)
5 bytes → Random value (generated once per process)(to avoid 2 parallel transacetions from getting same id)
3 bytes → Incrementing counter (unique for each ObjectId created by the same machine)(to avoid single machine's multiple threads getting the same id)

Similarly SnowFlakes the 64 bit integers used by Twiter, Instagram are
41 bits -> epoch timestamp
10 bits -> machineId
12 bits -> counter (per machine)

Epoch timestamp is from 1970


Human-readable in Hex
When represented as a string, an ObjectId is a 24-character hexadecimal string.
}

# 👉 NoSQL Document Database that stores data as JSON-like documents (BSON)

# 🤔 Why MongoDB?
Problem with SQL:
Rigid schema
Joins are expensive
Not much scalable

MongoDB solves:
Flexible schema ✅
Faster development 🚀
No joins (embedding instead)


# Scaling
Horizontal scaling via sharding
Built-in replication (Replica Sets)

# 🧠 What are Embedded & Referenced Data in MongoDB?
Embedding means storing related data inside the same document

{
  "userId": "123",
  "name": "Kuldeep",
  "orders": [
    { "orderId": "o1", "amount": 200 },
    { "orderId": "o2", "amount": 500 }
  ]
}


Referencing means storing data in separate documents and linking via IDs
// users collection
{
  "userId": "123",
  "name": "Kuldeep"
}

// orders collection
{
  "orderId": "o1",
  "userId": "123",
  "amount": 200
}