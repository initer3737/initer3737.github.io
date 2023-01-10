import React from "react";
import Logo from '../../../imgs/404.gif'
import './notFound.css'
export default function NotFound() {
    return(
        <div className="not__found__container">
                <img src={Logo} alt="" className="h-100 w-100" />
                <div className="not__found__container__text">
                <p className="">
                    404 not found
                </p>
                </div>
        </div>
    )
}