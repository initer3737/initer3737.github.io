import {useEffect,useState} from 'react'
// import { Card } from '../../assembleComponent'
// import AnimeList from './animeList'
import { VideoFromYoutube } from '../../atom'
export default function Anime(): JSX.Element {
  const bahasa_anime_link='https://www.youtube.com/embed/ofZXuYp_teQ?si=rmARFzxWkksD7IP2'
  let [randomQuotesdataIndex,setrandomQuotesDataIndex]=useState(0)
  let [randomQuotes,setRandomQuotes]=useState([{
    anime: '',
    character: '',
    quote: ''
  }])
  
  // useEffect(()=>{
  //    const AnimeRandomQuotes=async ()=>{
  //      try {
  //         const url='https://animechan.vercel.app/api/quotes'//9
  //         const dataApi= await(await fetch(url)).json()
  //           return setRandomQuotes({...dataApi})
  //      } catch (e:any) {
  //       //  console.log(e.msg())
  //      }
        
  //    }
            //utils to generate random number depend on the argument
     const updateIndexData=(numb:number,exceptNum:number,exceptable:boolean)=>{
        let randomVal=Math.floor(Math.random()*numb);
          switch (exceptable) {
            case true: //skip the number
              randomVal=Math.floor(Math.random()*numb);
                while (randomVal === exceptNum) {
                  randomVal=Math.floor(Math.random()*numb);
                }
              break;
            default:
               randomVal=Math.floor(Math.random()*numb);
              break;
          }
       return randomVal;
     }    //set random data index every seconds
        // setInterval(()=>{
        //   setrandomQuotesDataIndex(updateIndexData(9,0,false));
        // },15000);
    //  try {
    //     AnimeRandomQuotes();
    //  } catch (e:any) {
    //     console.log(e.msg());
    //  }
      
  // },[])<iframe width="560" height="315" src="https://www.youtube.com/embed/ofZXuYp_teQ?si=rmARFzxWkksD7IP2"
      // const animeQuotes=randomQuotes[randomQuotesdataIndex];
  return (
    <>
        <div className="row text-center bg-white my-4 py-4 d-flex justify-content-center flex-column gap-3">
              <h3 className="py-4 text-center text-capitalize">belajar bahasa anime</h3>
              <div className="col-12 col-md-6 shadow align-self-center">
                <VideoFromYoutube src={bahasa_anime_link} />
              </div>
        </div>
        <div className='row text-dark d-flex justify-content-center flex-column gap-3'>
        {/* <div className='text-dark d-flex justify-content-center'>
          <Card
          key={randomQuotesdataIndex}
            footer={animeQuotes.character}
            borderColor={'info'}
            headerTitle={animeQuotes.anime}
            headerIcon={'chat-left-quote'}
            headerIconColor={'dark w-50'}
            bodyImgSrc={''}
            body={animeQuotes.quote} 
            className={'col-12'}            
            />
        </div> */}
          {/* <AnimeList/> */}
        </div>
    </>
  )
}
