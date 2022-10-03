import React, { useEffect } from 'react'
import { HomePage as HomePageOrganisme } from '../../organism'
export default function HomePage()
 {
     useEffect(()=>{
          document.title='initer3737 | Home'
     },[])
  return (
       <HomePageOrganisme/>
  )
}
