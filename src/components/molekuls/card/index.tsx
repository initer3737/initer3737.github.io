import React from 'react'
import { Icon, Img } from '../../atom';
    type props={
        headerTitle:string,
        headerIcon:string,
        headerIconColor:string,
        bodyImgSrc:string
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
      footer
    }=props;
  return (
    <div className="col-12 col-md-6 col-lg-4 m-3 bg-light">
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
                className={'card-img-top'} 
                width={''} 
                height={''} 
                attr={[]}
              />
        </div>
        <div className="card-footer">
              <h5 className='fs5'>character name {footer}</h5>
        </div>
      </div>
    </div>
  )
}

export default Card