import React, {useEffect, useState } from 'react'
import {Navigate} from 'react-router-dom';
import './style.css'
import {
  Button,
  Icon,
  Img
}from '../../../assembleComponent'
export default function Login() {
  const [formvalueUser,setformvalueUser]=useState('')
  const [formvaluePass,setformvaluePass]=useState('')
  const getUser=localStorage.getItem('username')
  const getPass=localStorage.getItem('password')
const isLogin=getUser!=='' && getPass !=='';
if(getUser === null){
  localStorage.setItem('username','');
}
if(getPass === null){
  localStorage.setItem('password','');
}

const changeValue=(e:string | any,isUser:boolean)=>{
      let condition;
    if(isUser){
      return  condition=setformvalueUser(e.target.value);
    }
    return  condition=setformvaluePass(e.target.value);
}

const DBStore=(key:string,value:string)=>{
 return localStorage.setItem(key,value)
}
const DBCheck=(username:string,password:string)=>{
     return getUser === username && getPass === password?true:false;
}
  useEffect(()=>{
    document.title='initer3737 | game'
  },[getPass,getUser])
  return (
  <form action="">  
    <div className="vw-100 vh-100 form-login">
        <div className="d-flex justify-content-center align-items-center position-absolute">
            <div className="d-flex flex-column px-3 py-4 gap-2 bg-dark">
              <p className="color-1 h5 text-center">
                  <Icon variant={'info'} icon={'lightning'} name={' '}/>
                  counter strike
                </p>
                <p className="text-white">user : {formvalueUser}</p>
                <p className="text-white">password : {formvaluePass}</p>
                <p className="color-1 h5 text-center">
                  <Icon variant={'info'} icon={`${isLogin?'box-arrow-in-right':'pencil-square'}`} name={' '}/>
                  {isLogin?'Login':'register'}
                </p>
                <input type="text" onChange={(e)=>changeValue(e,true)} placeholder='username' required id='user'/>
                <input type="password" onChange={(e)=>changeValue(e,false)} placeholder='password' required id='pass'/>
                <Button 
                  variant={'outline-info rounded-pill'} 
                  name={''} 
                  onClick={()=>{
                      const username=formvalueUser;
                      const password=formvaluePass;
                        if(isLogin){
                          //login function
                          DBCheck(username,password);
                          //clear value input
                          setformvalueUser('');
                          setformvaluePass('');
                        }
                      if(!isLogin){
                        //register function
                        DBStore('username',username);
                        DBStore('password',password);
                        //clear value input
                          setformvalueUser('');
                          setformvaluePass('');
                      }  
                      setformvalueUser('');
                      setformvaluePass('');
                  }} 
                  disableOnClick={false} 
                  allAttr={{}}>
                    <Icon variant={'light'} icon={`${isLogin?'box-arrow-in-right':'pencil-square'}`} name={` ${isLogin?'Login':'register'}`}/>                
                </Button>
              
            </div>
        </div>
    </div>
</form> //set is-login=true then navigate use to
  )//cek pass dan username
}

//use context ambil data player dari local storage
