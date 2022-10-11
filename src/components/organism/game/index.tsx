import React,{useEffect, useState,useRef} from 'react'
import'./style.css'
import PuingSound from '../../../sound/puing.mp3'
import pistol9mmSound from '../../../sound/9mm.mp3'
import fireMagicSound from '../../../sound/fire-magic-.mp3'
import ak47calmSound from '../../../sound/ak47calm.mp3'
import rifleSound from '../../../sound/rifle.mp3'
import reloadSound from '../../../sound/reload.mp3'
import emptygunSound from '../../../sound/empty-gun.mp3'
import Logo from '../../../imgs/semangat_yuks.gif'
import Ak12 from '../../../imgs/ak12.png'
import Ak12fire from '../../../imgs/ak12-fire.png'
import { 
    Button,
    Icon,
    Img
 } from '../../assembleComponent'
import { useThemes } from '../../services'
 
export default function Game() {
    let [status,setStatus]=useState('');
    let [score,setScore]=useState(0);
    let [color,setColor]=useState('');
    let [point,setPoint]=useState(localStorage);
    let [ammo,setAmmo]=useState(30);
    let [isFire,setIsFire]=useState(false);
    const Theme=()=>useThemes()
        // let onpauseaudio=useRef(); //when change route it will be pause
    const srcAudio = (src:string)=>new Audio(src);
        useEffect(()=>{
            //this is to recieve theme music on every render because 
            //useTheme is call from the routes
        },[])
    useEffect(()=>{
        if(score > JSON.parse(localStorage.getItem('scorePlayer')!!) && ammo >= 0){
           point.setItem('scorePlayer',JSON.stringify(score))
        }
    },[score,point]) //wwhen score change it become realtime

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
                <div className="alert alert-warning">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <div className="d-flex flex-row justify-content-between gap-2">
                            <p>
                                {`${ammo} |  `} /90 <Icon variant={'warning'} icon={'distribute-horizontal'} name={' '}/>
                            </p>
                            
                            <button onClick={()=>{
                                    setAmmo(30)
                                    srcAudio(reloadSound).play();
                                }} className={'w-25 h-25 rounded-pill'}>
                                <Icon variant={'danger w-100'} icon={'arrow-clockwise'} name={''}/>
                            </button>
                      </div>
                        <div className="w-25">
                            <Img src={
                                    isFire&&ammo>0?Ak12fire:Ak12
                                } alt={'ak-12'} srcset={''} className={'img-fluid'} width={''} height={''} attr={[]}/>
                            <p>ak-12</p>
                        </div>
                    </div>
                </div>
                <Button 
                      variant={'outline-info py-3 px-5 rounded-pill text-primary clear-focus'}
                      name={'Fire!'}
                      onClick={() => {
                            setAmmo((ammo)=>ammo<=0?ammo:ammo-1);
                            setIsFire(!isFire);
                          if (score > Number(Point))srcAudio(ammo<=0?emptygunSound:PuingSound).play(); 
                            if(score > 0 && score < 100 && ammo > 0)srcAudio(fireMagicSound).play()
                            if(score > 100 && score < 200 && ammo > 0)srcAudio(pistol9mmSound).play()
                            if(score > 200 && score < 300 && ammo > 0)srcAudio(ak47calmSound).play()
                            if(score > 300 && ammo < 0 )srcAudio(rifleSound).play()
                            if(ammo <= 0 )srcAudio(emptygunSound).play()
                           setScore((score) => ammo<=0?score:score + 1);
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
