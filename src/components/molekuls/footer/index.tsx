import React from 'react'
import LogoFooter from '../../../imgs/cat-133.gif'
import LogoFooter2 from '../../../imgs/kitten-7157608.png'
import { Button, Icon, Img } from '../../atom'
import { Weather } from '../../services'
import Offline__user from "../../services/pwa/offline";
import './footer.css'
export default function Footer() {
  const Top=()=>window.scrollTo(0,0)
  const cutStr=(stringLength:string)=>stringLength.length > 8 ?`${stringLength.slice(0,8)}...`:stringLength;
  const username=cutStr(localStorage.getItem('username')??'');
        
          
        
  return (
    <footer className="mb-auto text-light row bg-4 p-2 mt-2">
            <h5 className="fs-5 text-capitalize text-light text-center">
             <Icon variant={'light'} icon={'hearts'} name={' mero mero mero!'}/> 
            </h5>
            <Offline__user/>
                  <Weather/>
        <div className="d-flex justify-content-between align-items-center">
        <Img 
                src={LogoFooter} 
                alt={'cat kiss'} 
                srcset={''} 
                className={'w-25'} 
                width={''} 
                height={''} 
                attr={[]} 
          />       
          <Img 
                src={LogoFooter2} 
                alt={'ganks kittens'} 
                srcset={''} 
                className={'w-50'} 
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
