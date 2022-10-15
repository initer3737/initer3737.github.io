import React from 'react'

type attr={
    src:string,
    alt:string,
    srcset:string,
    className:string,
    width:string,
    height:string,
    attr:Object | any
}
export default function Img(props:attr) {
    const {attr,src,alt,srcset,className,width,height}=props;
  return (
    <img 
      src={src}
      alt={alt}
      srcSet={srcset}
      className={className}
      width={width}
      height={height}
      {...attr}
    />
  )
}
