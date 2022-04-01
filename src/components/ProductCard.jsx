import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link ,useNavigate } from "react-router-dom";

export const ProductCard = () => {

    const data = useSelector((res) => res.getAllProduct)

    return (
        
        data && data.map((res) => (
            <Link  to={`/products/${res.id}`}>
                <div className="card">
                    <img src={res.image} alt="image" />
                    <div>{res.title}</div>
                    <div>
                        <div>{res.price}</div>
                        <div>{res.rating.rate}</div>
                    </div>

                </div>
            </Link>
        ))
    
    )
}