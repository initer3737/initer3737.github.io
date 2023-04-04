import React ,{useEffect} from 'react'
import { CrystalHarvester as CrystalHarvesterOrganisme } from '../../organism'
export default function CrystalHarvester() {
  useEffect(()=>{
    document.title='initer3737 | crystal harvester'
  },[])
  return (
      <CrystalHarvesterOrganisme/>
  )
}
