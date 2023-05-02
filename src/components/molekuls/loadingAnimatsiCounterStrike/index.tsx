import React,{useEffect, useState} from 'react'
import prajurit from '../../../weejio/post-apocalyptic-soldiers-wasteland-3-moewalls.com.mp4'
import './style.css'
import { useLocation,useNavigate } from 'react-router-dom'
import {
  SingleTips,
} from '../../services'
//======================================
export default function LoadingAnimatsiCounterStrike() {
  const [percentageLoading,setPercentageLoading]=useState(0)
  const {titleTips,bodyTips}=SingleTips()
    const {pathname}=useLocation()
    const path=pathname.split('/')[2]
    const navigate=useNavigate()
    //================useEffect
        useEffect(()=>{
            const LoadingAnimatsiOut=setTimeout(()=>{
                    path === 'home'?navigate(`/`): navigate(`/${path.replace('&','/')}`)
            },6000)
              const transitionloading=setInterval(()=>{
                if(percentageLoading < 6){
                  setPercentageLoading(prev=>prev+1)
                }
              },1000)
            return ()=>{
                clearTimeout(LoadingAnimatsiOut)
                clearInterval(transitionloading)
            }
        },[percentageLoading])
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
          <div className="d-flex gap-3 flex-column">
            <div className="d-flex flex-column justify-content-center text-center text-white tips-container">
              <h1>{titleTips}</h1>
              <h5>{bodyTips}</h5>
            </div>
            <div className="loading-bar-container">
                <div className={`counterstrike-loading-${percentageLoading}`}></div>
            </div>
          </div>
    </div>
  )
}
