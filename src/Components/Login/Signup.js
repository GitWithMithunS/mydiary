import React from 'react'
import { useState } from 'react';
import {
  useNavigate
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Signup(props) {
  const {showalert} = props

  const [credentials,setcredentials] = useState({name:"",email:"" ,password:"",confirmpass:""})
  const navigate = useNavigate();


  const handlesubmit = async (e) => {
    e.preventDefault()     //to prevent the page from reloading (as a button(here login btn) is clicked it  tends to reload the page)
    const {name,email,password} = credentials       //destructuring
    const response = await fetch("http://localhost:4000/api/auth/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify ({name,email,password})          //name:credentials.name,email:credentials.email,password:credentials.password
      });
      const json =  await response.json()
      console.log("respone of signup (authorization)",json)
      if (json.authToken){
        //save the auth-token(authorization) and redirect
        let stor = localStorage.setItem('token',json.authToken)
        console.log(stor)
        // history.push('/')
        navigate("/")
        showalert("Account created successfully","success")
      }
      else{
        // alert('invalid credientials')   -->this default alert message from react or js
        showalert("Invalid credentials","danger")
      }
}

const onchange = (e) => {
  setcredentials({...credentials,[e.target.name]:e.target.value}) 
  console.log(credentials)
  console.log("onchange is active" )
}

  return (
    <>
    
    <div className="container loginmain">
                <div className="wrapper">
                    <form onSubmit={handlesubmit} >
                        <h1 className='login-signup'>Create an Account</h1>
                        <div className="input-box">                                 {/* do not forget to give name attribute. */}
                            <input type="text" placeholder='Username' name="name" onChange={onchange} required minLength={3} />  
                            <div className="icon"><FontAwesomeIcon icon={faUser} /></div>
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder='my-user@gmail.com' name="email" onChange={onchange} required />
                            <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder='Password' name="password" onChange={onchange}  minLength={5} required   />
                            <div className="icon"><FontAwesomeIcon icon={faLock} /></div>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder='Confirm Password' name='confirmpass' onChange={onchange} minLength={5} required   />
                            <div className="icon"><FontAwesomeIcon icon={faLock} /></div>
                        </div>

                        {/* <div className="remember-forgot">
                            <label htmlFor=""><input type="checkbox" /> Remember me</label>
                            <Link rel="stylesheet" href="#" >   <code>Forgot Password ?</code> </Link>
                        </div> */}

                        <button type='submit'  >Signup</button>

                        {/* <div className="register-link">
                            <p>Don't have an account ? </p> <Link to="/signup"> Register</Link>
                        </div> */}
                    </form>
                </div>
            </div>
    
    </>
  )
}
