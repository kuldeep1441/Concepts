## What

When a company reaches something like **20,000 users**, it doesn’t scale just because of the number—it scales based on **load, bottlenecks, performance issues, and business needs**.

For example:
* 20k registered users ≠ heavy load
* 20k daily active users with real-time features = heavy load

A company asks:
* Is the app getting slow?
* Are servers hitting CPU/RAM limits?
* Is DB response time increasing?
* Are requests timing out?
* Is traffic spiking at certain hours?
* Are costs becoming inefficient?

Scaling starts when the current system becomes a bottleneck.

---

## Why
Because infrastructure should grow based on **actual usage**, not just user count.

Example:
* A portfolio website can handle 100k users easily
* A chat app with 20k active users may need major scaling

So companies monitor:
* CPU usage
* Memory usage
* DB queries
* API latency
* Error rates
* Queue delays
* Concurrent users
* Peak traffic times

Tools often used:
* Datadog
* New Relic
* Prometheus
* Grafana

These help identify **when** to scale.

---

## How (Typical Scaling Path)

---

### 1. Vertical Scaling (Scale Up)
Increase power of one server:

* more RAM
* better CPU
* faster SSD

Example:
From:
* 2 GB RAM server
To:
* 16 GB RAM server

Fastest short-term fix.

Problem:
There is always a limit.

---

### 2. Horizontal Scaling (Scale Out)
Instead of one big server:

Use multiple servers behind a load balancer.

Example:

```text
Users
   ↓
Load Balancer
 ↓   ↓   ↓
App App App
```

Tools:

* NGINX
* HAProxy
* Amazon Web Services ELB

This is real production scaling.

---

### 3. Database Optimization
Usually DB becomes the first bottleneck.

Companies improve by:

* indexing
* query optimization
* read replicas
* caching
* partitioning
* sharding (later stage)

Example:

```text
App slow → not server issue → slow DB queries
```

Very common.

---

### 4. Caching
Avoid hitting DB every time.

Use:
* Redis
* Memcached

Example:

Instead of:

```text
DB → every request
```

Use:

```text
Cache → fast response
```

Huge performance improvement.

---

### 5. Queue Heavy Jobs
For:

* emails
* notifications
* video processing
* report generation

Use queues:
* RabbitMQ
* Apache Kafka
* BullMQ

So user requests stay fast.

---

### 6. CDN for Static Files
For:

* images
* videos
* CSS
* JS

Use CDN like:
* Cloudflare
* Amazon CloudFront

Reduces server load heavily.

---

### 7. Autoscaling
Cloud platforms can automatically add/remove servers.

Used in:

* Amazon Web Services
* Google Cloud Platform
* Microsoft Azure

This is common for serious production systems.

---

## Real Startup Thinking
They usually ask:

> What is the cheapest safe scaling step?

Not:

> Let’s build Google-level infra.

Because premature scaling is expensive.

Usually path is:

```text
Monolith
→ Bigger server
→ Load balancer
→ Redis
→ Read replicas
→ Queues
→ Microservices (only if needed)
```

Not directly microservices.

---

## Short Answer
Companies scale when:

```text
Traffic + bottlenecks + business needs
>
Current system capacity
```

Not simply because:

```text
users = 20k
```

That’s how real engineering decisions happen.
