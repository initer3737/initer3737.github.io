import React, { useEffect } from "react";
import { NotFound as NotFoundOrganisme } from "../../organism";
export default function NotFound() {
     useEffect(()=>{
        document.title='initer3737 | not-found-404'
     },[])
    return(
       <NotFoundOrganisme/>
    )
}