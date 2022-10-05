import axios from 'axios'
import {useEffect} from 'react'
import { Anime as AnimeOrganisme } from '../../organism'
export default function Covid() {
 
  useEffect(()=>{
    document.title='initer3737 | anime-list'
  },[])
  
  return (
    <AnimeOrganisme/>
  )
}
