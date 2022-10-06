import React, { useEffect } from "react";
import favicon from '../../imgs/kitten-7157608.png';
    import {
        Routes as Switch, // similiar to switch
        Route ,
        Navigate
        } from 'react-router-dom'
    import {
        NotFound,
        HomePage,
        Anime,
        About,
        LyricSong,
        Quotes,
        Game
    } from '../pages'
    import {
        Header,
        Footer,
        Nav,
        ScrollToTop
    } from '../assembleComponent'

export default function Routes(){
  useEffect(() => {
        const changeFavicon=(src:string)=>{
           let favicon=document.getElementById('favicon')?.getAttribute('href')
           return favicon=src;
        }
        changeFavicon(favicon)
  }, []);
     return (
        <div className="d-flex flex-column justify-space-between h-100 col-12">
            <div className="w-100">
                <ScrollToTop/>
                <Nav/>
                <Header/>
            </div>
               <>
                    <Switch>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/lyrics" element={<LyricSong />} />
                        <Route path="/quotes" element={<Quotes />} />
                        <Route path="/Anime" element={<Anime />} />
                        <Route path="/game" element={<Game/>} />
                        <Route path="/404" element={<NotFound/>} />
                        <Route path='*' element={<Navigate replace to='/404'/>} />
                    </Switch>
               </>
            <>
                <Footer/>
            </>   
        </div>
     )
}