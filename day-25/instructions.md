## Day 25 – Bigger Challenge: Fake API Fetcher

### Challenge
Simulate a **fake API** that fetches posts and comments:

- Function `fetchPosts()` returns a promise that resolves after 2 seconds with:
```
[
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" }
]
```
- Function `fetchComments(postId)` returns a promise that resolves after 1 second with:
```
[
  { postId: 1, text: "Nice post!" },
  { postId: 1, text: "Thanks for sharing" }
]
```
**Tasks:**
- Fetch all posts.
- For each post, fetch its comments.
- Print the results in this format:
```
Post One:
 - Nice post!
 - Thanks for sharing
Post Two:
 - (no comments)
```
