import { div, h1 } from 'motion/react-client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decCartItem, incCartItem, remove } from './redux/cartSlicer/cartSlicer'

const Cart = () => {
  const cartProducts=useSelector((state)=>state.cart)
  let dispatch=useDispatch()

  function handleRemove(data){
    dispatch(remove(data))
  }

  function increaseCart(data){
    dispatch(incCartItem(data))
  }
  function decreaseCart(data){
    dispatch(decCartItem(data))
  }

  console.log(cartProducts);
  return (
    <div>
      <h1>Cart Page</h1>
      <div>
        {
          cartProducts.map((el)=>(
            <div style={{display:"flex",justifyContent:"space-between",borderBottom:"2px solid black",padding:"30px 100px"}}>
              <div className="left">
              <img src={el.thumbnail} alt="" />
              </div>

              <div className="right">
                <h2>{el.title}</h2>
                <p>{`Rs ${Math.ceil(el.price*83)}`}</p>
                <button onClick={()=>{increaseCart(el.id)}}>+</button>
                <span>Quantity:{el.quantity}</span>
                <button onClick={()=>{decreaseCart(el.id)}}>-</button>
                <br />
                <button style={{backgroundColor:"red",color:"white"}}
                onClick={()=>{handleRemove(el.id)}}
                >Remove From Cart</button>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart
