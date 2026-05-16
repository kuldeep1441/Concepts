# Cache Strategies (System Design Notes)

This doc covers common caching strategies and when to use each. Each strategy is described using the same structure:

- **What**: what happens on reads/writes
- **Why**: the main reason you would choose it
- **How**: typical flow (pseudo-code)
- **Pros / Cons**: trade-offs to mention in interviews and real designs

---

## 1. Cache-Aside (Lazy Loading)

### What
The application checks the cache first. On a cache miss, it reads from the database, writes the result into the cache, and then returns it.

### Why
- Most commonly used pattern
- Simple and flexible
- Avoids caching data that is never read

### How

```txt
if (cache.has(key)) return cache.get(key)

data = db.get(key)
cache.set(key, data)
return data
```

### Pros
- Only caches what is needed
- Easy to implement incrementally

### Cons
- First request is slow (cache miss)
- Can serve stale data unless you handle invalidation/TTL carefully

---

## 2. Write-Through Cache

### What
Writes go to the cache and the database at the same time (synchronously).

### Why
Keeps the cache consistent with the database for reads.

### How

```txt
cache.set(key, data)
db.write(key, data)
```

### Pros
- No stale reads (cache reflects latest successful write)
- Cache stays warm for frequently read keys

### Cons
- Higher write latency (write must complete to DB)
- May cache data that is never read

---

## 3. Write-Back (Write-Behind)

### What
Writes go to the cache first, and the database is updated later (asynchronously).

### Why
Improves write latency and throughput (common in high-ingest systems).

### How

```txt
cache.set(key, data)
queue.writeToDBLater(key, data)
```

### Pros
- Very fast writes
- Good for high-throughput workloads

### Cons
- Risk of data loss if cache/queue fails before persistence
- Higher operational complexity (queues, retries, ordering, DLQ, idempotency)

---

## 4. Read-Through Cache

### What
The application always reads via the cache. On a miss, the cache layer loads from the database automatically.

### Why
Keeps application code cleaner by centralizing cache-miss handling.

### How

```txt
data = cache.getOrLoad(key, () => db.get(key))
return data
```

### Pros
- Less caching logic in application code
- Centralized behavior (TTL, load logic, metrics) is easier to standardize

### Cons
- Less fine-grained control in the app
- Harder to customize loading behavior per endpoint/use-case

---

## 5. Write-Around Cache

### What
Writes go directly to the database, and the cache is not updated on write.

### Why
Avoids polluting the cache with write-heavy or rarely-read data.

### How

```txt
db.write(key, data)
// do NOT update cache
```

### Pros
- Cache stays clean (better hit-rate for genuinely hot keys)
- Good for write-heavy workloads

### Cons
- First read after a write is a cache miss (slower)

---

## 6. Quick Comparison

| Strategy      | Read Speed | Write Speed | Consistency | Complexity |
| ------------- | ---------- | ----------- | ----------- | ---------- |
| Cache-Aside   | Medium     | Medium      | Medium      | Low        |
| Write-Through | Fast       | Slow        | High        | Low        |
| Write-Back    | Fast       | Very Fast   | Low         | High       |
| Read-Through  | Fast       | Medium      | Medium      | Medium     |
| Write-Around  | Slow (1st) | Fast        | Medium      | Low        |

---

## 7. When to Use What

- **Most common default (interviews + real systems)**: Cache-Aside
- **Critical consistency (banking, payments)**: Write-Through
- **High-scale ingestion (analytics, logs, counters)**: Write-Back
- **Centralized caching layer / cleaner app code**: Read-Through
- **Write-heavy + low-read keys**: Write-Around

---

## 8. Interview/Design Must-Mentions

Just naming a strategy isn’t enough—always call out:

- **TTL (expiry)**: how long entries live and why
- **Eviction policy**: LRU/LFU and memory constraints
- **Cache invalidation**: the hardest problem (staleness, race conditions, consistency requirements)