import React from "react";
import {useEffect , useState} from "react";
import axios from "axios"
import {ProductCard} from "./ProductCard"
import {   useDispatch } from "react-redux";
import { setProduct } from "../Redux/action";


export const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
     axios.get("https://fakestoreapi.com/products").then((res) =>
        dispatch(setProduct(res.data)));
    },[])

    return (
        <div className="main">
            <ProductCard/>

        </div>

    )
}