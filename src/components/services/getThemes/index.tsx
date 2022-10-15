import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function GetThemes() {
        // const audio=useThemes()
        const location=useLocation();
        const {pathname}=location;
        const routes=pathname.split('/');  
            useEffect(()=>{
               //routes[1]=='game'?<UseThemes play={true}/>:<UseThemes play={false}/>
            //    useThemes({play:true})
            },[]) 
  return (
        <>{''}</>
  )
}
