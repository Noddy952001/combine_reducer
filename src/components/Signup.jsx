import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [text, setText] = useState({});

  const { username, password, email } = text;
  const handleChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(text);
    Register(text);
    async function Register(e) {
      try {
        var register_data = text
        console.log("data", register_data);
        // register_data = JSON.stringify(register_data);

        localStorage.setItem("Register_data" ,JSON.stringify(register_data));


      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div id="smallbox0">
      <div id="smallbox1">
        <div id="smallbox2">
          <div>
        
            <div id="smallbox3">
              <div id="welcome">Welcome to Signup Page</div>
             
              <form id="form" action="" onSubmit={handleSubmit}>
                <label id="email" htmlFor="">
                  Email
                </label>
                <br />
                <input
                  name="email"
                  value={email}
                  type="text"
                  id="emailInput"
                  onChange={handleChange}
                  required
                />
                <label id="email" htmlFor="">
                  Username
                </label>
                <br />
                <input
                  name="username"
                  value={username}
                  type="text"
                  onChange={handleChange}
                  id="emailInput"
                  required
                />
                <label id="email" htmlFor="">
                  Password
                </label>
                <br />
                <input
                  name="password"
                  value={password}
                  type="text"
                  onChange={handleChange}
                  id="emailInput"
                  required
                />
                <br />
                <br />
                <br />

                  {/* <Link  to={`/login`}>  </Link> */}

                  <Link to={"./login"}>    <input type="submit" value="Sign up" name="" id="button" /> </Link>
              </form>
            </div>

            <div id="create">
                If user have already account ?
                <span> log in</span>
              </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};