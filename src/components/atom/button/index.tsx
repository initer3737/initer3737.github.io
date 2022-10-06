import React from "react";
    type props={
        href:string,
        variant:string,
        name:string,
        onClick:any,
        disableOnClick:boolean,
        disableHref:boolean
        // attr:object,
    }
export default function Button(props:props) {
        const {variant,href,name,onClick,disableOnClick} =props;
        let condition;
    switch (disableOnClick) {
        case true:
            condition=<a 
                href={href} 
                className={`btn btn-${variant}`} 
                >{name}
                </a>
            break;
    
        default:
          condition=<a 
                href={href} 
                className={`btn btn-${variant}`} 
                onClick={onClick}
                >{name}
            </a>
    }
    
    return condition;
    
}