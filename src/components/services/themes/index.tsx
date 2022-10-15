import React , {useRef,useState,useContext, useEffect, useMemo} from 'react'
import { useLocation } from 'react-router-dom'
import themeSound1 from '../../../sound/teme-gaming-1.mp3'
import themeSound2 from '../../../sound/teme-gaming-2.mp3'
import themeSound3 from '../../../sound/teme-gaming-3.mp3'
import themeSound4 from '../../../sound/teme-gaming-4.mp3'
import themeSound5 from '../../../sound/teme-gaming-5.mp3'
import themeSound6 from '../../../sound/teme-gaming-6.mp3'
import themeSound7 from '../../../sound/teme-gaming-7.mp3'

type props={
    play:boolean
}
export default function useThemes() {  
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
     return themes[song];
}
