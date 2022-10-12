import { ScaleLoader } from 'react-spinners';
export default function LoadingData(){
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