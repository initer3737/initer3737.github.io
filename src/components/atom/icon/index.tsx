import React from 'react'
type props={
    variant:string,
    icon:string,
    name:string,
    onClick?:Function | any,
    id?:string,
}
export default function Icon({variant,icon,id,name,onClick}:props) {
  return(<i id={id} className={`text-${variant} bi bi-${icon}`} onClick={onClick}>{name}</i>)
}
