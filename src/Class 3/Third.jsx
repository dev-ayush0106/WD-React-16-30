import React, { useState } from 'react'
import { FaHeart, FaRegHeart, FaSun } from 'react-icons/fa'
import "./third.css"
import { IoMoonSharp } from 'react-icons/io5'
const Third = () => {
    // let [count,setCount]=useState(10)
    // console.log(count)

    // function inc(){
    //     setCount(count+1)
    // }
    // function dec(){
    //     setCount(count-1)
    // }

    // let [open,setOpen]=useState(false)
    // function change(){
    //     setOpen(!open)
    // }

    // console.log(open)

    // let [status,setStatus]=useState(false)
    // console.log(status)

    let [theme,setTheme]=useState(false)

  return (
    <div>
      {/* <h1>tHIRD cLASS</h1> */}

      {/* <button onClick={inc} disabled={count>19}>+</button>
      {count}
      <button onClick={dec} disabled={count<1}>-</button> */}

        {/* Wrapper component */}
      {/* {open && <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi voluptates inventore optio? Nemo ipsum, accusantium nam vero totam aspernatur eius magnam tempora officia. Velit sed fuga sapiente nisi voluptatum veniam autem incidunt consectetur libero ex ab pariatur rem explicabo obcaecati, aut provident perspiciatis molestiae dicta cumque, blanditiis maiores. Dignissimos placeat, et molestiae inventore esse quam, at sint ipsam, illum rerum aliquam dicta tenetur itaque nihil corrupti! Quos, aperiam quod? Voluptatem, culpa soluta? Ratione, perferendis? Delectus nostrum doloribus enim, aliquid a maxime recusandae odit asperiores eius in consequuntur deleniti saepe nisi esse cupiditate vitae quo molestiae modi veritatis repellendus vel beatae.
      </div>} */}

      {/* <button onClick={change}>{(open)?"Close Para":"Show Para"}</button> */}

        {/* <FaHeart onClick={()=>{setStatus(!status)}} style={{fontSize:"3rem"}} className={(status)?"red":""}/> */}

        
        {(theme)?<FaSun style={{fontSize:"4rem"}} /> :
        <IoMoonSharp style={{fontSize:"4rem"}} />}
        <br />
        <button onClick={()=>{setTheme(!theme)}}>{theme?"Dark Mode":"Light Mode"}</button>


    </div>
  )
}

export default Third
