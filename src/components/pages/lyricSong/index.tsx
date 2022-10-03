import React, { useEffect } from 'react'
import {LyricSong as LyricSongOrganisme} from '../../organism'
export default function LyricSong() {
  useEffect(()=>{
    document.title='initer3737 | songs'
  },[])
  return (<LyricSongOrganisme/>)
}
