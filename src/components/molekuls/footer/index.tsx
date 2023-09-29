import React ,{useEffect,useState}from 'react'
import LogoFooter from '../../../imgs/bunga_merah.jpg'
import LogoFooter2 from '../../../imgs/bunga_biru.jpg'
import { Button, Icon, Img } from '../../atom'
import { Weather } from '../../services'
import OfflineUser from "../../services/pwa/offline";
import './footer.css'

const FooterClock=()=>{
  const times=new Date().toLocaleTimeString()
    const [time,setTime]=useState(times);
      const Update=()=>{ 
        let timeUpdate=new Date().toLocaleTimeString();
        return setTime(timeUpdate)
      }
      useEffect(()=>{setInterval(()=>Update(),1000)},[])
          return <div className='footer__clock rounded fs-1 px-5 py-3'>{time}</div>;
}

export default function Footer() {
  const Top=()=>window.scrollTo(0,0)
  const cutStr=(stringLength:string)=>stringLength.length > 8 ?`${stringLength.slice(0,8)}...`:stringLength;
  const username=cutStr(localStorage.getItem('username')??'');   
  return (
    <footer className="mb-auto text-light row bg-4 p-2 mt-2">
            <h5 className="fs-5 text-capitalize text-light text-center">
             <Icon variant={'light'} icon={'hearts'} name={' mero mero mero!'}/> 
            </h5>
            <OfflineUser/>
                  <Weather/>
                <div className="d-flex gap-3 justify-content-center align-items-center gap-5 mt-5 flex-column flex-md-row">
                    <div className="anime__container__kelap mt-3 mx-5 d-flex flex-row flex-md-column">
                      <div className="anime__footer__kelap"></div>
                      <div className="anime__footer__kelap"></div>
                      <div className="anime__footer__kelap"></div>
                      <div className="anime__footer__kelap"></div>
                      <div className="anime__footer__kelap"></div>
                      <div className="anime__footer__kelap"></div>
                    </div>
                      <FooterClock/>
                    <div className="anime__container__kelap mt-3 mx-5 d-flex flex-row flex-md-column">
                      <div className="anime__footer__kelap"></div>
                      <div className="anime__footer__kelap"></div>
                      <div className="anime__footer__kelap"></div>
                      <div className="anime__footer__kelap"></div>
                      <div className="anime__footer__kelap"></div>
                      <div className="anime__footer__kelap"></div>
                    </div>
                </div>
        <div className="d-flex px-4 py-4 justify-content-between align-items-center">
        <Img 
                src={LogoFooter} 
                alt={'footer foto'} 
                srcset={''} 
                className={'w-25'} 
                width={''} 
                height={''} 
                attr={[]} 
          />       
          <Img 
                src={LogoFooter2} 
                alt={'footer foto'} 
                srcset={''} 
                className={'w-25'} 
                width={''} 
                height={''} 
                attr={[]} 
          />       
          </div>
        <div className="text-center">
          <Button 
            allAttr={{}}
            variant={'outline-info py-4 px-5'}  
            name={'kembali ke atas'} 
            onClick={()=>Top()} disableOnClick={false}            
            >
              <Icon variant={'light'} icon={'arrow-bar-up'} name={''}/>
            </Button>
          <div className='fw-bold mt-4 h3'>
            <div className="slidder-container d-none d-md-block">
              <code className='slidder-item'>
              <Icon variant={'light'} icon={'arrow-repeat'} name={`いってらっしゃい ${username}!!`}/>
              </code>
              <code className='slidder-item'>
              <Icon variant={'light'} icon={'arrow-repeat'} name={`selamat datang ${username}!!`}/>
              </code>
              <code className='slidder-item'>
              <Icon variant={'light'} icon={'arrow-repeat'} name={`Добро пожаловать ${username}!!`}/>
              </code>
              <code className='slidder-item'>
              <Icon variant={'light'} icon={'arrow-repeat'} name={`sugeng rawuh ${username}!!`}/>
              </code>
              <code className='slidder-item'>
              <Icon variant={'light'} icon={'arrow-repeat'}  name={`wellcome ${username}!!`}/>
              </code>
            </div>
              <Icon variant={'light'} icon={'arrow-repeat d-md-none'}  name={`wellcome ${username}!!`}/>
            </div>
        </div>
    </footer>
  )
}
