import React, { HtmlHTMLAttributes } from "react";
import Icon from "../icon";
import {NavLink as Links} from 'react-router-dom'
    type props={
        href:string,
        variant:string,
        name:string,
        icon:string,
        isIcon:boolean,
        target:string,
        // attr:object,
    }
export default function Link(props:props) {
        const {variant,href,name,isIcon,icon,target} =props;
            let condition;
      switch (isIcon) {
        case true:
           condition= <Links
                    target={target}
                    to={href} >
                    <Icon 
                        variant={variant}
                        icon={icon}
                        name={name} 
                        //onlyIcon={true} 
                   />
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