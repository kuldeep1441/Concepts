# OAuth 2.0 & OpenID Connect (OIDC) — short guide

**OAuth 2.0** = *“May this app access something on the user’s behalf?”* → you get an **access token** (authorization).

**OIDC** = *“Who is this user?”* → adds an **ID token** (usually a JWT) on top of the same OAuth-style flow (authentication).

**“Sign in with Google”** = **OAuth + OIDC together**: Google checks the password; your app never sees it. You only get tokens and trust Google’s answer.

---

## The two tokens (remember this)

| Token | Means | Use it for |
|--------|--------|------------|
| **Access token** | “Allowed to call this API / resource” | `Authorization: Bearer …` to APIs |
| **ID token** (JWT) | “Here is who signed in” (`sub`, email, name, …) | Create session / user row in **your** DB |

> OAuth alone does **not** standardize “login identity.” OIDC adds that with the **ID token**.

---

## Who is who (OAuth roles)

| Role | You can think… |
|------|----------------|
| **Resource owner** | The user |
| **Client** | Your app (frontend + backend) |
| **Authorization server** | Google / Auth0 / Okta — login + consent + issues tokens |
| **Resource server** | The API that accepts the **access token** |

---

## Flow: “Sign up / Sign in with Google” (authorization code)

1. User clicks **Sign in with Google** → your app sends them to **Google** (not your login form).
2. User enters **email + password on Google only** — your app never stores or sees that password.
3. Google shows **consent** (“Allow this app to see profile & email?”).
4. Google redirects back to your app with a **`code`** in the URL, e.g. `https://yourapp.com/callback?code=abc123`.
5. Your **backend** trades that `code` for tokens (keeps secrets off the browser). Response is typically like:

   ```json
   {
     "access_token": "...",  -> to access apis
     "id_token": "..."       -> contains user deatils allow server to access user details
   }
   ```

6. You **validate** the **ID token** (signature, issuer, audience, expiry), read claims (email, name, Google user id in `sub`), then **create or load the user** in your DB and **log them in** (your own session or JWT).

**Scopes:** OIDC needs **`openid`**; often **`profile`** and **`email`** for basic profile data.

---

## One-line cheat sheet

| | OAuth 2.0 | OIDC | JWT |
|---|-----------|------|-----|
| **What** | Authorization framework | Identity layer **on** OAuth | A **format** for tokens (claims + signature) |
| **Star artifact** | Access token | ID token | Used **inside** many ID tokens |

---

## In Google Sign-In using OpenID Connect, we receive both an access token and an ID token. The ID token is a JWT that contains the user’s identity and is used by the backend to authenticate the user, while the access token is used to call Google APIs.

⚔️ Access Token vs ID Token (VERY IMPORTANT)
| Feature            | Access Token          | ID Token       |
| ------------------ | --------------------- | -------------- |
| Used by            | Google APIs           | Your backend   |
| Contains user info | ❌ Not reliable        | ✅ Yes          |
| Format             | May or may not be JWT | Always JWT     |
| Purpose            | Authorization         | Authentication |

An Access Token is a credential that says:
“This app is allowed to access specific Google resources on behalf of the user.”

👉 Both tokens are issued by Google’s Authorization Server



⚙️ Step-by-step (Real Flow)
1. Google Login happens

User signs in via Google

Google returns:

ID Token (JWT)

Access Token

2. Backend receives ID Token

Your frontend sends ID token to backend:

POST /auth/google
{
  "idToken": "..."
}
3. Backend verifies ID Token

Check signature (Google public keys)

Validate:

aud (your client_id)

iss (accounts.google.com)

exp (not expired)

4. Extract user info

From ID token:

{
  "sub": "123456789",
  "email": "user@gmail.com",
  "name": "Kuldeep"
}
5. Create / find user in DB

If new → create user

Else → fetch existing user

6. 🔥 NOW backend issues JWT
{
  "userId": "internal-db-id",
  "email": "user@gmail.com",
  "role": "user"
}

👉 This is your application JWT

7. Send JWT to frontend
{
  "accessToken": "your-app-jwt"
}
8. Used in every API call
Authorization: Bearer <your-app-jwt>
📊 Visual Timeline
User → Google Login
     → Google returns ID Token
     → Backend verifies ID Token
     → Backend creates user (if needed)
     → Backend issues JWT ✅
     → Client uses JWT for APIs
🧠 Key Insight (VERY IMPORTANT)

👉 Google ID Token = Proof of identity (one-time use)
👉 Your JWT = Session token (used everywhere)