import React,{useState,useEffect} from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import dewiBulan from '../../../weejio/mulberry-moonlight-lotus-arknights-moewalls.com.mp4'
import hitSound from '../../../sound/crystalHarvested.mp3'
import wooshSound from '../../../sound/fast-whoosh-118248.mp3'
import puingSound from '../../../sound/puing.mp3'
import './style.css'
import { Icon } from '../../atom'
//=================================
export default function CrystalHarvester() {
        const [score , setScore] =useState<number>(0)
        const [isHit , setIsHit] =useState<boolean>(false)
        const [isPause , setIsPause] =useState<boolean>(false)
        const navigate=useNavigate()
        const db=(key:string)=>localStorage.getItem(key)
        const storage={
            playerName:db('username'),
        }
        let HightScore2=localStorage.getItem('scorePlayer')
        const woosh=new Audio(wooshSound)
        const Hooray=new Audio(puingSound)
        //====================function
        const hit=()=>{
            setScore(prev=>prev+1)
            new Audio(hitSound).play()
                setIsHit(true)
            setTimeout(()=>{
                setIsHit(false)
            },3000)
        }
        const pauseTriger=()=>{
            setIsPause(true)
        }
        const continueTriger=()=>{
            setIsPause(false)
        }
        const TargetElement=(id:string)=>document.getElementById(id)
        const Randomize=(numb:number)=>{
            return Math.ceil(Math.random()*numb);
        }
        const onLogout=()=>{
            localStorage.setItem('token','false')
            navigate('/loading/crystal&login')
        }
        //============useEffect
            useEffect(()=>{
                const targetBlastingsCrystalsRandomize=setInterval(()=>{
                    TargetElement('crystal-blast-target')?.style.setProperty('--top',`${Randomize(100)}%`)
                    TargetElement('crystal-blast-target')?.style.setProperty('--left',`${Randomize(100)}%`)
                       if(isPause === false) woosh.play()
                },3000)
                    //unmounting event
                return ()=>{
                    woosh.pause()
                    clearInterval(targetBlastingsCrystalsRandomize)
                }
            },[isPause])
            useEffect(()=>{
                if(score > JSON.parse(HightScore2!!)){
                    localStorage.setItem('scorePlayer',JSON.stringify(score))
                    Hooray.play()
                }
            },[score,HightScore2])
  return (
    <>
        <div className={`${isPause===true?'pause-menu-toggled':'pause-menu-untoggled'}`}>
                {/* continue */}
            <h3 className='text-center'>paused</h3>    
            <h3 onClick={()=>continueTriger()} className='link-harvester'>
                <Icon variant={'info'} icon={'play'} name={''}/>
                continue
            </h3>
            <h3 className='link-harvester' onClick={onLogout}>
                    <Icon variant={'info'} icon={'box-arrow-left'} name={''}/>
                    logout
            </h3>
            <h3>
                <NavLink to={'/loading/home'} className='link-harvester'>
                    <Icon variant={'info'} icon={'journal'} name={''}/>
                    to homepage
                </NavLink>
            </h3>
        </div>
        <div className={`${isPause===true?'filter-pause-toggled':'filter-pause-untoggled'}`}></div>
        <div className="score-container">
            <h3><Icon variant={'info'} icon={'suit-diamond-fill'} name={''}/>{score}</h3>
            <h3><Icon variant={'warning'} icon={'stars'} name={''}/> {HightScore2}</h3>
            <h3><Icon variant={'info'} icon={'person-bounding-box'} name={''}/> {storage.playerName}</h3>
        </div>
                {/* pause button*/}
        <div className="pause-container">
            <h3 className='d-flex gap-1 justify-content-center align-items-center link-harvester' onClick={()=>pauseTriger()}><Icon variant={'info'} icon={'pause-circle'} name={''} />pause</h3>
        </div>
                    {/* dengan kekuatan bulan aku akan menghukum kamu (*.*) */}
        <video src={dewiBulan} autoPlay muted loop className={`moonlight-weejio-begeh`}></video>
            <div className="playground-area">
                <Icon id='crystal-blast-target'  variant={` crystal-blass ${isPause===true?'crystal-disappear':'crystal-appear'}`} icon={isHit===true?'stars crystal-disappear':'suit-diamond-fill crystal-appear'} name={''} onClick={()=>hit()}/>
            </div>
    </>
  )
}
