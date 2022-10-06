import React from "react";
    type props={
        variant:string,
        name:string,
        onClick:any,
        disableOnClick:boolean
    }
export default function Button(props:props) {
        const {variant,name,onClick,disableOnClick} =props;
        let condition;
    switch (disableOnClick ) {
        case true:
            condition=<button 
                className={`btn btn-${variant}`} 
                >{name}
                </button>
            break;
    
        default:
          condition=<button 
                className={`btn btn-${variant}`} 
                onClick={onClick}
                >{name}
            </button>
    }
    
    return condition;
    
}