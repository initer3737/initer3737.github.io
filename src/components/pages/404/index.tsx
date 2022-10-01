import React from "react";
import {
    Img
} from '../../atom'
import Logo from '../../../imgs/banner-982162_1920.jpg'
import style from './404.module.css'
export default function NotFound() {
    return(
        <>
            {/* <Img
                src={Logo}
                srcset={'srcset'}
                alt={"image-banner"}
                className={"w-100"}
                attr={[]}                
            /> */}
            <div className={style.404}></div>
        </>
    )
}