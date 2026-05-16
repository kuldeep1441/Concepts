# PAGINATION :
Pagination = breaking large datasets into smaller chunks (pages)
Instead of:
GET /users   ❌ (returns 1M users)
We do:
GET /users?page=1&limit=10

Why
Prevents server overload
Faster response time
Better UX (infinite scroll, tables)
Reduces DB + network cost

# Types of Pagination (CORE)
There are 3 major types:
Offset-based (page/limit)
Cursor-based (recommended for scale)
Keyset pagination (optimized cursor)

# Offset-Based Pagination
Uses page number + limit
GET /users?page=2&limit=10

Backend logic:
const page = 2
const limit = 10

const skip = (page - 1) * limit
User.find()
  .skip(skip)
  .limit(limit)

Why it's used
Simple
Easy for frontend
Works well for small datasets

# ❌ Problems (VERY IMPORTANT)
1. Slow for large data
skip(1000000) ❌
👉 DB scans & skips rows → performance hit

2. Inconsistent results
If new data is inserted or deleted
👉 Offset pagination depends on row positions, (like skip 10 rows then return 10 rows)
but data is constantly shifting


# Cursor-Based Pagination (IMPORTANT)
Uses a pointer (cursor) instead of page number
GET /users?cursor=abc123&limit=10

HOW:
User.find({ _id: { $gt: cursor } })
  .sort({ _id: 1 })
  .limit(10)

Why it's better
No skipping → fast
Stable results
Works with infinite scroll

# Important Rule
Cursor must be:
Unique
Indexed
Ordered (e.g., _id, createdAt)

# ❌ Downsides
No random page access
Slightly complex
🧠 When to use
Social feeds
Large datasets
Production systems

# Keyset Pagination (Advanced)
Optimized version of cursor pagination using multiple fields

GET /orders?createdAt=2024-01-01&id=abc123
{
  $or: [
    { createdAt: { $gt: lastCreatedAt } },
    {
      createdAt: lastCreatedAt,
      _id: { $gt: lastId }
    }
  ]
}


# 🔥 Correct Order: Filtering → Sorting → Pagination (limit/skip or cursor)

