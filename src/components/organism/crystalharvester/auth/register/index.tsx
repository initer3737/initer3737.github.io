import React,{useState,useEffect} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import dewiBulan from '../../../../../weejio/mulberry-moonlight-lotus-arknights-moewalls.com.mp4'
import { Kuki__initialize } from '../../../../services'
import './style.css'
import { Icon } from '../../../../atom'
import { data } from '../../datas'
//=================================
export default function CrystalHarvesterRegister() {
            let formdatas={
                username:'',
                password:'',
                password_confirm:'',
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
            const {username,password,password_confirm}=formdata
            if(username.length > 6 && password === password_confirm){
                localStorage.setItem('username',username)
                localStorage.setItem('password',password)
                localStorage.setItem('token','true')
                // Kuki__initialize()
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
                    <Icon variant={formdata.username.length>6?'info':'danger'} icon={'check2-circle'} name={''}/>
                </label>
                <input type="text" id='username' placeholder='username' onChange={onChange}/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="password" className='d-flex gap-1 align-items-center'>
                    password
                    <Icon variant={formdata.password_confirm === formdata.password?'info':'danger'} icon={'check2-circle'} name={''}/>
                </label>
                <input type="password" id='password' placeholder='password' onChange={onChange} />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password_confirm" className='d-flex gap-1 align-items-center'>
                    confirm password
                    <Icon variant={formdata.password_confirm === formdata.password?'info':'danger'} icon={'check2-circle'} name={''}/>
                </label>
                <input type="password" id='password_confirm' placeholder='confirm password' onChange={onChange} />
            </div>
            <button className='auth-btn' onClick={onSubmit}>register</button>
            <hr/>
            <div className="d-flex gap-3">
                <NavLink to={'loading/crystal&reset'} className='link-harvester'>
                    reset
                </NavLink>
                <NavLink to={'loading/crystal&login'} className='link-harvester'>
                    login
                </NavLink>
            </div>
        </div>
        {/* dengan kekuatan bulan aku akan menghukum kamu (*.*) */}
        <video src={dewiBulan} autoPlay muted loop className={`moonlight-weejio-begeh`}></video>
    </>
  )
}
