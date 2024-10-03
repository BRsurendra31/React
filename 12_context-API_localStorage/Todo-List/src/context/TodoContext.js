import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos : [
        {
            id :1,
            todo : "Todo msg",
            completed : false,
        }
    ],

    addTodo : (todo) =>{},
    updateTodo : (id , todo)=>{}, // for update need content to update and its id 
    deleteTodo : (id) =>{}, // need id for delete 
    toggleComplete : (id) =>{} // for topggle we need id of content to toggle 
})





export const useTodo = ()=>{
    return useContext(TodoContext) // in useContext you always have to give a contenxt - sandarbh in which you want to work
}

export const TodoProvider = TodoContext.Provider // its just for that ki TodoContext.provider n likhna pade jaha use karna 