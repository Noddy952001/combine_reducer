import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Home} from "./components/home"
import {Product} from "./components/ProductDetailPage"
import {  Route, Routes } from 'react-router-dom'
import {Signup} from "./components/Signup"
import { Login } from './components/Login'


function App() {

  return (
    <div className="App">
   

      <Routes>
        <Route path='/login' element= {<Login/>} />
        <Route path='/' element= {<Signup/>} />
        <Route path='/login/home' element= {<Home/>} />
        <Route path='/products/:id' element= {<Product/>} />

      </Routes>
        
       
    </div>
  )
}

export default App
