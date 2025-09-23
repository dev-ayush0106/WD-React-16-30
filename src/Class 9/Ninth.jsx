import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const Ninth = () => {
    let [todo,setTodo]=useState([])

    const{
        handleSubmit,
        register,
        reset,
        formState:{errors}
    }=useForm()

    function getTodo(data){
        data.id=nanoid()
        data.isCompleted=false

        setTodo([...todo,data]);
        // console.log(data)
        reset()
        toast.success("Todo Created")
    }

    console.log(todo)
  return (
    <div>
      <form action="" onSubmit={handleSubmit(getTodo)}>
        <input type="text" {...register("title")}/>
        <input type="submit" />
      </form>
    <ul>
      {
        todo.map((el)=>(
            <li key={el.id}>{el.title}</li>
        ))
      }
      </ul>
    </div>
  )
}

export default Ninth
