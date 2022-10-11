import React,{useEffect, useState,useRef} from 'react'
import'./style.css'
import PuingSound from '../../../sound/puing.mp3'
import pistol9mmSound from '../../../sound/9mm.mp3'
import themeSound1 from '../../../sound/teme-gaming-1.mp3'
import themeSound2 from '../../../sound/teme-gaming-2.mp3'
import themeSound3 from '../../../sound/teme-gaming-3.mp3'
import themeSound4 from '../../../sound/teme-gaming-4.mp3'
import themeSound5 from '../../../sound/teme-gaming-5.mp3'
import themeSound6 from '../../../sound/teme-gaming-6.mp3'
import themeSound7 from '../../../sound/teme-gaming-7.mp3'
import fireMagicSound from '../../../sound/fire-magic-.mp3'
import ak47calmSound from '../../../sound/ak47calm.mp3'
import rifleSound from '../../../sound/rifle.mp3'
import Logo from '../../../imgs/semangat_yuks.gif'
import { 
    Button,
    Icon,
    Img
 } from '../../assembleComponent'
import { useLocation } from 'react-router-dom'
import { useThemes } from '../../services'
 
export default function Game() {
    let [status,setStatus]=useState('');
    let [score,setScore]=useState(0);
    let [color,setColor]=useState('');
    let [point,setPoint]=useState(localStorage);
    const Theme=()=>useThemes()
        // let onpauseaudio=useRef(); //when change route it will be pause
    const srcAudio = (src:string)=>new Audio(src);
    const themes=[
        themeSound1,
        themeSound2,
        themeSound3,
        themeSound4,
        themeSound5,
        themeSound6,
        themeSound7,
    ];const song=new Date().getDay();
        const location=useLocation()
            const {pathname}=location
            const path=pathname.split('/')
        useEffect(()=>{
            
        },[])
    useEffect(()=>{
        if(score > JSON.parse(localStorage.getItem('scorePlayer')!!)){
           point.setItem('scorePlayer',JSON.stringify(score))
        }
    },[score]) //wwhen score change it become realtime

    useEffect(()=>{
                if(score <= 200){
                    setStatus('yowai mono!')
                    setColor('danger')
                }
                if(score >= 300){
                    setStatus('not bad noobs!')
                    setColor('primary')
                }
                if(score >= 500){
                    setStatus('not yet mature!')
                    setColor('info')
                }
                if(score >= 1000){
                    setStatus('you are sambal!')
                    setColor('success')
                }
                if(score >= 5000){
                    setStatus('bruh stop! your waifu waiting at home!!')
                    setColor('danger')
                }
                    // resetGame();
                },[score])//only run when status is change [dependencies]
                let Point=point.getItem('scorePlayer');
  return ( 
    <div className="d-flex flex-column-reverse flex-md-row justify-content-between">
        <div className="">
            <div className="container d-flex flex-column ">
                <div className="d-flex flex-column-reverse  flex-sm-row align-items-center">
                <h5 className={`mx-5 my-4 fs-5 alert alert-success`}>
                    <Icon variant={'warning'} icon={'star-fill'} name={' '}/>
                    HightScore:{`${Point??'0'}`}
                </h5>
                <h5 className={`mx-5 my-4 fs-5`}>
                    
                    <Button 
                        variant={'outline-danger rounded-pill px-3 py-2'} name={`reset game`} 
                        onClick={()=>{
                                window.location.reload();
                            return point.setItem('scorePlayer',"0")
                            }} disableOnClick={false}/>
                </h5>
                </div>
                <h5 className={`mx-5 my-4 fs-5 alert alert-${color} text-${color}`}>
                    score:{`${(score)} ${status}`}
                </h5>
                <Button 
                      variant={'outline-info py-3 px-5 rounded-pill text-primary clear-focus'}
                      name={'hit me!'}
                      onClick={() => {
                         
                          if (score > Number(Point))srcAudio(PuingSound).play(); 
                            if(score > 0 && score < 100)srcAudio(fireMagicSound).play()
                            if(score > 100 && score < 200)srcAudio(pistol9mmSound).play()
                            if(score > 200 && score < 300)srcAudio(ak47calmSound).play()
                            if(score > 300 )srcAudio(rifleSound).play()
                          return setScore((score) => score + 1);
                      } }
                      disableOnClick={false}                   
                      />
            </div>
        </div>
       <div className="">
            <Img 
                src={Logo} 
                alt="" 
                srcset={''} 
                className={'img-fluid'} 
                width={''} 
                height={''} 
                attr={[]}
            />
       </div>
    </div>
  )
}
