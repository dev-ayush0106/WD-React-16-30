import React from 'react'
import Child from './Child'

const Parent = () => {
    let father="Anuj"
    let mother="Sonakshi"
  return (
    <div>
      <Child father={father} mother={mother}/>
    </div>
  )
}

export default Parent
