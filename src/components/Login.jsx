import React, { useState } from "react"
import "./Login.css";
import {Link} from "react-router-dom"




export const Login = () => {

    const [status , setStatus] = useState(false)
    
    var reguser =JSON.parse(localStorage.getItem("Register_data"));
    console.log(reguser)





    const [text, setText] = useState({});

    const {  password, email } = text;
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setText({ ...text, [name]: value });
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      Register(text);
      async function Register(e) {
        try {
          var register_data = text
          console.log("data", register_data);
        } catch (err) {
          console.log(err);
        }
        if(reguser.email ==register_data.email && reguser.password ==register_data.password ){

            setStatus(true)
            console.log("successs")
        }
      }

    }
    
   
   


    

    return  (
        <div className="box">

            <h1>Login Here</h1>

            <hr/>
            <form id="font" onSubmit={handleSubmit} >
                <label className="lable">E-mail</label><br/>

                <input id="email"  name="email" value={email} type="text" onChange={handleChange} placeholder="Enter E-mail"/><br/><br/>
                <label className="lable">Password</label><br/>
                <input id="password" name="password" value={password} type="password" onChange={handleChange} placeholder="Password "/><br/><br/>
                


             
             <Link to={"/login/home"}>  <button type="submit" id="btn"   >Log-In</button> </Link>
            </form><br />
            <hr />

                 <p> User can log-in here</p>
        </div>
        
    )
}


// style={{display : (show ? "block" : "none" )}}