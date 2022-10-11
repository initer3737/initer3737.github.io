import React , {useEffect,useMemo,useRef,useState} from 'react'
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
    // let onpauseaudio=useRef(''); //when change route it will be pause
    
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
        const location=useLocation()
            const {pathname}=location
            const path=pathname.split('/')
    useEffect(()=>{
        const audio =new Audio(themes[song])??''
            audio.loop=true; //set loop
         path[1] !== 'game'?setIsPlay(false):setIsPlay(true);
            isPlay?audio.play():audio.pause();
    },[isPlay,path,song])
}
