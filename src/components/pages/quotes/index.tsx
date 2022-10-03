import React, { useEffect } from 'react'
import { Quotes as QuotesOrganisme } from '../../organism'
export default function Quotes() {
    useEffect(()=>{
      document.title='initer3737 | Quotes'
    },[])
  return(<QuotesOrganisme/>)
}