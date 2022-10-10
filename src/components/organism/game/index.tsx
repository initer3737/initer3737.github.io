import React,{useEffect, useState} from 'react'
import PuingSound from '../../../sound/puing.mp3'
import Logo from '../../../imgs/semangat_yuks.gif'
import { 
    Button,
    Icon,
    Img
 } from '../../assembleComponent'
export default function Game() {
    let [score,setScore]=useState(0);
    let [status,setStatus]=useState('');
    let [color,setColor]=useState('');
    useEffect(()=>{
        if(score > JSON.parse(localStorage.getItem('scorePlayer')!!)){
            localStorage.setItem('scorePlayer',JSON.stringify(score))
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

        },[score])//only run when status is change [dependencies]
        let Point=localStorage.getItem('scorePlayer');
  return ( 
    <div className="d-flex flex-column-reverse flex-md-row justify-content-between">
        <div className="">
            <div className="container d-flex flex-column ">
                <h5 className={`mx-5 my-4 fs-5 alert alert-success`}>
                    <Icon variant={'warning'} icon={'star-fill'} name={' '}/>
                    HightScore:{`${Point??'0'}`}
                </h5>
                <h5 className={`mx-5 my-4 fs-5 alert alert-${color} text-${color}`}>
                    score:{`${score} ${status}`}
                </h5>
                <Button 
                    variant={'outline-info py-3 px-5 rounded-pill text-primary'}
                    name={'hit me!'}
                    onClick={()=>{
                            const srcAudio=new Audio(PuingSound);
                            if(score > Number(Point)){srcAudio.play();}
                        return setScore((score)=>score+1)
                    }}
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
