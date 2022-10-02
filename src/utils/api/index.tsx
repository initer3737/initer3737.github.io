// import React from "react";
import axios, { AxiosResponse } from 'axios';
        type props={
            method:string,
            url:string
        }
 function Api(props:props) {
    const {method,url}=props;
    let returndata: Promise<AxiosResponse<any, any>>
    method=='get'
            ?
        returndata=axios.get(url)
            :
        returndata=axios.post(url)
        return returndata;
}
