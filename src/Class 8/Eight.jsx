import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import "./eight.css"
import { toast } from 'react-toastify';

const Eight = () => {
    let [todo, setTodo] = useState([]);
    let [title, setTitle] = useState("")

    function handleSubmit(e) {
        e.preventDefault();

        let newTodo = { // this will create new todo
            id: nanoid(),
            title: title,
            isCompleted: false
        }

        let copyTodo = [...todo] // in copy todo i have transfred all data of todo
        copyTodo.push(newTodo)

        setTodo(copyTodo)
        setTitle("")

        toast.success("Todo Created!!")
    }
    console.log(todo);


    function handleChange(e) {
        setTitle(e.target.value)
    }

    const toggleTask =(id)=>{
        setTodo((prevTodo)=>
            prevTodo.map((t)=>
                t.id == id ?{...t , isCompleted:!t.isCompleted}  : t
            )
        )

        console.log(todo)
    }

    const deleteTodo=(id)=>{
        let filteredTodo=todo.filter((el)=>id!==el.id) // filter function helps us to filterout the data from the array
        setTodo(filteredTodo)
        toast.error("Todo Deleted")
    }
    return (
        <div>
            <h1>Todo App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={handleChange} />
                <input type="submit" />
            </form>

            {todo.map((el) => (
                <div style={{ display: "flex" }}>
                    <p className={(el.isCompleted)?"line":""} onClick={()=>{toggleTask(el.id)}}>{el.title}</p>
                    <button onClick={()=>{deleteTodo(el.id)}}>Delete Todo</button>
                </div>
            ))}
        </div>
    )
}

export default Eight
