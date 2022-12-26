import React from 'react'
import pwa3 from './assetpwa/pwa3.jpg'

export default function OfflineUser() {
        const useUser__offline=()=>{
            if(!navigator.onLine){
                return true;
            }else{
                return false;
            }
        }
           
  return (
    <div className={`position-relative ${useUser__offline()?'':'d-none'} d-none`} >
        <h3 className='h3 text-center'>beliau ini sedang offline!!</h3>
        <img src={pwa3} alt="offline pwa" loading='lazy' className='w-100'/>
    </div>
  )
}
