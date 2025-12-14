# Custom Rate Limiter
A custom rate-limiting technique built using Node.js without third-party libraries.
Every time a request is made, it stores the current timestamp and checks how many requests were made within the last fixed time window (for example, 1 minute). If the count exceeds the allowed limit, the request is blocked.

## What is Rate Limiting?
Rate limiting is a technique used to control the number of requests a client can make to your server in a given time window.
It’s essential to prevent abuse, protect server load, and ensure fair usage.

## Technologies Used:
- Node JS
- Express JS

***Note : ***
This implementation is for learning purposes only, intended to understand the basic mechanism behind rate limiting.
It is not scalable and not suitable for real-world production use, as it does not scale well.
Additionally, memory usage can grow indefinitely if stored timestamps are not properly cleaned up.