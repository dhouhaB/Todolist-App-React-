import React ,{useState,useEffect} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';
const App = () => {
  const [inputText,setInputText]= useState ("");
  const [todos,setTodos] = useState([]);
const [status,setStatus]= useState('all');
  const [filterTodos,setFilterTodos] =useState([]);
// Run once when the app start 
useEffect (() =>
{
  getLocalTodos();
},[]);
useEffect(()=>
{
  filterHandler();
  saveLocalTodos();
},[todos,status]);



const filterHandler = () => {
  switch(status){
    case 'completed':
      setFilterTodos(todos.filter(todo=>todo.completed ===true));
      break;
      case 'incompleted':
      setFilterTodos(todos.filter(todo=>todo.completed ===false));
      break;
      default:
        setFilterTodos(todos);
        break;
  }
}

const saveLocalTodos = () =>{

    localStorage.setItem("todos",JSON.stringify(todos));
  
};
const getLocalTodos = () =>{
  if (localStorage.getItem("todos")===null) {
    localStorage.setItem("todos",JSON.stringify([]));

  } else {
let todoLocal = JSON.parse(localStorage.getItem('todos'));
  setTodos(todoLocal);
}
};

  return (
    <div className='App'>
       <header>
      <h1>Todo List {inputText}</h1>
    </header>
    <Form  inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} filterTodos={filterTodos}/>
    <TodoList todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} filterTodos={filterTodos}/>
    </div>
  )
}

export default App