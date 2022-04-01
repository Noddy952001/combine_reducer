import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export const Product = () => {

    const {id} = useParams()
    const [productData ,setProductData] = useState({})

    useEffect(() => {
        getProduct()
    },[]);
        const getProduct=()=> {
        axios.get(`https://fakestoreapi.com/products/${id}`).then(function(res){
        setProductData(res.data)
        console.log(res.data)
        })
    }


    return(

        <div>
            <img src={productData.image} alt="" />
            <h1>Title : {productData.title}</h1>
            <h1> Price :{ productData.price}</h1>
            <h1>description : {productData.description}</h1>

            {/* <img src={productData.image} alt="image" /> */}

        </div>
    

    )

}
