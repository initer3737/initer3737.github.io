import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './components/routes';
import {LoadingData} from './components/services';


function App(){
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },2000)   
    },[])

    return( 
    <>
        {
        loading
            ? 
        <LoadingData/>
             :
        <Routes/>
        }
        
    </>    
    )
}
export default App;