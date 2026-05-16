# REST API design (CRUD, pagination, filtering)
WHAT:
REST (Representational State Transfer) is a way to design APIs using:
Resources (users, orders, products)
HTTP methods (GET, POST, PUT, DELETE)
Stateless communication
GET /users
POST /users
GET /users/:id

HOW:
🔹 Rule 1: Use Nouns, NOT Verbs:
| Action      | Method    | Endpoint     |
| ----------- | --------- | ------------ |
| Get users   | GET       | `/users`     |
| Create user | POST      | `/users`     |
| Update user | PUT/PATCH | `/users/:id` |
| Delete user | DELETE    | `/users/:id` |

🔹 Rule 2: Use Plural Names : 👉 /users represents a collection of users, even when fetching one.
✅ Good:
/users
/products
/orders

❌ Bad:
/user
/product

🔹 Rule 3: Use Hierarchy for Relationships
❌ Bad:
/getUserOrders

✅ Good:
/users/:userId/orders
👉 Shows relation clearly

🔹 Rule 5: Use Query Params for Filtering
❌ Bad:
/getUsersByStatus

✅ Good:
/users?status=active

🔹 Rule 7: Keep It Simple & Predictable
❌ Avoid:
/fetchAllUsersDataNow

✅ Prefer:
/users

🔹 Rule 8: Version Your APIs : 👉 Prevents breaking existing clients
/v1/users
/v2/users

🔹 Rule 9: Use Consistent Naming Style
Choose one:
kebab-case → /user-profiles
snake_case → /user_profiles
👉 Most common: kebab-case

⚡ Quick Cheat Sheet
GET    /resources        -> list
GET    /resources/:id   -> get one
POST   /resources       -> create
PATCH  /resources/:id   -> update
DELETE /resources/:id   -> delete



WHY:
1. HTTP methods already represent verbs(Action)
GET /users
POST /users
DELETE /users/:id

2. APIs become predictable
/users
/users/:id
/users/:id/orders

3. Resource-oriented design (core REST idea)
REST = Resources + Representations
A resource is a thing, not an action:
users
orders
products
👉 URLs should represent entities, not behavior.