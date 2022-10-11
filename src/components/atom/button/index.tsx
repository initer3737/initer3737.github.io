import React from "react";
    type props={
        variant:string,
        name:string,
        onClick:any,
        disableOnClick:boolean,
        children:any | Element
        // ref:null | MutableRefObject<null>
    }
export default function Button(props:props) {
        const {variant,name,onClick,disableOnClick,children} =props;
        let condition;
    switch (disableOnClick ) {
        case true:
            condition=<button
                className={`btn btn-${variant}`}>
                    {children}{` ${name}`}
                </button>
            break;
    
        default:
          condition=<button 
                className={`btn btn-${variant}`} 
                onClick={onClick}>
                   {children}{` ${name}`}
            </button>
    }
    
    return condition;
    
}