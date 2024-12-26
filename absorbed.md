1. calculator to understand the basics of function references in an
   object

2. solving some of the reduce, map and filter problems involving objects.
3. making that general purpose function of objects that makes keys dynamically
   based on an operation.

```
Centralization for Repeated Logic:

If a piece of logic (e.g., updating the history) is used in multiple places, it should be centralized in one function.
This ensures that the logic is consistent and easier to maintain.
Minimizing Side Effects:

Functions like calculate and user should focus on their core responsibilities:
calculate: Perform the calculation.
user: Handle user interaction and validate inputs.
Delegating history logging to a separate logHistory function avoids polluting these core functions with unrelated logic.
Balancing Simplicity and Modularity:

While centralizing logic is good, avoid overcomplicating it. The goal is to find a balance where the code is modular but still simple to follow.
```

```
The logHistory function ensures that all history updates go through a single entry point. This centralization makes it easier to:
Modify the logging structure.
Ensure uniformity in how history is recorded.
Avoid duplicate logic.
Regardless of the scenario (valid or invalid inputs, successful or failed operation), all updates go through logHistory:
```
