import React from 'react'
import Icon from '../icon';
type props={
    href:string,
    icon:string,
    target:string,
    variant:string,
    name:string,
    className:string,
    // onlyIcon:boolean,
}
export default function LinkToPage(props:props) {
    const {href,icon,target,variant,name,className}=props;
  return (
     <a href={href} target={target} className={className}>
        <Icon variant={variant} icon={icon} name={name} //nlyIcon={onlyIcon}
        />
    </a>
  )
}
