import React, { useEffect } from 'react'
import { Game as GameOrganisme} from '../../organism'
export default function Game() {
  useEffect(()=>{
    document.title='initer3737 | game'
  },[])
  return (
    <GameOrganisme/>
  )
}
