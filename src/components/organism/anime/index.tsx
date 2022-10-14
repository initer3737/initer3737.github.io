import {useEffect,useState} from 'react'
import { Card } from '../../assembleComponent'
export default function Anime(): JSX.Element {
  let [AnimeCarddataIndex,setAnimeCardDataIndex]=useState(0)
  let [AnimeCard,setAnimeCard]=useState(
      [
        {
          anime_id:'',
          anime_name:'',
          anime_img:''
        }
      ]
  )
  let [randomQuotesdataIndex,setrandomQuotesDataIndex]=useState(0)
  let [randomQuotes,setRandomQuotes]=useState([{
    anime: '',
    character: '',
    quote: ''
  }])
  

  useEffect(()=>{
    //

// await fetch(
//   `https://api.trace.moe/search?anilistID=1&url=${encodeURIComponent(
//     "https://images.plurk.com/32B15UXxymfSMwKGTObY5e.jpg"
//   )}`
// ).then((e) => e.json());
    
    // fetch('https://animechan.vercel.app/api/quotes')
          //function that get api endpoint
     const AnimeCards=async ()=>{
        const url='https://anime-facts-rest-api.herokuapp.com/api/v1'//12
        const dataApi= await(await fetch(url)).json()
          return setAnimeCard({...dataApi.data})
     }
     const AnimeRandomQuotes=async ()=>{
        const url='https://animechan.vercel.app/api/quotes'//9
        const dataApi= await(await fetch(url)).json()
          return setRandomQuotes({...dataApi})
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
          setAnimeCardDataIndex(updateIndexData(12,3,true)); //skip jujutsu kaisen at index 3 because it return 404
        },5000);
        setInterval(()=>{
          setrandomQuotesDataIndex(updateIndexData(9,0,false));
        },15000);
     //call function that call the api endpoint
     try {
        AnimeCards();
     } catch (e:any) {
        console.log(e.msg());
     }
     try {
        AnimeRandomQuotes();
     } catch (e:any) {
        console.log(e.msg());
     }
     
            console.log(async ()=>await (await fetch(await('https://animechan.vercel.app/api/quotes'))).json)   
  },[])
      const animeCard=AnimeCard[AnimeCarddataIndex]
      const animeQuotes=randomQuotes[randomQuotesdataIndex];
  return (
    <>
        {/* <div className='text-dark d-flex justify-content-center'>
          <Card
          footer={animeCard.anime_name}
          borderColor={'info'}
          headerTitle={animeCard.anime_name}
          headerIcon={'film'}
          headerIconColor={'info'}
          bodyImgSrc={animeCard.anime_img}
          body={''} 
          className={'col-12 col-md-6 col-lg-4'}          
          />
        </div> */}
        <div className='text-dark d-flex justify-content-center'>
        <div className='text-dark d-flex justify-content-center'>
          <Card
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
        </div>
    </>
  )
}
