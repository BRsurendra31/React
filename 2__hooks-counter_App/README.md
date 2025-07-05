## Re-rendering in React ?

When the state changes in a React component, only the specific component that owns the state will re-render, not all components in the application. Here’s a more detailed explanation:

### How Re-rendering Works in React :
1. **Component Ownership:**
Each React component maintains its own state. When you call the state updater function (like setState from useState), it triggers a re-render of that specific component.
2. **Rendering Hierarchy:**
    - When a parent component updates its own state, it re-renders itself and all its children.
    - When a child component changes its own state, only that child re-renders — the parent does not re-render.

Example1

```js
// When a parent component updates its own state, it re-renders itself and all its children.

function ChildA({ value }) {
  console.log('ChildA rendered'); // re-render when parent state changes 
  return <h2>ChildA (from props): {value}</h2>;
}

function ChildB() {
  const [childCount, setChildCount] = React.useState(0);
  console.log('ChildB rendered'); // re-renders when parent state change 

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
#### What Happens When You Click "Increment Parent"

- The **parentCount** state in `Parent` changes.
- So, the `Parent` component re-renders.
- `ChildA` also re-renders because it receives the updated `parentCount` as a prop.
- `ChildB` re-renders too — even though its own state or props haven’t changed — because it is **not wrapped with `React.memo`**.

Example2

```js

When a child component changes its own state, only that child re-renders — the parent does not re-render.

function Child() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h2>Child Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Child Count</button>
    </div>
  );
}

function Parent() {
  console.log('Parent rendered'); // not re-renders

  return (
    <div>
      <h1>Parent Component</h1>
      <Child />
    </div>
  );
}

export default Parent;

```

#### What Happens When You Click the Button Inside Child

- The `Child` component updates its own state (`count`) when the button is clicked.
- Only `Child` re-renders because its state changed.
- The `Parent` does **not** re-render since its state or props didn’t change.
- In the console, you'll see `"Parent rendered"` only once (on the initial render).

</br>

3. **Optimized Re-renders:**
React uses a virtual DOM and a reconciliation process to optimize rendering. It compares the virtual DOM with the real DOM to determine what has changed and only updates the necessary parts of the actual DOM.
</br>
5. **React.memo:**
You can further optimize component re-renders using React.memo, which prevents functional components from re-rendering if their props have not changed. This is useful for performance optimization in larger applications.

Example3

```js

function ChildA({ value }) {
  console.log('ChildA rendered');  //re-render when parant state change
  return <h2>ChildA (from props): {value}</h2>;
}
//  Prevent Unnecessary Re-renders :: Use React.memo
//Wrap ChildB in React.memo:
const ChildB = React.memo(() => {
  const [childCount, setChildCount] = React.useState(0);
  console.log('ChildB rendered'); // not re-render when parent state changes, it only will  re-render when its own state changes.

  return (
    <div>
      <h2>ChildB (own state): {childCount}</h2>
      <button onClick={() => setChildCount(childCount + 1)}>Increment ChildB</button>
    </div>
  );
});


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

### Note:
**Why we say "re-rendering" instead of just "rendering"?**

- "Rendering" refers to the initial display of a component when it is first loaded on the screen.
- "Re-rendering" happens after the initial render, when React needs to update the component because:
      -its state has changed, or
      -it received new props.
- We say "re-render" to make it clear that the component was already on the page, and now React is updating it, not displaying it for the first time.

Example:

```js
function Child() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

// The first time Child appears on the screen = rendering
//Every time you click the button and count updates = re-rendering
```



