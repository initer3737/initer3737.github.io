import React,{useEffect, useState} from 'react'
import prajurit from '../../../weejio/post-apocalyptic-soldiers-wasteland-3-moewalls.com.mp4'
import './style.css'
import { useLocation,useNavigate } from 'react-router-dom'
//======================================
export default function LoadingAnimatsiCounterStrike() {
    const {pathname}=useLocation()
    const path=pathname.split('/')[2]
    const navigate=useNavigate()
    //================useEffect
        useEffect(()=>{
            const LoadingAnimatsiOut=setTimeout(()=>{
                    path === 'home'?navigate(`/`): navigate(`/${path.replace('&','/')}`)
            },6000)
            return ()=>{
                clearTimeout(LoadingAnimatsiOut)
            }
        },[])
  return (
    <div>
         {/* dengan senjata kami akan menghukum kamu (*.*) */}
         <video src={prajurit} autoPlay muted loop className={`moonlight-weejio-begeh`}></video>
         <div className="loading-appName-container">
                <h1>counter strike</h1>
         </div>
         <div className="loading-container">
                <h1>loading...</h1>
         </div>
    </div>
  )
}
