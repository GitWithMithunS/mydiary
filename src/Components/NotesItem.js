import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const NotesItem = (props) => {
    const { note } = props
    return (
        <>
            <div className='col-md-3 my-3'>
             
                <div className="card my-3" >

                        <div className="card-body align-item-center">
                            <h5 className="card-title">{note.title}</h5>
                            <p className="card-text">{note.description}</p>
                            {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                            <div className="d-flex justify-content-end ">
                            <FontAwesomeIcon className="icon my-3 " fade  icon={faTrash}  style={{color: "#16cdda",}} />
                            <FontAwesomeIcon className="icon my-3 m-3" bounce icon={faPenToSquare}  style={{color: "#16cdda",}} />
                            </div>
                        </div>

                </div>
            </div>
        </>
    )
}

export default NotesItem