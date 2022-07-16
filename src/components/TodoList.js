import React ,{useState} from 'react'
import Todo from './Todo'
const TodoList = ({todos,setTodos,filterTodos={filterTodos}}) => {
  return (
    <div>
        
        <div className="todo-container">
      <ul className="todo-list">

{
 
 //todos.map((todo)=>
filterTodos.map((todo)=>
 (
   <Todo todos={todos} setTodos={setTodos} text={todo.text} key={todo.id} todo={todo} />
 ))
}





      </ul>
      




    </div>   

    </div>
  )
}

export default TodoList