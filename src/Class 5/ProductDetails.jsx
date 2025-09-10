import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
  return (
    <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
      <h1>{data.title}</h1>
      <img src={data.thumbnail} alt="" />
      <p style={{width:"600px"}}>{data.description}</p>
      <p>Rs.{Math.ceil(data.price*83)}</p>
      <button>Add to Cart</button>
    </div>
  )
}

export default ProductDetails
