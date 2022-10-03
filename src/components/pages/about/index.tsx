import React, { useEffect } from "react"
import { About as AboutOrganisme } from "../../organism"
export default function About() {
    useEffect(()=>{
      document.title='initer3737 | About'
    },[])
  return(<AboutOrganisme/>)
}
