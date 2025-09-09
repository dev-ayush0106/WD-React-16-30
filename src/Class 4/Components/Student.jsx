import React from 'react'
import { useParams } from 'react-router-dom'

const Student = () => {
    let { id } = useParams()
    return (
        <div>
            <h1>Student Page</h1>
            <h2>Student Id is {id}</h2>
        </div>
    )
}

export default Student
