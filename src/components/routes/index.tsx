import React, { useEffect, useState } from "react";
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
import {
     Login, useThemes 
} from "../services";
import {
    ProtectedRoutes
} from "../services";
import LoadingData from "../services/loading";

export default function Routes(){
    // let [loading,setLoading]=useState(true);
  useEffect(() => {
        const changeFavicon=(src:string)=>{
           let favicon=document.getElementById('favicon')?.getAttribute('href')
           return favicon=src;
        }
        changeFavicon(favicon)
        // setTimeout(()=>{
        //     setLoading(false);
        // },10000)
    }, []);
    // useThemes();

     return (
        <div className="d-flex flex-column h-100 col-12">
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
                        <Route element={<ProtectedRoutes/>}>
                            <Route path="/game" element={<Game/>} />
                        </Route>
                        <Route path="/login" element={<Login/>} />
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