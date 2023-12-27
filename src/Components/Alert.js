// import React from 'react'

// export default function Alert(props) {
//     return (
//         <>
//             <div className="alert alert-primary" role="alert" style={{ zIndex: '9' ,top:"50px"}}>
//                 {props.message}
             
//             </div>


//         </>
//     )
// }
import React from 'react'

export default function Alert(props) {
    const Capitalize = (word) =>{
        if (word === "danger") {
            word = "error"
        }
        if (word === "warning") {
            word = "success"
        }
        
        const low = word.toLowerCase()
        return low.charAt(0).toUpperCase() + low.slice(1)
    }
  return (
    <>
      <div style={{height:'50px'}}>

          {props.alert && 
          <div className={`alert alert-${props.alert.type} alert-dismissible fade show role="alert"`} style={{ zIndex: '9' ,top:"50px"}}>
            <strong>{Capitalize(props.alert.type)}</strong> : {props.alert.msg} 
          </div>}
      </div>
    </>
   
  )
}