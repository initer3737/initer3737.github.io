import React from 'react'
type props={
    variant:string,
    icon:string,
    name:string,
    onClick?:Function | any
}
export default function Icon({variant,icon,name,onClick}:props) {
  return(<i className={`text-${variant} bi bi-${icon}`} onClick={onClick}>{name}</i>)
}
