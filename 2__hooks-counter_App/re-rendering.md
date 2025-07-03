## Re-rendering in React ?

When the state changes in a React component, only the specific component that owns the state will re-render, not all components in the application. Here’s a more detailed explanation:

### How Re-rendering Works in React :
- 1. **Component Ownership:**
Each React component maintains its own state. When you call the state updater function (like setState from useState), it triggers a re-render of that specific component.
- 2. **Rendering Hierarchy:**
    - When a parent component updates its own state, it re-renders itself and all its children.
    - When a child component changes its own state, only that child re-renders — the parent does not re-render.
- 3. **Optimized Re-renders:**
React uses a virtual DOM and a reconciliation process to optimize rendering. It compares the virtual DOM with the real DOM to determine what has changed and only updates the necessary parts of the actual DOM.
- 4. **React.memo:**
You can further optimize component re-renders using React.memo, which prevents functional components from re-rendering if their props have not changed. This is useful for performance optimization in larger applications.

Example

```js
// When a parent component updates its own state, it re-renders itself and all its children.

function ChildA({ value }) {
  console.log('ChildA rendered');
  return <h2>ChildA (from props): {value}</h2>;
}

function ChildB() {
  const [childCount, setChildCount] = React.useState(0);
  console.log('ChildB rendered');

  return (
    <div>
      <h2>ChildB (own state): {childCount}</h2>
      <button onClick={() => setChildCount(childCount + 1)}>Increment ChildB</button>
    </div>
  );
}

function Parent() {
  const [parentCount, setParentCount] = React.useState(0);
  console.log('Parent rendered');

  return (
    <div>
      <h1>Parent Count: {parentCount}</h1>
      <button onClick={() => setParentCount(parentCount + 1)}>Increment Parent</button>
      
      <ChildA value={parentCount} />
      <ChildB />
    </div>
  );
}

export default Parent;

```
### What Happens When You Click "Increment Parent"

- The **parentCount** state in `Parent` changes.
- So, the `Parent` component re-renders.
- `ChildA` also re-renders because it receives the updated `parentCount` as a prop.
- `ChildB` re-renders too — even though its own state or props haven’t changed — because it is **not wrapped with `React.memo`**.
