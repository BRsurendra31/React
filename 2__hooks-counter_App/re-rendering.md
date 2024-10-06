## Re-rendering in React ?

When the state changes in a React component, only the specific component that owns the state will re-render, not all components in the application. Here’s a more detailed explanation:

### How Re-rendering Works in React :
- 1. **Component Ownership:**
Each React component maintains its own state. When you call the state updater function (like setState from useState), it triggers a re-render of that specific component.
- 2. **Rendering Hierarchy:**
    - If a component that is part of a larger component tree changes its state, React will re-render that component and any of its child components.
    - Parent components will not re-render unless their own state or props change.
- 3. **Optimized Re-renders:**
React uses a virtual DOM and a reconciliation process to optimize rendering. It compares the virtual DOM with the real DOM to determine what has changed and only updates the necessary parts of the actual DOM.
- 4. **React.memo:**
You can further optimize component re-renders using React.memo, which prevents functional components from re-rendering if their props have not changed. This is useful for performance optimization in larger applications.

Example

```js
import React, { useState } from 'react';

function ChildA({ count }) {
  console.log('ChildA re-rendered');
  return <div>Child A: {count}</div>;
}

function ChildB() {
  console.log('ChildB re-rendered');
  return <div>Child B</div>;
}

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ChildA count={count} />
      <ChildB />
    </div>
  );
}

export default Parent;
```
Explanation <br>
- When the button is clicked, setCount updates the count state in the Parent component.
- Only Parent and ChildA will re-render because ChildA receives count as a prop. ChildB will not re-render since it does not depend on count.
- If you were to add state to ChildB, then it would re-render if its own state changes.