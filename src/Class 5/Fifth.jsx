import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProductData from './ProductData';
import "./fifth.css"

const Fifth = () => {
    let [productsData,setProductsData]=useState([]);
    let [current,setCurrent]=useState(0);

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
    
    let PAGE_SIZE=19;
    let start=current * PAGE_SIZE;
    let end=start+PAGE_SIZE

    let noOfPages=Math.ceil(productsData.length / PAGE_SIZE)

    function handleButton(n){
      setCurrent(n)
    }

    function goToNext(){
      setCurrent((prev)=>prev+1)
    }

    function goToPrev(){
      setCurrent((prev)=>prev-1)
    }

    console.log(current)
    
  return (
    <div>
      {/* <div style={{display:"flex",justifyContent:"space-between",padding:"30px"}}>
        <h2>Logo</h2>
        <h2>Cart</h2>
      </div> */}
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"30px"}}>
      {
        productsData.slice(start,end).map((el)=>(
            <ProductData pid={el.id} title={el.title} price={el.price} thumbnail={el.thumbnail} />
        ))
      }
      </div>
      <button disabled={current==0} onClick={goToPrev} style={{border:"2px solid black"}}>&lt;</button>
      {
        [...Array(noOfPages).keys().map((el)=>(
          <button className={el==current?"active-page":""} onClick={()=>{handleButton(el)}} style={{border:"2px solid black",marginRight:"5px",marginLeft:"5px",marginTop:"10px"}}>{el+1}</button>
        ))]
      }
      <button disabled={current==noOfPages-1} onClick={goToNext} style={{border:"2px solid black"}}>&gt;</button>
    </div>
  )
}

export default Fifth
