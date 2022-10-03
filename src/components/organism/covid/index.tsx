import axios from 'axios'
import {useEffect,useState} from 'react'


export default function Covid() {
  let [covid,setCovid]=useState([])
  useEffect(()=>{
    const url="https://data.covid19.go.id/public/api/update.json"
    axios.get(url).then((res)=>console.log(res.data))
    
  },[])
  
  return (
    <div>data covid...</div>
  )
}
