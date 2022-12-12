import React from 'react'
import LogoFooter from '../../../imgs/cat-133.gif'
import LogoFooter2 from '../../../imgs/kitten-7157608.png'
import { Button, Icon, Img } from '../../atom'
import './footer.css'
export default function Footer() {
  const Top=()=>window.scrollTo(0,0)
  return (
    <footer className="mb-auto text-light row bg-4 p-2 mt-2">
            <h5 className="fs-5 text-capitalize text-light text-center">
             <Icon variant={'light'} icon={'hearts'} name={' mero mero mero!'}/> 
            </h5>
        <div className="d-flex justify-content-between align-items-center align-self-center">
        <Img 
                src={LogoFooter} 
                alt={''} 
                srcset={''} 
                className={'w-25'} 
                width={''} 
                height={''} 
                attr={[]} 
          />       
          <Img 
                src={LogoFooter2} 
                alt={''} 
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
            <div className="slidder-container">
              <code className='slidder-item'>
              <Icon variant={'light'} icon={'arrow-repeat'} name={'いってらっしゃい!!'}/>
              </code>
              <code className='slidder-item'>
              <Icon variant={'light'} icon={'arrow-repeat'} name={'selamat datang!!'}/>
              </code>
              <code className='slidder-item'>
              <Icon variant={'light'} icon={'arrow-repeat'} name={'Добро пожаловать!!'}/>
              </code>
              <code className='slidder-item'>
              <Icon variant={'light'} icon={'arrow-repeat'} name={'sugeng rawuh!!'}/>
              </code>
              <code className='slidder-item'>
              <Icon variant={'light'} icon={'arrow-repeat'} name={'wellcome!!'}/>
              </code>
            </div>
            </div>
        </div>
    </footer>
  )
}
