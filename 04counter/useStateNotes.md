# BTS of useState Hook

## All important points regarding "useState" hook

### 1.State Management Across Renders:
- React maintains a list of state variables and their update functions for each component.
- During a re-render, React updates the component with the latest state values.

### 2. useState and State Updates:

- useState adds a state variable and its update function to a list (or "hook chain").
- Calling an update function like setCounter adds the update to a queue for that state variable.
- On the next render, React processes this queue and updates the state.

### 3. State Updates are Asynchronous:

- setCounter doesn’t update the state immediately; the update occurs on the next render.

### 4. Order of State Variables:

- React tracks state variables by the order they’re declared in the component, so hooks must not be called conditionally to avoid disrupting this order.
- Functional Updates:

- Using setCounter(prevCounter => prevCounter + 1) ensures updates are based on the most recent state value, even if multiple updates occur in one render.