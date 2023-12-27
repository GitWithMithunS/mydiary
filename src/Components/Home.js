import React from 'react'
// import { useEffect } from 'react'
import Notes from './Notes'
// import {  useNavigate } from 'react-router-dom'


export default function Home(props) {
  const {showalert} = props
  // const navigate = useNavigate()
  // useEffect(() => {
  //   if(localStorage.getItem('token')){
  //     navigate('/')
  //       console.log("token")
  //   }
  //   else{
  //       navigate('/login')
  //       props.showalert('login to your account to get your notes','info')
  //   }
  //  } )
  return (
    <>
      
      <div>
      <Notes showalert={showalert} />
      </div>

    </>
  )
}
