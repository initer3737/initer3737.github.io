import {useEffect,useState} from 'react'
import { Card } from '../../assembleComponent'
import AnimeList from './animeList'
export default function Anime(): JSX.Element {
  let [randomQuotesdataIndex,setrandomQuotesDataIndex]=useState(0)
  let [randomQuotes,setRandomQuotes]=useState([{
    anime: '',
    character: '',
    quote: ''
  }])
  

  useEffect(()=>{
     const AnimeRandomQuotes=async ()=>{
       try {
          const url='https://animechan.vercel.app/api/quotes'//9
          const dataApi= await(await fetch(url)).json()
            return setRandomQuotes({...dataApi})
       } catch (e:any) {
        //  console.log(e.msg())
       }
        
     }
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
        setInterval(()=>{
          setrandomQuotesDataIndex(updateIndexData(9,0,false));
        },15000);
     try {
        AnimeRandomQuotes();
     } catch (e:any) {
        console.log(e.msg());
     }
      
  },[])
      const animeQuotes=randomQuotes[randomQuotesdataIndex];
  return (
    <>
        <div className='text-dark d-flex justify-content-center flex-column gap-3'>
        <div className='text-dark d-flex justify-content-center'>
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
        </div>
          <AnimeList/>
        </div>
    </>
  )
}
