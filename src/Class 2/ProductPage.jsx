import React from 'react'
import "./ProductPage.css"
import Productname from './Productname'
import Productprice from './Productprice'
import Productrating from './productrating'
const ProductPage = ({name,price,rating}) => {
  return (
    <div>
      <div className="container">
        <Productname name={name}/>
        <Productprice price={price}/>
        <Productrating rating={rating}/>
      </div>
    </div>
  )
}

export default ProductPage
