import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
  //[username:'',pass:'',is-login:bool]
const useAuth=(auth:boolean=false)=>{
    return (auth?<Outlet/>:<Navigate to={'/login'}/>) 
    //outlet adalah komponen anak | child component dari komponen protectedroutes 
    //jika argumen auth mereturn true maka komponen outlet akan dirender
    //sebaliknya maka user akan di arahkan ke login page
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
