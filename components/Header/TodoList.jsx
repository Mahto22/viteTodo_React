import React, { useState } from 'react'
import './TodoList.css';

function TodoList() {
    const [todo,setTodo] = useState('');
    const [todos,setTodos] = useState([]);
    const [editTodoId,setEditTodoId] = useState(0);
    
    const handleSubmit = (e)=>{
        e.preventDefault();

        if(editTodoId){
            const editTodoCheck = todos.find((i) => i.id === editTodoId);

            const updateTodos = todos.map((updateItem) =>
            updateItem.id === editTodoCheck.id
            ? (updateItem = {id:updateItem.id, todo})
            : {id:updateItem.id,todo:updateItem.todo}
        );
        setTodos(updateTodos);
        setEditTodoId(0);
        setTodo('');
        return;
        }
        if(todo !== ''){
            setTodos([{id:`${todo}-${Date.now()}`,todo}, ...todos]);
            // empty input field after add
            setTodo('');
        }
    }

    const handleEdit = (id) =>{
        const editTodo = todos.find((editId) => editId.id === id);
        setTodo(editTodo.todo);
        setEditTodoId(id);
    };

    const handleDelete = (id) =>{
        const deleteTodo = todos.filter((deleteId) =>deleteId.id !== id);
        setTodos([...deleteTodo]);
    }
  return (
    <>
        <div className='todoApp'>
        <div className='container'>
        <h2>Todo List App</h2>
        <form className='todo_Form' onSubmit={handleSubmit}>
            <input type='text' value={todo} onChange={(e) => {setTodo(e.target.value)}}></input>
            <button type='submit'>{editTodoId ?'Edit' : 'Add'}</button>
        </form>

        <ul className='ulTodos'>
        {
            todos.map((items) =>(
            <li className='liTodos'>
            <span className='spanText' key={items.id}>{items.todo}</span>
            <button onClick={() =>{handleEdit(items.id)}}>Edit</button>
            <button onClick={() =>handleDelete(items.id)}>Delet</button>
            </li>
            ))}
        </ul>
        </div>
        </div>
    </>
  )
}

export default TodoList