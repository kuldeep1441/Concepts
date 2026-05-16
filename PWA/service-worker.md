# 🧠 1. WHAT is a Service Worker?
A Service Worker is a background script that sits between your app and the network.

👉 A Service Worker is a background script that intercepts the network requests

Browser → Service Worker → Internet

👉 It can:
Intercept requests
Cache responses
Return cached data
Work even when offline


# ❓ 2. WHY Service Workers exist?
Without Service Worker:
User → Request → Server → Response
With Service Worker:
User → Service Worker → (Cache OR Server) → Response

Problem it solves:
Slow network ❌
No offline ❌
Repeated API calls ❌

Solution:
Instant loading ⚡
Offline support 📡
Smart caching 🧠


# ⚙️ 3. HOW it works (core concepts)
🧩 3.1 Runs separately from your app
No direct DOM access ❌
Event-driven ✅
Runs even when tab is closed (limited)


