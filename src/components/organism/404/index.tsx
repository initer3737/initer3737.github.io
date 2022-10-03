import React from "react";
import Logo from '../../../imgs/404.gif'
export default function NotFound() {
    return(
        <div className="">
                <img src={Logo} alt="" className="w-50 h-100 d-none d-sm-none d-md-inline" />
                <img src={Logo} alt="" className="col-12 col-md-6 h-100" />
        </div>
    )
}