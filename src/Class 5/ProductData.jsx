import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductData = ({pid,title,price,thumbnail}) => {
    let navigate=useNavigate();

    function handleClick(){
        navigate(`/product/${pid}`)
    }
    return (

        <div onClick={handleClick} style={{ border: "2px solid black", borderRadius: "20px", padding: "10px" }}>
            <h2 style={{ width: "300px" }}>{title}</h2>
            <img src={thumbnail} alt="" />
            <p>RS {Math.ceil(price * 83)}</p>
        </div>

    )
}

export default ProductData
