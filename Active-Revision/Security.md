# Frontend Security
Frontend security focuses on protecting the user interface and preventing malicious scripts from executing in the browser.

1. Input Validation
All user inputs should be validated before sending them to the server.
Example checks:
email format
password length
required fields
This prevents sending malicious or unexpected data.

2. Prevent XSS (Cross-Site Scripting)
Never render untrusted HTML directly.
Avoid:
<div dangerouslySetInnerHTML={{ __html: userInput }} />

If needed, sanitize HTML using libraries like DOMPurify.
Example malicious input:
<script>alert("Hacked")</script>

3. Secure Communication (HTTPS)
Always use HTTPS so data between browser and server is encrypted.

Without HTTPS attackers could perform Man-in-the-Middle attacks.

4. Avoid Storing Sensitive Data
Do not expose sensitive information in frontend code.
const API_KEY = "secret-key"
Instead:
store secrets in environment variables
handle sensitive logic on the server

Sensitive data like tokens should not be exposed unnecessarily.
Risky storage: localStorage.setItem("token", token)
Better approach:
Use secure cookies with HttpOnly so JavaScript cannot access them.


5. Content Security Policy (CSP)
CSP restricts which sources can load scripts or resources.
script-src 'self'

6. Avoid Exposing Secrets
Never expose:
API keys
database credentials
secret tokens
Environment variables in frontend are visible to users.



# Backend Security

Backend security focuses on protecting APIs, databases, and server resources.

1. Authentication
Authentication verifies who the user is.
Common methods:
sessions
OAuth
JSON Web Token

Example flow:
User login
↓
Server verifies credentials
↓
Server returns JWT
↓
Client sends JWT in future requests


2. Authorization
Authorization determines what a user can access.
Example roles:
Admin → can delete users
User → cannot delete users
Implemented using role-based access control (RBAC).


3. Input Validation and Sanitization
Backend must validate all incoming data.
Reason:
Frontend validation can be bypassed.
Example attacks:
SQL Injection
command injection
Example protection:
parameterized queries
ORM validation


4. Password Hashing
Passwords should never be stored as plain text.
Use hashing algorithms like:
bcrypt
Example:
password → hash → store in database


5. Rate Limiting
Limits number of requests per user/IP.
Example protection:
5 login attempts per minute
Prevents:
brute-force attacks
API abuse


6. Secure CORS Configuration
Control which domains can access your API using Cross-Origin Resource Sharing.
Example:
Allow only:
https://myfrontend.com


7. Proper Error Handling
Avoid exposing sensitive server details.
Bad example:
SQL syntax error near SELECT
Good example:
Something went wrong