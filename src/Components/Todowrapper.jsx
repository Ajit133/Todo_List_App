import React, { useState } from 'react';
import TodoForm from './TodoForm';
import {v4 as uuidv4} from "uuid";
import Todo from './Todo';
import EditTodoForm from './EditTodoform';

const Todowrapper = () => {
    const [todos,setTodos] = useState([]);
    const [completed,setComplated] = useState()


    const addTodo = (todo)=>{
             setTodos([...todos,{id : uuidv4(),task:todo,completed:false,isEditing:false}])
            //  console.log(todos);
    }

    const toggleComplete = (id)=>{
         setTodos(todos.map(todo => todo.id === id ? {...todo,completed: !todo.completed} : todo))
        // setComplated(todos.filter(todo=>todo.id !== id))
        
    }

    const deleteTodo = (id) =>{
        setTodos(todos.filter(todo=>todo.id !== id))
        
    }

    const editTodo = (id)=>{
          setTodos(todos.map(todo => todo.id === id?{...todo,isEditing:!todo.isEditing} : todo))
    }

    const editTask = (task,id) =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo,task,isEditing:!todo.isEditing}: todo))
    }

    return (
        <div className='TodoWrapper'>
            <TodoForm addTodo={addTodo} />
             {todos.map((todo,index)=>(
                todo.isEditing ? (
                    <EditTodoForm key={index} editTodo={editTask} task={todo} />
                ) : (
                <Todo task={todo} key={index} deleteTodo={deleteTodo} editTodo={editTodo} toggleComplete={toggleComplete} />
             )
             ))}
        </div>
    );
};

export default Todowrapper;