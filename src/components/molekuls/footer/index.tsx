import React from 'react'
import LogoFooter from '../../../imgs/cat-133.gif'
import LogoFooter2 from '../../../imgs/kitten-7157608.png'
import { Icon, Img } from '../../atom'
export default function Footer() {
  return (
    <footer className="mb-auto text-light row bg-4 p-2 mt-2">
        <div className="col-12">
            <h5 className="fs-5 text-capitalize text-light text-center">
             <Icon variant={'light'} icon={'hearts'} name={' mero mero mero!'}/> 
            </h5>
        </div>
        <div className="col-12 d-flex justify-content-between align-items-center align-self-center">
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
        <div className="col-12 text-center">
          <h3 className='fw-bold'>
            <Icon variant={'light'} icon={'arrow-repeat'} name={'いってらっしゃい!!'}
            />
            </h3>
        </div>
    </footer>
  )
}
