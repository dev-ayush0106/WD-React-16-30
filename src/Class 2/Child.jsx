import React from 'react'

const Child = ({father,mother}) => {
    
  return (
    <div>
      <h2>My Father name is {father}</h2>
      <h2>My Mother name is {mother}</h2>
    </div>
  )
}

export default Child
