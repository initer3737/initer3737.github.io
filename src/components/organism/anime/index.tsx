import axios from 'axios'
import { randomInt } from 'crypto'
import {useEffect,useState} from 'react'
import { Card } from '../../molekuls'
require('../../../utils/api/index')
export default function Anime(): JSX.Element {
  let [Anime,setAnime]=useState(
      [
        {
          anime_id:'',
          anime_name:'',
          anime_img:''
        }
      ]
  )
  let [animeIndex,setAnimeIndex]=useState(0)
  useEffect(()=>{
    // const url='https://animechan.vercel.app/api'
    //  const api =axios.create({baseURL:url})
    //  api.get('/quotes')
    //  .then(async (res)=>setAnime(res.data))
    //  .catch((err)=>console.log(err));
// const url='https://anime-facts-rest-api.herokuapp.com/api/v1'
    // fetch('https://animechan.vercel.app/api/quotes')
    //   .then(response => response.json())
    //   .then(quotes => setData(quotes))
      //functions
     const facts=async ()=>{
        const url='https://anime-facts-rest-api.herokuapp.com/api/v1'
        const dataApi= await(await fetch(url)).json()
        
          return setAnime({...dataApi.data})
     }

     const updateIndexAnime=()=>{
        let randomVal=Math.floor(Math.random()*10);
       return setAnimeIndex(randomVal);
     }
        setTimeout(()=>updateIndexAnime(),3000);
     //call function
     facts();
      
              // console.log(arrayobj());
              
  },[])
      // const {anime_id,anime_name,anime_img}=...Anime;
      
      const anime=Anime[animeIndex]//[randomVal];
  return (
    <div className='text-dark d-flex justify-content-center'>
      <Card
        footer={anime.anime_name}
        borderColor={'info'} 
        headerTitle={anime.anime_name} 
        headerIcon={'film'} 
        headerIconColor={'info'} 
        bodyImgSrc={anime.anime_img}        
        />
    </div>
  )
}
