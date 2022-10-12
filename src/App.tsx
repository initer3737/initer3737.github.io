import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './components/routes';
import { PuffLoader } from 'react-spinners';

const LoadingData=()=>{
   return( 
        <PuffLoader
        cssOverride={{
            
        }}
        size='200'
        aria-label="Loading Spinner"
        data-testid="loader"
        color='#36d7b7'
        />
    )
}
function App(){
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },4000)   
    },[])

    return( 
    <div className="d-flex align-items-center justify-content-center h-100 col-12 pb-5">
        {
        loading
            ?
        <LoadingData/>
            :
        <Routes/>
        }
    </div>    
    )
}
export default App;