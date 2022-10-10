import React, { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import { JsxChild } from 'typescript'

const useAuth=(auth:boolean=false)=>{
    return !auth&&<Navigate to={'/login'}/>
}
export default function ProtectedRoutes(children:any) {
    useAuth(true);
  return (children.children)
}
