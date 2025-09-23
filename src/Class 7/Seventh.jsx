import React, { useState } from 'react'

const Seventh = () => {
    let [formData, setFormData] = useState({
        name: "",
        email: "",
        age: ""
    })

    function handleChange(e) {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev, [name]: value
        }))
    }
    let [errors,setErrors]=useState({});
    function validate(){
        let newErrors={}
        if(!formData.name.trim()){
            newErrors.err="Name is required"
        }
        else if(formData.name.trim().length<3){
            newErrors.err="Name must be greater than 3 character"
        }
        else if(formData.name.trim().length>15){
            newErrors.err="Name must be less than 15 Character"
        }
        setErrors(newErrors);

        return Object.keys(errors).length==0

    }

    function handleSubmit(e){
        e.preventDefault()
        if(validate()){
        console.log(formData)
        setFormData({name:"",email:"",age:""})
        }
    }

    console.log(errors)

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name:</label>
                <input type="text" name='name' onChange={handleChange} value={formData.name} />
                {errors && <p>{errors.err}</p>}
                <br />
                <label htmlFor="">Email:</label>
                <input type="text" name='email' onChange={handleChange} value={formData.email} />
                <br />
                <label htmlFor="">Age:</label>
                <input type="number" name='age' onChange={handleChange} value={formData.age} />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Seventh
