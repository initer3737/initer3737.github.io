import React from "react";
import Icon from "../icon";
    type props={
        href:string,
        variant:string,
        name:string,
        icon:string,
        isIcon:boolean
        // attr:object,
    }
export default function Link(props:props) {
        const {variant,href,name,isIcon,icon} =props;
            let condition;
      switch (isIcon) {
        case true:
           condition= <a 
            href={href} 
            className={`link-${variant}`} 
            // {...attr}
            ><Icon variant={variant} icon={icon} name={name}/> 
            </a>
            break;
      
        default:
           condition= <a 
            href={href} 
            className={`link-${variant}`} 
            // {...attr}
            >{name}
            </a>
            break;
      }
      return (condition)
        
}