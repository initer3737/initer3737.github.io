import React,{useEffect, useState} from 'react'
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
                    setStatus('<span className="alert alert-danger">yowai mono!</span>')
                }
                if(score >= 300){
                    setStatus('<span className="alert alert-warning">not bad noobs!</span>')
                }
                if(score >= 500){
                    setStatus('<span className="alert alert-info">not yet mature!</span>')
                }
                if(score >= 1000){
                    setStatus('<span className="alert alert-success">you are sambal!</span>')
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
                <h5 className="mx-5 my-4 fs-5">
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
