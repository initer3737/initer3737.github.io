import React from "react";
import Icon from "../icon";
import {NavLink as Links} from 'react-router-dom'
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
           condition= <Links  
                    to={href} >
                    <Icon 
                        variant={variant} 
                        icon={icon} 
                        name={name} />
                    </Links> 
            break;
      
        default:
           condition= <Links 
            to={href} 
            className={`link-${variant}`} 
            // {...attr}
            >{name}
            </Links>
            break;
      }
      return (condition)
        
}