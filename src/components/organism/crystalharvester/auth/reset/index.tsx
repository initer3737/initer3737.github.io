import React,{useState,useEffect} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import dewiBulan from '../../../../../weejio/blue_moon.mp4'
import { Kuki__initialize } from '../../../../services'
import './style.css'
import { Icon } from '../../../../atom'
import { data } from '../../datas'
//=================================
export default function CrystalHarvesterReset() {
            let formdatas={
                username:'',
                password:'',
                password_confirm:'',
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
            const {username,password,password_confirm}=formdata
            const {playerName}=storage
            if(username === playerName && password === password_confirm && password.length > 6 && password_confirm.length > 6){
                localStorage.setItem('password',password)
                localStorage.setItem('token','true')
                Kuki__initialize()
                navigate('/loading/crystal&login')
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
                    <Icon variant={formdata.password_confirm === formdata.password && formdata.password_confirm.length > 6 && formdata.password.length > 6 ?'info':'danger'} icon={'check2-circle'} name={''}/>
                </label>
                <input type="password" id='password' placeholder='password' onChange={onChange} />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password_confirm" className='d-flex gap-1 align-items-center'>
                    confirm password
                    <Icon variant={formdata.password_confirm === formdata.password && formdata.password_confirm.length > 6 && formdata.password.length > 6 ?'info':'danger'} icon={'check2-circle'} name={''}/>
                </label>
                <input type="password" id='password_confirm' placeholder='confirm password' onChange={onChange} />
            </div>
            <button className='auth-btn' onClick={onSubmit}>reset</button>
            <hr/>
            <div className="d-flex gap-3">
                <NavLink to={'/loading/crystal&register'} className='link-harvester'>
                    register
                </NavLink>
                <NavLink to={'/loading/crystal&login'} className='link-harvester'>
                    login
                </NavLink>
            </div>
        </div>
        {/* dengan kekuatan bulan aku akan menghukum kamu (*.*) */}
        <video src={dewiBulan} autoPlay muted loop className={`moonlight-weejio-begeh`}></video>
    </>
  )
}
