import React,{useState,useEffect} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import dewiBulan from '../../../../../weejio/mulberry-moonlight-lotus-arknights-moewalls.com.mp4'
import { Kuki__initialize } from '../../../../services'
import './style.css'
import { Icon } from '../../../../atom'
import { data } from '../.././datas'
//=================================
export default function CrystalHarvesterLogin() {
            let formdatas={
                username:'',
                password:'',
            }
        const navigate=useNavigate()    
        const [formdata , setFormdata] =useState(formdatas)
        const [score , setScore] =useState<number>(0)
        const datas=data
        //====================function
        
        const onChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
                const {id,value}=event.target
            setFormdata({...formdata,[id]:value})
        }
        const onSubmit=()=>{
            const {username,password}=formdata
            const {playerName,playerPassword}=datas
            if(username === playerName && password === playerPassword){
                localStorage.setItem('token','true')
                Kuki__initialize()
                navigate('loading/crystal')
            }
        }
        //============useEffect
        
  return (
    <>
        <div className="forms-container">
            <h1 className="appName text-capitalize">{data.appName}</h1>
                <hr/>
            <div className="input-wrapper">
                <label htmlFor="username" className='d-flex gap-1 align-items-center'>
                    username 
                    <Icon variant={datas.playerName=== formdata.username?'info':'danger'} icon={'check2-circle'} name={''}/>
                </label>
                <input type="text" id='username' placeholder='username' onChange={onChange}/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="password" className='d-flex gap-1 align-items-center'>
                    password
                    <Icon variant={datas.playerPassword=== formdata.password?'info':'danger'} icon={'check2-circle'} name={''}/>
                </label>
                <input type="password" id='password' placeholder='password' onChange={onChange} />
            </div>
            <button className='auth-btn' onClick={onSubmit}>login</button>
            <hr/>
            <div className="d-flex gap-3">
                <NavLink to={'loading/crystal&login'} className='link-harvester'>
                    register
                </NavLink>
                <NavLink to={'loading/crystal&login'} className='link-harvester'>
                    reset
                </NavLink>
            </div>
        </div>
        {/* dengan kekuatan bulan aku akan menghukum kamu (*.*) */}
        <video src={dewiBulan} autoPlay muted loop className={`moonlight-weejio-begeh`}></video>
    </>
  )
}
