import React, { useEffect } from "react";
import {useLocation} from 'react-router-dom'
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
     Login ,
     ProtectedRoutes
} from "../services";

export default function Routes(){
    const location=useLocation();
        const {pathname}=location;
        const path=pathname.split('/');   
  useEffect(() => {
        const changeFavicon=(src:string)=>{
           let favicon=document.getElementById('favicon')?.getAttribute('href')
           return favicon=src;
        }
        changeFavicon(favicon)
    }, []);

     return (
        <div className="d-flex flex-column h-100 w-100 overflow-x-hidden">
            <div className="w-100">
                <ScrollToTop/>
                <Nav/>
                <Header/>
            </div>
               <>
                    <Switch>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/songs" element={<LyricSong />} />
                        <Route path="/quotes" element={<Quotes />} />
                        <Route path="/animes" element={<Anime />} />
                        <Route  element={<ProtectedRoutes/>}>
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