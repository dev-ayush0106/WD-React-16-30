import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProductData from './ProductData';

const Fifth = () => {
    let [productsData,setProductsData]=useState([]);

    // useEffect() : This is a Hook
    // This have 3 usage :
    // 1. Run without any dependency
    // 2. Run with dependency
    // 3. Run With empty array(this is commonly used for api fetching)

    let url="https://dummyjson.com/products?limit=500";

    function dataFetch(){
        fetch(url)
        .then((res)=>{
            return res.json() ;// promise
        })
        .then((data)=>{
            // console.log(data);
            setProductsData(data.products)
        })
    }

    useEffect(()=>{
        dataFetch()
    },[])

    console.log(productsData)
    
    
  return (
    <div>
      <h1>Api Fetch</h1>
      <div style={{display:"flex",justifyContent:"space-between",padding:"30px"}}>
        <h2>Logo</h2>
        <h2>Cart</h2>
      </div>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"30px"}}>
      {
        productsData.map((el)=>(
            <ProductData pid={el.id} title={el.title} price={el.price} thumbnail={el.thumbnail} />
        ))
      }
      </div>
    </div>
  )
}

export default Fifth
