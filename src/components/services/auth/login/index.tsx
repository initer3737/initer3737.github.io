import React from 'react'
import spesialForce from '../../../../imgs/spesial-force.jpg' 
import './style.css'
import {
  Img
}from '../../../assembleComponent'
export default function Login() {
  return (
    <div className="vw-100 vh-100 form-login">
      {/* <Img 
        src={spesialForce} 
        alt={''} 
        srcset={''} 
        className={'img-fluid'} 
        width={''} 
        height={''} 
        attr={undefined}/> */}
     
        <div className="d-flex justify-content-center align-items-center position-absolute">
          <div className="card bg-info opacity-form">
            <div className="card-content">
              <div className="card-header"></div>
              <div className="card-body d-flex flex-column justify-content-center align-items-center gap-3">
                <input type="text" />
                <input type="text" />
                <button>submit</button>
              </div>
              <div className="card-footer"></div>
            </div>
          </div>
        </div>

    </div> //set is-login=true then navigate use to
  )//cek pass dan username
}

//use context ambil data player dari local storage
