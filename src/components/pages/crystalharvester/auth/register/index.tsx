import { CrystalHarvesterRegister as CrystalHarvesterRegisterOrganisme } from '../../../../organism'
import React,{ useEffect } from 'react'
//===================
export default function CrystalHarvesterRegister() {
  useEffect(()=>{
    document.title='initer3737 | crystal harvester register'
  },[])
  return (
      <CrystalHarvesterRegisterOrganisme/>
  )
}