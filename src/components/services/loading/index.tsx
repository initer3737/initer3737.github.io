import { HashLoader } from 'react-spinners';
export default function LoadingData(){
    return( 
     <div className="d-flex justify-content-center col-12">
         <HashLoader
         // cssOverride={}
         size={"200"}
         aria-label="Loading Spinner"
         data-testid="loader"
         />
      </div>   
     )
 }