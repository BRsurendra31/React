 // custom react 
    // react me thi end of the day essi tarah se hi kam chalta hai
 
 
 
    // logic for how rect renders the elements  
 function customRender(reactElement, container){
    /*
    //create domElement 
    const domElement = document.createElement(reactElement.type)// element created but it is empty
    domElement.innerHTML = reactElement.children // now a children to created element(domElement)
    domElement.setAttribute('href', reactElement.props.href)//(att, val. of attribute)
    domElement.setAttribute('target', reactElement.props.target)
    
    container.appendChild(domElement)
    */ // version two is below 

    // modular code of above 

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props ){
        if(prop === 'childeren') continue;
        domElement.setAttribute(prop, reactElement.props[prop])

    }
    container.appendChild(domElement)



}

 
 const reactElement ={
    // react try to do all the things like tree
    type : 'a',
    props : {
        href:'https://google.com',
        target:'_blank'
    },
    children: 'click me to visit google'
 }
 
 const mainContainer = document.querySelector('#root')// id "root" ko main container me store kar lete hai
 customRender(reactElement, mainContainer)
 // now i want to 'render' something like tag, or any content at the location of root's ke element k location par 
 // render simply mean inject element or something in root's element or into selected id's element
 // render also mean display a element at root's element or at selected id's element with tha help of a function/method 
// all these are above 
// flow is bottom to top 



// at the end this type of code 
 /*
 xport default function Name2() {
  return (
    <div>
      <h3>piyush</h3>
    </div>
  )
}

isconverted into -
const reactElement ={
    // react try to do all the things like tree
    type : 'a',
    props : {
        href:'https://google.com',
        target:'_blank'
    },
    children: 'click me to visit google'
 }

 this by using bundler then rander 
*/
