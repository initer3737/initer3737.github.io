import React, { useEffect } from 'react'
import spesialForce from '../../../../imgs/spesial-force.jpg' 
import './style.css'
import {
  Icon,
  Img
}from '../../../assembleComponent'
export default function Login() {
  useEffect(()=>{
    document.title='initer3737 | game'
  },[])
  return (
    <div className="vw-100 vh-100 form-login">
        <div className="d-flex justify-content-center align-items-center position-absolute">
              <p className="color-1 h5 text-center">
                <Icon variant={'info'} icon={'lightning'} name={' '}/>
                counter strike
              </p>
              <p className="color-1 h5 text-center">
                <Icon variant={'info'} icon={'box-arrow-right'} name={' '}/>
                Login
              </p>
              
                <input type="text" id='' placeholder='username'/>
                <input type="text" id='' placeholder='password'/>
                <button>submit</button>
              
         
        </div>

    </div> //set is-login=true then navigate use to
  )//cek pass dan username
}

//use context ambil data player dari local storage
