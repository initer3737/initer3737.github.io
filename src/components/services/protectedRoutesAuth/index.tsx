import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
  //[username:'',pass:'',is-login:bool]
const useAuth=(auth:boolean=false,ifFalse:string)=>{
    return (auth?<Navigate to={ifFalse}/>:<Outlet/>) 
    //outlet adalah komponen anak | child component dari komponen protectedroutes 
    //jika argumen auth mereturn true maka komponen outlet akan dirender
    //sebaliknya maka user akan di arahkan ke login page
}
    type props={
        navigate:string
    }
export default function ProtectedRoutesAuth({navigate}:props) {
    const getUser=localStorage.getItem('username')
    const getPass=localStorage.getItem('password')
    const getToken=localStorage.getItem('token')
      if(getUser === null){
          localStorage.setItem('username','');
      }
      if(getPass === null){
          localStorage.setItem('password','');
      }
                    //chek ketika token flase maka di navigasikan ke login karena user belum login
    return useAuth(getUser !== '' && getPass !== '' && getToken === 'false',navigate);
}
