import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


// const reactElement ={
//   // react try to do all the things like tree
//   type : 'a',
//   props : {
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children: 'click me to visit google'
// }// this object is not render below bcz it is custom element created by me
    // which tags and syntax are not maytched with actual react bundeler ,and we cant rander it into react dom 


// 1. matching obj as react bundler
  /*
const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

*/

// 2. matching obj as bundler more similar as customReact element

const reactElement =React.createElement(
    'a',
    {href : 'https://google.com', target :'_blank' },
    'click me to visist google'


) 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //anotherElement
  reactElement


);

/*
   that means react khud k according kuchh bhi custom chize allow nahi kar raha
   but not as framework bcz react me kuch chize hum custom bana kar chala sakte hai 
   as above but not in framework
   
   */
  