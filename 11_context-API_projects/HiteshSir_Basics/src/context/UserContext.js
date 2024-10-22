import React from "react";

const UserContext = React.createContext() //createContext() is method same as useState() 

export default UserContext;




/*

we can use "UserContext" as wraper(<></>) and it is work as provider :
e.g 

<UserContext>
<Login/>
<Card>
    <data/>
<Card/>
</UserContext> {</UserContext> and <UserContext/> are different things}


1. <UserContext /> (Self-closing tag)
This is a self-closing tag, which means the component does not have any children.
Example:
<UserContext />

This syntax is typically used when the component does not render or wrap any other components inside it. It's just used for components that don't require child elements or any content between the opening and closing tags.

2. </UserContext> (Closing tag for a component)
This is a closing tag, which must be paired with an opening tag like <UserContext>.

e.g
<UserContext>
  <SomeChildComponent />
</UserContext>
This is used when UserContext wraps child components or content between the opening and closing tags. It's common for components that act as wrappers (such as Context Providers or layout components).
 */