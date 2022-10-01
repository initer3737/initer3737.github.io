import React from "react";
import {
    Img
} from '../../atom'
import Logo from '../../../imgs/404.gif'
import style from './404.module.css'
export default function NotFound() {
    return(
        <>
            {/* <Img
                src={Logo}
                srcset={'srcset'}
                alt={"image-banner"}
                className={"w-100"}
                width={"100vw"}
                height={"100vh"} 
                attr={[]}            
                /> */}
            {/* <Img
                src={Logo}git
                srcset={'srcset'}
                alt={"image-banner"}
                className={"w-100"}
                width={"100vw"}
                height={"100vh"} 
                attr={[]}            
                /> */}
                <img src={Logo} alt="" className="w-50 h-100" />
                <img src={Logo} alt="" className="w-50 h-100" />
        </>
    )
}