import React , {useRef,useState} from 'react'
import { useLocation } from 'react-router-dom'
import themeSound1 from '../../../sound/teme-gaming-1.mp3'
import themeSound2 from '../../../sound/teme-gaming-2.mp3'
import themeSound3 from '../../../sound/teme-gaming-3.mp3'
import themeSound4 from '../../../sound/teme-gaming-4.mp3'
import themeSound5 from '../../../sound/teme-gaming-5.mp3'
import themeSound6 from '../../../sound/teme-gaming-6.mp3'
import themeSound7 from '../../../sound/teme-gaming-7.mp3'

export default function useThemes() {
    let [isPlay,setIsPlay]=useState(true)
const location=useLocation();
        const {pathname}=location;
        const splitLokasi=pathname.split('/');    
    const themes=[
        themeSound1,
        themeSound2,
        themeSound3,
        themeSound4,
        themeSound5,
        themeSound6,
        themeSound7,
    ];
    const song=new Date().getDay();
      let Ref=useRef(new Audio());
      let audio= Ref.current=new Audio(themes[song])
      audio.volume=1.0
    //    splitLokasi[1] !=='game'?setIsPlay(false):setIsPlay(true);
        // !isPlay?audio.pause():audio.play()
        
}
