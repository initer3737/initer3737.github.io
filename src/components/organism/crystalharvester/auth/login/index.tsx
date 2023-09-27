import React,{useState,useEffect} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import dewiBulan from '../../../../../weejio/blue_moon.mp4'
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
        const db=(key:string)=>localStorage.getItem(key)
        const storage={
            playerName:db('username'),
            playerPassword:db('password'),
        }
        //====================function
        
        const onChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
                const {id,value}=event.target
            setFormdata({...formdata,[id]:value})
        }
        const onSubmit=()=>{
            const {username,password}=formdata
            const {playerName,playerPassword}=storage
            if(username === playerName && password === playerPassword){
                localStorage.setItem('token','true')
                Kuki__initialize()
                navigate('/loading/crystal')
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
                    <Icon variant={storage.playerName=== formdata.username?'info':'danger'} icon={'check2-circle'} name={''}/>
                </label>
                <input type="text" id='username' placeholder='username' onChange={onChange}/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="password" className='d-flex gap-1 align-items-center'>
                    password
                    <Icon variant={storage.playerPassword=== formdata.password?'info':'danger'} icon={'check2-circle'} name={''}/>
                </label>
                <input type="password" id='password' placeholder='password' onChange={onChange} />
            </div>
            <button className='auth-btn' onClick={onSubmit}>login</button>
            <hr/>
            <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                <div className="d-flex gap-3">
                    <NavLink to={'/loading/crystal&register'} className='link-harvester'>
                        register
                    </NavLink>
                    <NavLink to={'/loading/crystal&reset'} className='link-harvester'>
                        reset
                    </NavLink>
                </div>
                    <NavLink to={'/loading/home'} className='link-harvester'>
                        homepage
                    </NavLink>
            </div>
        </div>
        {/* dengan kekuatan bulan aku akan menghukum kamu (*.*) */}
        <video src={dewiBulan} autoPlay muted loop className={`moonlight-weejio-begeh`}></video>
    </>
  )
}
