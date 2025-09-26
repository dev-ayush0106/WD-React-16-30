import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { add } from '../Class 12/redux/cartSlicer/cartSlicer';

const ProductDetails = () => {
  let [data, setData] = useState({});

  let { id } = useParams()
  let url = `https://dummyjson.com/products/${id}`

  function fetchData() {
    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((e) => {
        setData(e);
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(data)

  let dispatch=useDispatch()

  function addToCart(data){
    dispatch(add(data))
  }

  let cartProducts=useSelector((state)=>state.cart)
  console.log(cartProducts)
  return (
    <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
      <h1>{data.title}</h1>
      <img src={data.thumbnail} alt="" />
      <p style={{width:"600px"}}>{data.description}</p>
      <p>Rs.{Math.ceil(data.price*83)}</p>
      <button onClick={()=>{addToCart(data)}}>Add to Cart</button>
    </div>
  )
}

export default ProductDetails
