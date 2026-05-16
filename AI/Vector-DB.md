# Vector Database (Vector DB)

## Introduction
A Vector Database (Vector DB) is a specialized database used to store and search vector embeddings efficiently.

It is a core technology behind:
* RAG systems
* AI chatbots
* Semantic search
* Recommendation engines
* AI assistants

---

# What is a Vector
A vector is a numerical representation of data.

Example:
```text id="c3u4ea"
"Artificial Intelligence"
↓
[0.12, -0.44, 0.91, ...]
```

This list of numbers is called an embedding vector.

---

# What is an Embedding

An embedding converts:

* text
* image
* audio
* code

into numerical vectors that capture semantic meaning.

Similar meanings produce similar vectors.

Example:

| Text | Similar To       |
| ---- | ---------------- |
| Dog  | Puppy            |
| Car  | Vehicle          |
| AI   | Machine Learning |

---

# Why Vector DB is Needed

Traditional databases search using:

* exact keywords

Vector databases search using:

* semantic similarity

Example:

Query:

```text id="bt0v07"
"vehicle"
```

Vector search can return:

* car
* automobile
* truck

even if the exact word is absent.

---

# Traditional DB vs Vector DB

| Feature     | Traditional DB | Vector DB           |
| ----------- | -------------- | ------------------- |
| Search Type | Exact match    | Semantic similarity |
| Data        | Rows/Columns   | Embeddings          |
| Use Case    | CRUD apps      | AI retrieval        |
| Query       | SQL conditions | Similarity search   |

---

# How Vector Databases Work

Workflow:

```text id="r0q7we"
Documents
   ↓
Chunking
   ↓
Embedding Model
   ↓
Vectors
   ↓
Vector Database
   ↓
Similarity Search
   ↓
Relevant Results
```

---

# Step 1: Chunking

Large documents are divided into smaller chunks.

Example:

* PDF pages
* paragraphs
* sections

Chunking improves retrieval quality.

---

# Step 2: Generate Embeddings

Embedding models convert chunks into vectors.

Popular embedding models:

* OpenAI embeddings
* Sentence Transformers
* BGE models

---

# Step 3: Store in Vector DB

The generated embeddings are stored with metadata.

Metadata examples:

* document name
* page number
* source URL

---

# Step 4: Query Search

User query is converted into an embedding.

Example:

```text id="jkt9ha"
"How does AI help healthcare?"
```

The vector DB finds semantically similar chunks.

---

# Similarity Search

Vector DBs use nearest neighbor search.

Common similarity methods:

* Cosine Similarity
* Euclidean Distance
* Dot Product

Most systems use:

* Cosine Similarity

---

# Cosine Similarity

Measures angle between vectors.

Smaller angle:

* more semantic similarity

Used to retrieve relevant information.

---

# ANN (Approximate Nearest Neighbor)

Searching millions of vectors exactly is slow.

Vector DBs use ANN algorithms for fast retrieval.

Popular ANN algorithms:

* HNSW
* IVF
* FAISS

---

# RAG and Vector DB

RAG = Retrieval-Augmented Generation

Flow:

```text id="vtq9bm"
User Query
   ↓
Vector Search
   ↓
Relevant Chunks
   ↓
LLM
   ↓
Final Answer
```

Vector DB provides knowledge to the LLM.

---

# Popular Vector Databases

| Vector DB                   | Description                |
| --------------------------- | -------------------------- |
| Pinecone Pinecone           | Managed cloud vector DB    |
| Chroma ChromaDB             | Beginner friendly          |
| Qdrant Qdrant               | High-performance search    |
| Weaviate Weaviate           | Enterprise AI support      |
| Milvus Milvus               | Large-scale vector storage |
| MongoDB Atlas Vector Search | Integrated with MongoDB    |
| PostgreSQL pgvector         | PostgreSQL extension       |

---

# Use Cases

## 1. AI Chatbots

Used for:

* company knowledge assistants
* document chat systems

---

## 2. Semantic Search

Search by meaning instead of keywords.

---

## 3. Recommendation Systems

Used for:

* ecommerce suggestions
* movie recommendations

---

## 4. Image Search

Find visually similar images using embeddings.

---

## 5. Code Search

Search similar functions or code snippets.

---

# Advantages

| Advantage              | Description                 |
| ---------------------- | --------------------------- |
| Semantic understanding | Searches by meaning         |
| Fast retrieval         | Optimized indexing          |
| Scalable               | Handles millions of vectors |
| Real-time updates      | Easy to add data            |

---

# Challenges

| Challenge          | Description                     |
| ------------------ | ------------------------------- |
| Large memory usage | Embeddings are high-dimensional |
| Chunking quality   | Bad chunks reduce accuracy      |
| Embedding quality  | Poor embeddings hurt retrieval  |

---

# Vector DB vs Fine-Tuning

| Feature                   | Vector DB | Fine-Tuning |
| ------------------------- | --------- | ----------- |
| Stores external knowledge | Yes       | No          |
| Requires training         | No        | Yes         |
| Easy updates              | Yes       | No          |
| Runtime retrieval         | Yes       | No          |

---

# Common AI Stack

| Layer      | Technology       |
| ---------- | ---------------- |
| Frontend   | Next.js          |
| Backend    | NestJS           |
| LLM        | OpenAI GPT       |
| Embeddings | Embedding models |
| Vector DB  | Pinecone         |
| Storage    | MongoDB          |

---

# Important Concepts

| Concept           | Meaning                      |
| ----------------- | ---------------------------- |
| Embedding         | Numerical representation     |
| Vector            | Array of numbers             |
| Chunking          | Splitting documents          |
| Similarity Search | Finding nearest meaning      |
| ANN               | Fast nearest neighbor search |

---

# Conclusion

A Vector Database is a specialized database designed to:

* store embeddings
* perform semantic search
* support AI retrieval systems

It is one of the most important technologies behind modern AI applications such as:

* RAG
* AI assistants
* semantic search
* intelligent chat systems.
