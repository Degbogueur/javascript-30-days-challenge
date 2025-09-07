## Day 13 – Scope & Closures

### Exercises
1. Write a function that has a local variable and tries to access it outside (see what happens).
2. Write a function `makeCounter` that returns another function which increments a count each time it’s called.
    ```
    const counter = makeCounter();
    counter(); // 1
    counter(); // 2
    ```
3. Demonstrate the difference between `var`, `let`, and `const` scope inside a loop.
4. Write a function that remembers a message and always returns it when called.
