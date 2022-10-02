import React from 'react'
import Icon from '../icon';
type props={
    href:string,
    icon:string,
    target:string,
    variant:string,
    name:string,
    // onlyIcon:boolean,
}
export default function LinkToPage(props:props) {
    const {href,icon,target,variant,name}=props;
  return (
     <a href={href} target={target}>
        <Icon variant={variant} icon={icon} name={name} //nlyIcon={onlyIcon}
        />
    </a>
  )
}
