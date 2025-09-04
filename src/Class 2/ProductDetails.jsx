import React from 'react'
import ProductPage from './ProductPage'

const ProductDetails = () => {
    let product1={
        name:"Iphone 16",
        price:50000,
        rating:9.5
    }
    let product2={
        name:"Iphone 15",
        price:40000,
        rating:9.5
    }
    let product3={
        name:"Google Pixel 9",
        price:80000,
        rating:10
    }
  return (
    <div>
      <ProductPage name={product1.name} price={product1.price} rating={product1.rating}/>
      <ProductPage name={product2.name} price={product2.price} rating={product2.rating}/>
      <ProductPage name={product3.name} price={product3.price} rating={product3.rating}/>
    </div>
  )
}

export default ProductDetails
