import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
  //[username:'',pass:'',is-login:bool]
const useAuth=(auth:boolean=false)=>{
    return (auth?<Outlet/>:<Navigate to={'/login'}/>) 
    //outlet adalah anak dari komponen fungsi protectedroutes 
    // logikanya adalah ketika auth === true maka return anak false return navigate
    //komponen navigate memiliki nilai true jadi auth === true && navigate | true maka ?
}
export default function ProtectedRoutes() {
    const getUser=localStorage.getItem('username')
    const getPass=localStorage.getItem('password')
    const getToken=localStorage.getItem('token')
      if(getUser === null){
          localStorage.setItem('username','');
      }
      if(getPass === null){
          localStorage.setItem('password','');
      }
      
    return useAuth(getUser !== '' && getPass !== '' && getToken !== 'false');
}
