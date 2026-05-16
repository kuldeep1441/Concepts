🔷 1. What is an API Gateway?
An API Gateway is a central entry point point for api's it sits between clients and backend services.

👉 It is a smart layer that:
Receives all requests
Applies policies (auth, rate limits)
Routes to the correct service
Optionally aggregates responses


🔷 3. Core Responsibilities (What Gateway Actually Does)
🔐 Authentication & Authorization
JWT, OAuth validation
🔀 Routing (Smart Router)
/users  → User Service
/orders → Order Service
📦 Aggregation
Combines multiple service responses
⚡ Rate Limiting
Prevents abuse
🔄 Request/Response Transformation
Modify headers, formats, versions
🧾 Logging & Monitoring
Central observability point

🔷 4. API Gateway vs Load Balancer
🔑 Key Idea:
Load Balancer = distribution
API Gateway = control + routing
⚖️ Comparison
| Feature       | API Gateway 🧠     | Load Balancer ⚖️    |
| ------------- | ------------------ | ------------------- |
| Purpose       | Manage requests    | Distribute traffic  |
| Routing       | Smart (path-based) | Basic / algorithmic |
| Auth          | ✅ Yes              | ❌ No                |
| Aggregation   | ✅ Yes              | ❌ No                |
| Rate limiting | ✅ Yes              | ❌ No                |
| Level         | Application (L7)   | L4 / L7             |
