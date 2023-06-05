import React from 'react'
import {v4 as uuidv4} from "uuid" 
//is used to generate a unique identifier for each new todo item added to the todos array.

 const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
    //takes 3 argument
     const updateTodo = (title, id, completed) =>{
         const newTodo = todos.map((todo) => todo.id === id ? 
         {title, id, completed} : todo); 
         setTodos(newTodo);
         setEditTodo(""); 
        }; 
        const onInputChange = (event) =>{
             setInput(event.target.value); };
              const onFormSubmit = (event) =>{
                 event.preventDefault();
                  if
                  (!editTodo){
                    setTodos([...todos, {id: uuidv4(),
                         title: input, completed: false}]);
                    setInput("");
                } 
                    else 
                    {updateTodo(input, editTodo.id, editTodo.completed)
                     } 
                    }
                     return (
                     <form onSubmit={onFormSubmit}>
                         <input type="text"placeholder='Enter a Todo...'
                         className='task-input'value={input}
                          required onChange={onInputChange}/>
                          <button className='button-add'>Add</button>
                           </form>
                           )}
                           export default Form;