import React,{useEffect, useState} from 'react'
import dewiBulan from '../../../weejio/mulberry-moonlight-lotus-arknights-moewalls.com.mp4'
import './style.css'
import { useLocation,useNavigate } from 'react-router-dom'
//======================================
export default function LoadingAnimatsi() {
    const {pathname}=useLocation()
    const path=pathname.split('/')[2]
    const navigate=useNavigate()
    //================useEffect
        useEffect(()=>{
            const LoadingAnimatsiOut=setTimeout(()=>{
                    path === 'home'?navigate(`/`): navigate(`/${path}`)
            },3000)
            return ()=>{
                clearTimeout(LoadingAnimatsiOut)
            }
        },[])
  return (
    <div>
         {/* dengan kekuatan bulan aku akan menghukum kamu (*.*) */}
         <video src={dewiBulan} autoPlay muted loop className={`moonlight-weejio-begeh`}></video>
         <div className="loading-container">
                <h1>loading...</h1>
         </div>
    </div>
  )
}
