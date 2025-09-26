import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './slicer/counterSlice'
import { number } from 'motion'

const Eleventh = () => {
   let value = useSelector((state)=>state.counter.value)
   console.log(value)

   let dispatch=useDispatch()

   function handleIncrease(){
    dispatch(increment())
   }
   function handleDecrease(){
    dispatch(decrement())
   }
   function handleReset(){
    dispatch(reset())
   }

   let [amount,setAmount]=useState(0)

   function handleIncByAmt(){
    dispatch(incrementByAmount(Number(amount)))
   }
  return (
    <div>
      {/* 
        action
        slice ( feature )
        reducer ( functions )
        store ( update the value )
        ui
      */}

        <button onClick={handleIncrease}>+</button>
            <h1>{value}</h1>
        <button onClick={handleDecrease}>-</button>
        <br /><br />

        <button onClick={handleReset}>Reset</button>

        <br />
        <br />

        <input type="Number"
        value={amount}
        placeholder='Enter Amount'
        onChange={(e)=>{
            setAmount(e.target.value)
        }}
        />
        <button onClick={handleIncByAmt}>ADD</button>
    </div>
  )
}

export default Eleventh
