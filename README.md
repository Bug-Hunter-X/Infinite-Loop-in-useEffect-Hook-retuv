# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by incorrectly using the `useEffect` hook.  The `MyComponent` component attempts to update its state within the `useEffect` hook without specifying any dependencies. This creates a continuous loop because the state change triggers a re-render, which in turn re-runs the `useEffect` hook, causing another state update.

## Solution

The solution involves correctly specifying the dependency array in `useEffect`.  If no dependencies are needed (i.e., the effect should only run once after the initial render), you should pass an empty array `[]` as the second argument.

To fix the bug, the `setCount` function should only execute when necessary. This can be achieved by changing the condition in `useEffect` to only trigger state updates under certain circumstances.