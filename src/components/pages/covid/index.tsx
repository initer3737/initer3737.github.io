import axios from 'axios'
import {useEffect} from 'react'
import { Covid as CovidOrganisme } from '../../organism'
export default function Covid() {
 
  useEffect(()=>{
    document.title='initer3737 | data-covid'
  },[])
  
  return (
    <CovidOrganisme/>
  )
}
