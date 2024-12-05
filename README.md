# React useEffect Hook Missing Cleanup Function

This repository demonstrates a common error in React applications involving the `useEffect` hook: forgetting to include a cleanup function.  The provided code snippet showcases an example where an asynchronous operation is initiated within `useEffect`, but lacks the necessary cleanup to prevent memory leaks or unexpected behavior when the component unmounts. A solution is also provided demonstrating the correct implementation of the cleanup function.

## Problem:
The `useEffect` hook is used to perform side effects after rendering.  When using asynchronous operations within the effect, it's essential to return a cleanup function that cancels or cleans up the effect when the component is unmounted or when the effect's dependencies change. Failing to do so can result in:

- **Memory leaks**:  Resources allocated by the asynchronous operation may not be released.
- **Unexpected behavior**: The component might react to outdated data or continue processing after it's no longer needed. 

## Solution:
The solution is to return a cleanup function from the `useEffect` callback. This cleanup function will be executed before the next effect runs or when the component unmounts, allowing you to cancel requests, clear timers, or detach event listeners.
