import React, { useRef } from 'react'

const Tenth1 = () => {
    let inputRef=useRef()

    function handleClick(){
        console.log(inputRef)
        inputRef.current.focus()
        inputRef.current.value="Gaurav"
        inputRef.current.style.width="300px"
        inputRef.current.style.height="300px"
    }

    let divRef=useRef()
    function updateDiv(){
        divRef.current.style.width="300px"
        divRef.current.style.height="300px"
        divRef.current.style.backgroundColor="red"
    }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus on Button</button>

      <div ref={divRef}>

      </div>
      <button onClick={updateDiv}>update div</button>
    </div>
  )
}

export default Tenth1
