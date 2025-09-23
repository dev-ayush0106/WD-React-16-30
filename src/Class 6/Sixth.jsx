import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Sixth = () => {
    const{
        register,
        handleSubmit,
        watch,
        formState:{errors}
    }=useForm()

    function handleData(data){
        console.log(data)
    }

    let [data,setData]=useState([])

    function dataInput(d){
        setData(d.name)
        console.log(d)
        
    }
    
    // console.log(data)


  return (
    <div>
      {/* <form onSubmit={handleSubmit(handleData)} action="">
        <label htmlFor="">First Name:</label>
        <input type="text" 
        {...register("firstname",
        {required:{value:true,message:"Charcter Required"},minLength:{value:3,message:"Minimum 3 Charater Needed"},maxLength:{value:5,message:"Maximum 5 Character Allowed"}}
        )}/>

        {
            errors.firstname && <p>{errors.firstname.message}</p> 
        }
        <br />
        <label htmlFor="">Second Name:</label>
        <input type="text" 
        {...register("secondname",
        {required:true,minLength:{value:3,message:"Minimum 3 Charater Needed"},maxLength:{value:5,message:"Maximum 5 Character Allowed"}}
        )}/>
        {
            errors.secondname && <p style={{color:"red"}}>{errors.secondname.message}</p> 
        }
        <br />
        <input type="submit" />
      </form> */}
    <form action="" onSubmit={handleSubmit(dataInput)}>
        <input type="text" {...register("name",{required:true})}/>
        <input type="submit"  />
        </form>
        {
            <p>{data}</p>
        }
    </div>
  )
}

export default Sixth
