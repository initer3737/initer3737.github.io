import React from 'react'
import { Icon, Img } from '../../atom';
import Logo from '../../../imgs/404.gif'
    type props={
        className:string,
        headerTitle:string,
        headerIcon:string,
        headerIconColor:string,
        body:string,
        bodyImgSrc:string,
        footer:string | any,
        borderColor:string,
    }
function Card(props:props) {
    const {
      headerIconColor,
      headerIcon,
      headerTitle,
      borderColor,
      bodyImgSrc,
      footer,
      body,
      className
    }=props;
  return (
    <div className={`m-3 bg-light ${className}`}>
      <div className={`cards rounded shadow border border-${borderColor}`}>
        <div className="card-header">
          <h5 className="card-title fs-5">
            <Icon variant={headerIconColor} icon={headerIcon} name={' '}/> {headerTitle}
          </h5>
        </div>
        <div className="card-body">
            <Img 
                src={bodyImgSrc} 
                alt={''} 
                srcset={''} 
                className={'rounded shadow img-fluid'} 
                width={''} 
                height={''} 
                attr={[]}
              />
              <p className='fs-5'>
                {body}
              </p>
        </div>
        <div className="card-footer">
              <h5 className='fs5'>
                <Icon variant={'primary'} icon={'bookmark-star-fill'} name={' '}/> 
                {footer}
               </h5>
        </div>
      </div>
    </div>
  )
}

export default Card