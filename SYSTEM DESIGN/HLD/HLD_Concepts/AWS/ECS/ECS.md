# AWS ECS, CPU & Memory — Practical Understanding

This document explains AWS ECS (Fargate) fundamentals, vCPU & memory behavior, comparison with local Apple M1, and the critical difference between CPU throttling and OOM kills.

## Table of Contents

1. [What is AWS ECS?](#1-what-is-aws-ecs)
2. [What Do vCPU and GiB Mean in ECS?](#2-what-do-vcpu-and-gib-mean-in-ecs)
3. [Apple M1 Pro vs AWS Fargate vCPU](#3-apple-m1-pro-vs-aws-fargate-vcpu)
4. [Strict CPU Throttling (Very Important)](#4-strict-cpu-throttling-very-important)
5. [Killed (OOM) vs Throttled (Slow)](#5-killed-oom-vs-throttled-slow)
6. [Monitoring ECS Correctly](#6-monitoring-ecs-correctly)
7. [Best-Practice ECS Sizing (Node / NestJS APIs)](#7-best-practice-ecs-sizing-node--nestjs-apis)
8. [Cost Model (Fargate)](#8-cost-model-fargate)
9. [Final Mental Models](#9-final-mental-models)

---

## 1. What is AWS ECS?

**ECS (Elastic Container Service)** is a managed container orchestration service by Amazon Web Services that runs Docker containers without managing Kubernetes.

### Core ECS Concepts

| Term | Meaning |
|------|---------|
| **Cluster** | Logical group where containers run |
| **Task Definition** | Blueprint of containers (image, CPU, memory) |
| **Task** | A running instance of a task definition |
| **Service** | Keeps tasks running and handles scaling |
| **Launch Type** | EC2 or Fargate |

### Fargate (Recommended)

- **Serverless containers** - No infrastructure management
- **No EC2 management** - AWS handles the underlying infrastructure
- **Pay only for CPU & memory used** - Cost-effective for variable workloads
- **Strict resource isolation** - Each task gets dedicated resources

---

## 2. What Do vCPU and GiB Mean in ECS?

When an ECS task is running, **vCPU** and **GiB** define hard resource limits.

### vCPU (CPU Allocation)

- **1 vCPU ≈ 1 logical CPU core**
- **CPU is strictly limited** - Cannot exceed allocated amount
- **If exceeded → throttled (slowed)** - Process is paused, not killed

| vCPU | Meaning |
|------|---------|
| 0.25 | 25% of one core |
| 0.5 | Half a core |
| 1 | One full core |
| 2 | Two full cores |

> **Important:** CPU is **not burstable** in Fargate. You cannot exceed your allocated vCPU.

### GiB (Memory Allocation)

- **1 GiB = 1024 MB RAM**
- **Memory is exclusive** - Reserved for your task only
- **If exceeded → process killed (OOM)** - Out of Memory kill

> **Critical:** Memory is a **hard wall**, not flexible. Exceeding it results in immediate termination.

### Valid Fargate CPU–Memory Pairs

| vCPU | Memory (GiB) |
|------|--------------|
| 0.25 | 0.5 – 2 |
| 0.5 | 1 – 4 |
| 1 | 2 – 8 |
| 2 | 4 – 16 |

---

## 3. Apple M1 Pro vs AWS Fargate vCPU

### Apple M1 Pro CPU

- **8-core or 10-core CPU** - Multiple cores available
- **Performance + Efficiency cores** - Hybrid architecture
- **Very high single-core performance** - Optimized for speed
- **Allows CPU bursting** - Can temporarily exceed normal limits

### AWS Fargate vCPU

- **Fixed virtual CPU slice** - Predetermined allocation
- **Homogeneous cores** - Consistent performance
- **Hard CPU cap** - Cannot exceed limit
- **Predictable but slower per core** - More consistent, less peak performance

### Practical Comparison

| Aspect | Local M1 Pro | Fargate vCPU |
|--------|--------------|--------------|
| **Bursting** | Yes | No |
| **Throttling** | Rare | Always enforced |
| **Performance** | Very fast | Predictable |
| **Scaling** | Manual | Automatic |
| **Cost** | Free after purchase | Pay per second |

> **Mental Model:** 1 M1 performance core ≈ 1.5–2 Fargate vCPU (rough estimate)

---

## 4. Strict CPU Throttling (Very Important)

**Strict CPU throttling** means: **Your task can never exceed its allocated vCPU.**

### How It Works

- **Enforced via Linux cgroups** - Container-level resource limits
- **CPU time is limited per scheduling window** - Time-sliced allocation
- **Extra CPU usage → process is paused** - Not killed, just slowed down

### Symptoms

- **High latency** - Requests take longer to process
- **CPUUtilization ~100%** - Constantly hitting the limit
- **No crashes** - Application continues running
- **Requests pile up** - Queue builds up behind slow processing

> **Warning:** CPU throttling happens **before scaling reacts**. Your autoscaling may not trigger fast enough to prevent user impact.

---

## 5. Killed (OOM) vs Throttled (Slow)

### One-Line Difference

- **OOM** → memory exceeded → **process killed**
- **Throttling** → CPU exceeded → **process slowed**

### Side-by-Side Comparison

| Aspect | Killed (OOM) | Throttled (CPU) |
|--------|--------------|-----------------|
| **Resource** | Memory | CPU |
| **Behavior** | Process terminated | Process slowed |
| **Visibility** | Easy | Hard |
| **App crash** | Yes | No |
| **User impact** | Errors | High latency |
| **Recovery** | Auto restart | Continues degraded |

### Why CPU Throttling Is More Dangerous

- **No crashes** - Application appears to be running
- **No obvious logs** - Silent degradation
- **Latency slowly increases** - Gradual performance decline
- **Users complain before alerts fire** - Hard to detect automatically

> **Insight:** Many teams prefer OOM crashes over silent throttling because crashes are immediately visible and trigger alerts.

---

## 6. Monitoring ECS Correctly

### Key CloudWatch Metrics

1. **CPUUtilization** - Percentage of allocated CPU being used
2. **MemoryUtilization** - Percentage of allocated memory being used
3. **RunningTaskCount** - Number of active tasks
4. **Task restarts** - Frequency of task terminations and restarts

### Red Flags

| Metric | Meaning |
|--------|---------|
| **CPU > 80%** | Scale or increase vCPU |
| **Memory > 70%** | Risk of OOM |
| **Frequent restarts** | Memory issue (likely OOM kills) |

### Monitoring Best Practices

- Set up CloudWatch alarms for CPU and memory thresholds
- Monitor task restart frequency
- Track request latency alongside resource metrics
- Use CloudWatch Logs Insights for detailed analysis

---

## 7. Best-Practice ECS Sizing (Node / NestJS APIs)

### Recommended Configurations

| Environment | Recommendation |
|-------------|----------------|
| **Development** | 0.5 vCPU / 1 GiB |
| **Production API** | 1 vCPU / 2 GiB |
| **High traffic** | 2+ vCPU / 4+ GiB |

### Rules

- ❌ **Avoid 0.25 vCPU for APIs** - Too constrained, will throttle frequently
- ✅ **Prefer horizontal scaling** - Add more tasks instead of larger tasks
- ✅ **Alert on CPU & memory** - Set up proactive monitoring
- ✅ **Monitor from day one** - Don't wait for production issues

### Scaling Strategy

1. **Start conservative** - Begin with recommended sizes
2. **Monitor closely** - Watch for throttling and memory pressure
3. **Scale horizontally first** - Add more tasks before increasing task size
4. **Adjust task size only when needed** - Larger tasks cost more

---

## 8. Cost Model (Fargate)

### Pricing Formula

You pay for:

```
Cost = (vCPU × time) + (GiB × time)
```

### Cost Implications

- **Doubling CPU or memory → doubling cost** - Linear scaling
- **Billed per second** - Pay only for running time
- **No idle charges** - Stop tasks to stop costs

### Cost Optimization Tips

- Right-size your tasks - Don't over-provision
- Use auto-scaling to scale down during low traffic
- Consider spot instances for non-critical workloads (EC2 launch type)
- Monitor and adjust based on actual usage patterns

---

## 9. Final Mental Models

### Key Takeaways

- **vCPU = how fast** - Determines processing speed
- **GiB = how much** - Determines data capacity
- **Memory failure is loud** - OOM kills are immediately visible
- **CPU failure is silent** - Throttling is hard to detect
- **Local machines hide performance problems** - Development environment is forgiving
- **Fargate exposes real limits** - Production reveals true resource needs

### Decision Framework

When choosing resources:

1. **Start with memory** - Estimate based on application needs
2. **Match CPU to workload** - I/O-bound vs CPU-bound
3. **Monitor and adjust** - Use metrics to optimize
4. **Scale horizontally** - Prefer more tasks over larger tasks

---

## Additional Resources

- [AWS ECS Documentation](https://docs.aws.amazon.com/ecs/)
- [Fargate Pricing](https://aws.amazon.com/fargate/pricing/)
- [CloudWatch Metrics for ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-metrics.html)
