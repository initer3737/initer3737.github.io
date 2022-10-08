import React,{useEffect, useState} from 'react'
import Logo from '../../../imgs/semangat_yuks.gif'
import { 
    Button,
    Img
 } from '../../assembleComponent'
export default function Game() {
    let [score,setScore]=useState(0);
    let [status,setStatus]=useState('');
    let [color,setColor]=useState('');
    useEffect(()=>{
            const statusUpdate=()=>{
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
            }
            statusUpdate();

        },[status])//only run when status is change [dependencies]
    const addScore=()=>{
       return setScore(score++);
    }
  return (
    <div className="d-flex flex-column-reverse flex-md-row justify-content-between">
        <div className="">
            <div className="container d-flex flex-column ">
                <h5 className={`mx-5 my-4 fs-5 text-${color}`}>
                    score:{`${score} ${status}`}
                </h5>
                <Button 
                    variant={'outline-info py-3 px-5 rounded-pill text-primary'}
                    name={'hit me!'}
                    onClick={()=>addScore()}
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
