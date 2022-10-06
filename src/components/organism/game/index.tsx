import React,{useEffect, useState} from 'react'
import { callbackify } from 'util';
import Logo from '../../../imgs/semangat_yuks.gif'
import { 
    Button,
    Img
 } from '../../assembleComponent'
export default function Game() {
    let [score,setScore]=useState(0);
        useEffect(()=>{
          const updateScore=()=>{
                setScore(score++);
           }
        },[score])
    const addScore=()=>{
        
    }
  return (
    <div className="d-flex justify-content-between align-items-center">
        <div className="container">
            <h5 className="fs-5">
                score:{score}
            </h5>
            <Button 
                  href={'#/game'}
                  variant={'outline-info py-3 px-5 rounded-pill text-primary'}
                  name={'hit me!'}
                  onClick={()=>addScore()}
                  disableOnClick={false} disableHref={true}                
                  />
        </div>
            <Img 
                src={Logo} 
                alt="" 
                srcset={''} 
                className={''} 
                width={''} 
                height={''} 
                attr={[]}
                />
    </div>
  )
}
