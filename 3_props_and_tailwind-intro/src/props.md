# PIXELS  
> for images  

# devUI.org  
> for components like cart, sign in/up, etc and its source code  

# props  
> props stands for properties.  
> Props are arguments passed into React components.  
> Props are also how you pass data from one component to another, as parameters.  
> React Props are like function arguments in JavaScript and attributes in HTML.  
> `props = attribute` in HTML  
> `props = func argument`  

# Example  
Add a `"brand"` attribute to the `Car` element:

```jsx
const myElement = <Car brand="Ford" />;
```

</br>
The component receives the argument as a props object:
</br>

### Example

```js
function Car(props) {
  return <h2>I am a { props.brand }!</h2>; //I am a Ford!
}
```

### Pass Data

Props are also how you pass data from one component to another, as parameters.

### Example
Send the "brand" property from the Garage component to the Car component:

```js
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```

If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets:

### Example

Create a variable named carName and send it to the Car component:

```js
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  const carName = "Ford";
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carName } />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```
