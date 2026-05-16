A global exception filter catches all errors across your app and formats the response in a consistent way.
Global exception filters ensure consistent error handling, centralize logging, and prevent leaking internal errors.

An interceptor modifies every response before sending it to client.
Why
Without it:
Every controller returns different structure ❌
With it:
Standard response format ✅
Cleaner controllers ✅

