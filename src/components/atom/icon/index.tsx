import React from 'react'
type props={
    variant:string,
    icon:string,
    name:string,
    // onlyIcon:boolean,
}
export default function Icon(props:props) {
    const {variant,icon,name}=props;
  return(<i className={`text-${variant} bi bi-${icon}`}>{name}</i>)
}
