import React,{ReactNode} from "react";
    type props={
        variant:string,
        onClick:()=>void,
        allAttr:object,
        statusState:boolean
    }
export default function Input(props:props) {
    const {variant,onClick,allAttr,statusState} =props;
               return ( 
               <div className="form-switch">
                <input {...allAttr} onClick={onClick}
                className={`form-check-input ${variant}`} 
                    checked={statusState}
                /> 
               </div>
                
                
                )
}