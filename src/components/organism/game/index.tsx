import React,{useEffect, useState} from 'react'
import { callbackify } from 'util';
import Logo from '../../../imgs/semangat_yuks.gif'
import { 
    Button,
    Img
 } from '../../assembleComponent'
export default function Game() {
    let [score,setScore]=useState(0);
    let [status,setStatus]=useState('');
    useEffect(()=>{
            const statusUpdate=()=>{
                if(score <= 200){
                    setStatus('yowai mono!')
                }
                if(score >= 300){
                    setStatus('not bad noobs!')
                }
                if(score >= 500){
                    setStatus('not yet mature!')
                }
                if(score >= 1000){
                    setStatus('you are sambal!')
                }
            }
            statusUpdate();

        },[status])//only run when score is change [dependencies]
    const addScore=()=>{
       return setScore(score++);
    }
  return (
    <div className="d-flex justify-content-between align-items-center">
        <div className="container">
            <h5 className="mx-5 my-4 fs-5">
                score:{`${score} ${status}`}
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
