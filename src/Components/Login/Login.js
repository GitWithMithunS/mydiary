import React, { useState } from 'react'
import {
    Link,useNavigate
} from "react-router-dom";
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Login(props) {
    const {showalert} = props

    // const history = useHistory()
    const navigate = useNavigate();
    
    const [credentials,setcredentials] = useState({email:"" ,password:""})
    
    const handlesubmit = async (e) => {
        e.preventDefault()     //to prevent the page from reloading (as a button(here login btn) is clicked it  tends to reload the page)
        const response = await fetch("http://localhost:4000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body : JSON.stringify ({email:credentials.email,password:credentials.password})
          });
          const json =  await response.json()
          console.log(json)
          if (json.authToken){
            //save the auth-token(authorization) and redirect
            let stor = localStorage.setItem('token',json.authToken)
            console.log(stor)
            // history.push('/')  useHistory hoook is not used anymore in react
            navigate("/")
            showalert("login successfull","success")
          }
          else{
            showalert("Invalid Details","danger")
          }
    }

    const onchange = (e) => {
        setcredentials({...credentials,[e.target.name]:e.target.value}) 
    }


    return (
        <>
            <div className="container loginmain">
                <div className="wrapper">
                    <form  onSubmit={handlesubmit}>
                        <h1 className='login-signup'>Login to your Account</h1>
                        {/* <div className="input-box">    //too use this --> import {faUser} from '@fortawesome/free-solid-svg-icons'
                            <input type="text" placeholder='Username' value={credentials.username} onChange={onchange} required />
                            <div className="icon"><FontAwesomeIcon icon={faUser} /></div>
                        </div> */}
                        <div className="input-box">
                            <input type="email" placeholder='my-user@gmail.com' name="email" value={credentials.email} onChange={onchange}  required />
                            <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder='Password' name="password" value={credentials.password} onChange={onchange} required />
                            <div className="icon"><FontAwesomeIcon icon={faLock} /></div>
                        </div>

                        <div className="remember-forgot">
                            <label htmlFor=""><input type="checkbox" /> Remember me</label>
                            <Link rel="stylesheet" href="#" >   <code>Forgot Password ?</code> </Link>
                        </div>

                        <button type='submit' >Login</button>

                        <div className="register-link">
                            <p>Don't have an account ? </p> <Link to="/signup"> Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}














// <div class="mb-3">
//     <label for="exampleFormControlInput1" class="form-label">Email address</label>
//     <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
// </div>
// <label for="inputPassword5" class="form-label">Password</label>
// <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />
// <div id="passwordHelpBlock" class="form-text">
//     Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
// </div>