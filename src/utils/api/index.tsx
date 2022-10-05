import React from "react";

        type props={
            method:string,
            url:string
        }
 async function Api(props:props) {
        const{method,url}=props;
    const urlApi=url;
    const apiSendMethod={post:'post',get:'get',value:method.toLowerCase()}
            const {post,get,value}=apiSendMethod;
                if(value !== post && value !== get){}
       const fetchdata=await(await fetch(urlApi,{
            method:method,
            mode:'cors',
            cache:'no-cache'
       })).json();
       return fetchdata;
}

//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch