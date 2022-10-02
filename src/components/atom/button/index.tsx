import React from "react";
    type props={
        href:string,
        variant:string,
        name:string,
        // attr:object,
    }
export default function Button(props:props) {
        const {variant,href,name} =props;
    return(
        <a 
            href={href} 
            className={`btn btn-${variant}`} 
            // {...attr}
            >{name}
        </a>
    )
}