import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './components/routes';
import { ScaleLoader } from 'react-spinners';

const LoadingData=()=>{
   return( 
        <div className="d-flex flex-column align-items-center h-100">
            <ScaleLoader
            cssOverride={{  
            marginTop:'50vh',  
            }}
            aria-label="Loading Spinner"
            data-testid="loader"
            color='#36d7b7'
            />
            <p className={``}>Loading...</p>
        </div>
    )
}
function App(){
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },9000)   
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