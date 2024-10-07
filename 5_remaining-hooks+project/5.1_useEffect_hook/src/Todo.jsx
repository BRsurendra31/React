import React from 'react'
import { useEffect, useState } from 'react';

export default function Todo() {

    const [count, setCount] = useState(0)

    // useEffect(()=>{ // useEffect without dependency arr
    //   console.log("counter is mounted");
    // }) // jitane bar component render honge i.e ya  jitane bar counter button par click hoga, useEffect utane bar run karenge - we can see it in consle
    
    /*
    useEffect(()=>{ // useEffect with empty dependency arr > mounting
        console.log("counter is mounted");
      }, []) // Empty dependency array means this effect runs only once after mounting - we can see it in consle
    */
      /*
      useEffect(()=>{ // useEffect with dependency arr with value > undation
        console.log("user updated count");
      }, [count]) // Effect runs when `count` changes
    */
  
        /*
      useEffect(()=>{ 

        return function(){
            console.log("unmount counter", count)
        }
      }, [])  // this will run when component unmount
      */

      useEffect(()=>{ 
        console.log("user updated counter", count)
        return function(){
            console.log("useEffect return counter", count)
        }
      }, [count]) 

      /*
      // on inc dec : i.e
      useEffect return counter 0
      user updated counter 1
      useEffect return counter 1
      user updated counter 2 so on 

      on toggle : i.e unmounting
      useEffect return counter 0
      user updated counter 0
      useEffect return counter 0
      user updated counter 0  
      */
    function AddCounter(){
      setCount(count+1);
    }
  
    function RemoveCounter(){
      setCount(count-1);
    }
  return (
    <div>
      <h1>useEffect</h1>
      <h3>counter value:{count}</h3>
      <div className="card">
        <button onClick={AddCounter}>
          INC
        </button>

        <button onClick={RemoveCounter}>
          DEC 
        </button>
      </div>
    </div>
  )
}

/*
// component lifecycle :
  In React, functional components do not have traditional lifecycle methods like class components 
  (e.g.
  Initialization, 
  componentDidMount,
  componentDidUpdate, 
  componentWillUnmount)
  . However, with the introduction of React Hooks, we can handle lifecycle events in functional components using the useEffect hook.

  # React Functional Component Lifecycle (using useEffect) :

  useEffect allows you to simulate lifecycle events and control how a functional component behaves at different stages (
  Initialization, 
  mounting, 
  updating,
  unmounting
  ). 

  syntax :
  useEffect(setup, dependencies?) 

  1.Component Initialization : 
  >we initialize the component

  2. Mounting :
  > When the component is first rendered (mounted),you can perform actions like data fetching, subscriptions, or setting up timers.
  >lemon words-when once component mounted, component will be visible on screen.

  code :
  useEffect(() => {
  // Code to run once after the component is mounted
  console.log("Component mounted");

  // Fetch data or perform other side effects here
}, []); // Empty dependency array means this effect runs only once after mounting

3. updating :
>When the component is updated, i.e., when state or props change, you can handle updates by passing dependencies to the useEffect hook. The effect will run every time the specified dependencies change.
> The useEffect runs after every render when one of the dependencies (count in this case) changes.

code:
const [count, setCount] = useState(0);

useEffect(() => {
  // Code to run when `count` changes
  console.log("Component updated: Count changed");

  // Any logic that depends on `count`
}, [count]); // Effect runs when `count` changes

4. Unmounting :
>When the component is about to be removed from the DOM (unmounted), you can clean up resources like subscriptions, timers, or event listeners by returning a cleanup function from useEffect.

> lemon words- when our component removed from creen its unmounting
>The cleanup function is invoked just before the component is removed from the DOM
code:
useEffect(() => {
  console.log("Component mounted");

  // Cleanup function to run on unmount
  return () => {
    console.log("Component will unmount");
    // Perform cleanup here (e.g., remove event listeners)
  };
}, []); // Empty dependency array ensures this runs once on mount and once on unmount

*/
/*
# why we use useEffect :

> when we create a application, that application performs some tasks during its lifecycle 
e.g 1. we have a component "table" jo kuchh info ko show karta h , mai chhta hu ki jab vo component mount ho then mujhe usa data ko fetch karna h means ek task dependent h component k lifecycle par.
2. jab bhi user table me edit kare or update kare to mai database me update kardu 
3. jab user table wale screen se dusare screen par chala jaye i.e unmounting, then mujhe usa data ko clear kar dena h

that means jab hame koi kam component lifecycle k bich me karna hota h then hum useEffect hook ka use karte h

*/
/*
#side effect :

> In React, a side effect is any action that happens outside the component's pure rendering. Components in React are supposed to be pure and only deal with displaying data. However, sometimes you need to interact with the outside world or do something extra—like:
  Fetching data from an API.
  Setting timers (e.g., setTimeout or   setInterval).
  Changing the document title.
  Logging to the console.
  Subscribing to events (e.g., listening to   window resize).
These actions are called side effects because they affect things beyond just rendering the component.

#Subscription :

> A subscription in useEffect refers to something your component signs up for, and it keeps listening to updates from an external source.

For example:
  -Listening for window size changes (you subscribe to window resizing events).
  -Real-time data updates (like subscribing to a WebSocket feed or a chat app).

You have to clean up (unsubscribe) when the component is no longer needed to avoid bugs or memory leaks. This is usually done in the cleanup function of useEffect.

In lemon terms: Think of subscription as subscribing to a newsletter. You keep getting updates until you unsubscribe (clean up), or you’ll keep receiving unnecessary emails (side effects) even after you don’t need them.
*/