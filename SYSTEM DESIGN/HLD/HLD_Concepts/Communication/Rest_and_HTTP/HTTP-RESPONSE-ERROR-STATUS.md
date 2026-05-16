# HTTP Response Status Codes
HTTP response status codes indicate whether a specific request has been completed successfully or not.
Status Code Categories

Informational: 100–199
Successful: 200–299
Redirection: 300–399
Client Errors: 400–499
Server Errors: 500–599

# 1xx – Informational Responses
100 Continue
Server received request headers; client may continue sending the request body.
101 Switching Protocols
Server agrees to switch protocols (e.g., HTTP → WebSocket).

# 2xx – Successful Responses
200 OK
Request successful; response contains requested data.
201 Created
Request successful; a new resource has been created.
202 Accepted
Request accepted but processing is not completed yet (async tasks).
204 No Content
Request successful; no response body.
206 Partial Content
Partial response returned (used in file download / streaming).

# 3xx – Redirection
301 Moved Permanently
Resource permanently moved to a new URL.
302 Found / 303 See Other
Resource temporarily available at another URL.
304 Not Modified
Resource not changed; cached version can be used.
307 Temporary Redirect
Temporary redirect; HTTP method remains the same.
308 Permanent Redirect
Permanent redirect; HTTP method remains the same.

# 4xx – Client Errors
400 Bad Request
Invalid request (malformed syntax, invalid parameters).
401 Unauthorized
Authentication required or invalid credentials.
402 Payment Required
Reserved for payment-related use cases.
403 Forbidden
Authenticated but not authorized.
404 Not Found
Requested resource does not exist.
405 Method Not Allowed
HTTP method not supported for this endpoint.
408 Request Timeout
Client took too long to send the request.
409 Conflict
Request conflicts with server state (duplicate data).
410 Gone
Resource permanently removed.
422 Unprocessable Entity
Validation errors (commonly used in APIs).
429 Too Many Requests
Rate limit exceeded.

# 5xx – Server Errors
500 Internal Server Error
Unexpected server-side error.
501 Not Implemented
Feature or method not supported by server.
502 Bad Gateway
Invalid response from upstream server.
503 Service Unavailable
Server overloaded or under maintenance.
504 Gateway Timeout
Upstream server did not respond in time.



1. Default Status Codes (VERY IMPORTANT)
| Method    | Default Status |
| --------- | -------------- |
| GET       | 200 OK         |
| POST      | 201 Created    |
| PUT/PATCH | 200 OK         |
| DELETE    | 200 OK         |
